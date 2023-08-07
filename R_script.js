function register() {
            var email = document.getElementById("registration-username").value;
            var password = document.getElementById("registration-password").value;

            // Email validation using regular expression
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !password) {
                document.getElementById("registration-message").textContent = "Please enter both email and password.";
            } else if (!emailRegex.test(email)) {
                document.getElementById("registration-message").textContent = "Invalid email format. Please enter a valid email address.";
            } else {
                var users = JSON.parse(localStorage.getItem("users")) || {};
                if (users[email]) {
                    document.getElementById("registration-message").textContent = "Email already registered. Try a different one.";
                } else {
                    users[email] = password;
                    localStorage.setItem("users", JSON.stringify(users));
                    document.getElementById("registration-message").textContent = "Registration successful! Please login now.";
                    // Show a pop-up message after successful registration
                    alert("Registration successful! Please login now.");
                    // Redirect to the login page (change "login.html" to the actual login page URL)
                    window.location.href = "login.html";
                }
            }
        }