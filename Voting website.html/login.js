function login(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lấy thông tin từ localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Kiểm tra thông tin đăng nhập
    if (username === storedUsername && password === storedPassword) {
        document.getElementById('error-message').textContent = "Login successful!";
        // Chuyển hướng đến trang khác hoặc thực hiện hành động khác
        window.location.href = 'index.html'; 

        return true;
    } else {
        document.getElementById('error-message').textContent = "Incorrect username or password!";
        return false;
    }
}