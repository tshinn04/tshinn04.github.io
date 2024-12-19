function register(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Kiểm tra xem mật khẩu có khớp không
    if (password !== confirmPassword) {
        document.getElementById('register-message').textContent = "Passwords do not match!";
        return false;
    }

    // Lưu thông tin đăng ký vào localStorage (hoặc một phương thức lưu trữ khác)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    document.getElementById('register-message').textContent = "Registration successful!";
    return true;
}