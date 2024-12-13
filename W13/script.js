document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('successMessage').textContent = '';



    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('tel').value.trim();


    let valid = true;

    // Validate username
    if (username.length < 3) {
        document.getElementById('usernameError').innerText = 'Username must be at least 3 characters long.';
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate password
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long.';
        valid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        valid = false;
    }
    // Validate phonenumber

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be in the format XXX-XXX-XXXX.';
        document.getElementById('phone').classList.add('invalid');
        valid = false;
    } else {
        document.getElementById('phone').classList.remove('invalid');
    }
    if (valid) {
        document.getElementById('successMessage').textContent = 'Registration successful!';

    }
});