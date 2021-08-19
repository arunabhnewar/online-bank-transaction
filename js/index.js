// login btn event handle using direct shortcut
document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'abcd@mail.com' && userPassword == 654321) {
        window.location.href = 'transaction-page.html';
    }
})