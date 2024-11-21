let form = document.getElementById('form');
let name1 = document.getElementById('name1');
let errorname1 = document.getElementById('erorrname1');
let name2 = document.getElementById('name2');
let errorname2 = document.getElementById('erorrname2');
let email = document.getElementById('email');
let error_email = document.getElementById('erroremail');
let password = document.getElementById('password');
let error_password = document.getElementById('errorpassword');

form.addEventListener('submit', function(event) {
    let error = false;
    errorname1.innerHTML = "";
    errorname2.innerHTML = "";
    error_email.innerHTML = "";
    error_password.innerHTML = "";

    // التحقق من الاسم الأول
    if (name1.value.trim() === "") {
        error = true;
        errorname1.innerHTML = "لم تدخل الاسم بعد";
    } else if (name1.value.trim().length < 3) {
        error = true;
        errorname1.innerHTML = "الاسم الذي أدخلته قصير جداً. 3 أحرف هو الحد الأدنى.";
    }

    // التحقق من اسم العائلة
    if (name2.value.trim() === "") {
        error = true;
        errorname2.innerHTML = "لم تدخل اسم العائلة بعد";
    } else if (name2.value.trim().length < 3) {
        error = true;
        errorname2.innerHTML = "اسم العائلة الذي أدخلته قصير جداً. 3 أحرف هو الحد الأدنى.";
    }

    // التحقق من البريد الإلكتروني
    if (email.value.trim() === "") {
        error = true;
        error_email.innerHTML = "يجب عليك إدخال بريدك الإلكتروني";
    }

    // التحقق من كلمة المرور
    if (password.value.trim() === "") {
        error = true;
        error_password.innerHTML = "يجب عليك إدخال كلمة مرور";
    } else if (password.value.trim().length < 8) {
        error = true;
        error_password.innerHTML = "كلمة المرور قصيرة جداً. يجب إدخال 8 أحرف أو أرقام على الأقل";
    }

    if (error) {
        event.preventDefault();
    }
});