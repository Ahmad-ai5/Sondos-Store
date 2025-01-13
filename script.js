//let cart = []; // مصفوفة لتخزين العناصر في السلة

// إضافة المنتج إلى السلة
function addToCart(productId, productName, productPrice, productImage) {
    // تحقق من وجود المنتج في السلة
    const productIndex = cart.findIndex(item => item.id === productId);
    
    if (productIndex > -1) {
        // إذا كان المنتج موجودًا، زد الكمية
        cart[productIndex].quantity += 1;
    } else {
        // إذا لم يكن المنتج موجودًا، أضفه إلى السلة
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1, image: productImage });
    }
    
    updateCartUI();
}

// تحديث واجهة المستخدم (عدد العناصر والإجمالي)
function updateCartUI() {
    // تحديث عدد العناصر في السلة
    document.getElementById("cart-count").textContent = cart.reduce((acc, item) => acc + item.quantity, 0);

    // تحديث محتويات السلة
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ''; // إفراغ السلة أولًا
    let totalPrice = 0;

    cart.forEach(item => {
        
        const listItem = document.createElement("li");

        // إضافة صورة المنتج إلى السلة
        const productImage = document.createElement("img");
        productImage.src = item.image;  // التأكد من استخدام الرابط الصحيح للصورة
        productImage.alt = item.name;
        productImage.style.width = "50px"; // تحديد حجم الصورة في السلة
        productImage.style.height = "50px"; // تأكيد الارتفاع
        productImage.style.objectFit = "cover"; // الحفاظ على أبعاد الصورة
        productImage.style.marginRight = "10px"; // إضافة مسافة بين الصورة والنص
        
        const itemText = document.createElement("span");
        itemText.textContent = `${item.name} (الكمية: ${item.quantity}) - ${item.price * item.quantity} درهم`;

        listItem.appendChild(productImage);
        listItem.appendChild(itemText);
        cartItemsContainer.appendChild(listItem);

        totalPrice += item.price * item.quantity;
    });

    // تحديث الإجمالي
    document.getElementById("total-price").textContent = totalPrice;
}

// إظهار أو إخفاء السلة عند الضغط على زر السلة
function toggleCart() {
    const cartPopup = document.getElementById("cart");
    cartPopup.style.display = (cartPopup.style.display === "block") ? "none" : "block";
}

// لإخفاء السلة عندما تكون الشاشة صغيرة أو خارج المنطقة
window.addEventListener("click", function(event) {
    if (!event.target.closest("#cart") && !event.target.closest(".cart button")) {
        document.getElementById("cart").style.display = "none";
    }
});








// دالة لعرض نافذة الاتصال
function showContactInfo() {
    document.getElementById('contact-popup').style.display = 'block';
}

// دالة لإغلاق نافذة الاتصال
function closeContactPopup() {
    document.getElementById('contact-popup').style.display = 'none';
}

// دالة لفتح وإغلاق السلة
function toggleCart() {
    var cart = document.getElementById('cart');
    if (cart.style.display === 'block') {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
    }
}

// دالة لإضافة المنتجات إلى السلة
function addToCart(productId, productName, productPrice, productImage) {
    var cartItems = document.getElementById('cart-items');
    var totalPrice = document.getElementById('total-price');
    var cartCount = document.getElementById('cart-count');

    // إضافة المنتج إلى السلة
    var listItem = document.createElement('li');
    listItem.innerHTML = '<img src="' + productImage + '" alt="' + productName + '">' +
                         '<span>' + productName + '</span>' +
                         '<span>' + productPrice + ' درهم</span>';
    cartItems.appendChild(listItem);

    // تحديث إجمالي السعر
    var currentTotal = parseFloat(totalPrice.innerText) || 0;
    currentTotal += productPrice;
    totalPrice.innerText = currentTotal.toFixed(2);

    // تحديث عدد العناصر في السلة
    cartCount.innerText = cartItems.childElementCount;
}

// إظهار خيارات الدفع
function showPaymentOptions() {
    document.getElementById('payment-options').style.display = 'block';
}

// إظهار نموذج الدفع باستخدام الفيزا
function showCardForm() {
    document.getElementById('payment-options').style.display = 'none';
    document.getElementById('card-form').style.display = 'block';
}

// إغلاق نموذج الدفع
function closeCardForm() {
    document.getElementById('card-form').style.display = 'none';
    document.getElementById('payment-options').style.display = 'block';
}

// دفع باستخدام كاش (أو أي منطق آخر)
function payWithCash() {
    alert("تم اختيار الدفع كاش.");
}

// إرسال بيانات الفيزا
function submitCardDetails() {
    var cardNumber = document.getElementById('card-number').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var cvv = document.getElementById('cvv').value;

    // تخزين البيانات بشكل مبدئي في ملف (سيتم تنفيذ عملية الخادم هنا بشكل صحيح)
    var paymentDetails = {
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvv: cvv
    };

    // تحويل البيانات إلى JSON
    var jsonDetails = JSON.stringify(paymentDetails);

    // حفظ البيانات إلى ملف باستخدام JavaScript (فقط للعرض التوضيحي)
    var blob = new Blob([jsonDetails], { type: 'application/json' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'payment-details.json'; // اسم الملف الذي سيتم تنزيله
    link.click();

    alert("تم إرسال معلومات الفيزا بنجاح.");
    closeCardForm(); // إغلاق النموذج بعد إرسال البيانات
}


let cart = []; // مصفوفة السلة

// إضافة المنتج إلى السلة
function addToCart(productId, productName, productPrice, productImage) {
    const productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex > -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1, image: productImage });
    }

    updateCartUI();
}

// تحديث واجهة المستخدم
function updateCartUI() {
    const cartCount = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartItemsContainer.innerHTML = ''; // إفراغ السلة
    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        const productImage = document.createElement("img");
        productImage.src = item.image;
        productImage.alt = item.name;
        productImage.style.width = "50px";
        productImage.style.marginRight = "10px";

        const itemText = document.createElement("span");
        itemText.textContent = `${item.name} (الكمية: ${item.quantity}) - ${item.price * item.quantity} درهم`;

        listItem.appendChild(productImage);
        listItem.appendChild(itemText);
        cartItemsContainer.appendChild(listItem);

        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// تنزيل الطلبات كملف JSON
function downloadOrdersAsJSON() {
    if (cart.length === 0) {
        alert("السلة فارغة! أضف منتجات أولاً.");
        return;
    }

    const jsonContent = JSON.stringify(cart, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "orders.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("تم تنزيل الملف بنجاح!");
}

// إرسال الطلبات إلى الخادم
function submitOrders() {
    fetch('/save-orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orders: cart })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        cart = []; // تفريغ السلة بعد الإرسال
        updateCartUI();
    })
    .catch(error => console.error('خطأ أثناء الإرسال:', error));
}
// إرسال الطلبات إلى الخادم
function submitOrders() {
    if (cart.length === 0) {
        alert("السلة فارغة! أضف منتجات أولاً.");
        return;
    }

    fetch('/save-orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orders: cart }) // إرسال الطلبات بصيغة JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('فشل إرسال الطلبات إلى الخادم');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message); // عرض رسالة النجاح
        cart = []; // تفريغ السلة بعد الإرسال
        updateCartUI(); // تحديث واجهة السلة
    })
    .catch(error => {
        console.error('حدث خطأ أثناء إرسال الطلبات:', error);
        alert('حدث خطأ أثناء إرسال الطلبات. يرجى المحاولة لاحقًا.');
    });
}



























