function togglePassword() {
    const passwordInput = document.getElementById('password');
    const button = event.currentTarget;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}
