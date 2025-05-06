function togglePassword() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

function changeLanguage(lang) {
    if (lang === 'zh_tw') {
        document.getElementById('username').placeholder = '帳號';
        document.getElementById('password').placeholder = '密碼';
        document.querySelector('.login-button').innerText = '登入';
        document.querySelector('.cookie-button').innerText = 'Cookie使用資訊';
    } else if (lang === 'en') {
        document.getElementById('username').placeholder = 'Username';
        document.getElementById('password').placeholder = 'Password';
        document.querySelector('.login-button').innerText = 'Log in';
        document.querySelector('.cookie-button').innerText = 'Cookie notice';
    }
}
