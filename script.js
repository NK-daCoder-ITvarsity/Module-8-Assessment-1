function toggleForm() {
    const container = document.querySelector('.container');
    container.classList.toggle('show-register');
    container.classList.toggle('show-login');
}

// Optional: You can add form validation or backend logic here
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Your login logic
    alert("Login successful!");
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Your registration logic
    alert("Registration successful!");
});
  