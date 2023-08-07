function login() {
            var username = document.getElementById("login-username").value;
            var password = document.getElementById("login-password").value;

            if (!username || !password) {
                document.getElementById("login-message").textContent = "Please enter both username and password.";
                return;
            }

            var users = JSON.parse(localStorage.getItem("users")) || {};
            if (users[username] === password) {
                document.getElementById("login-message").textContent = "Login successful! Welcome, " + username + ".";
                // Redirect to the secure page (change "secure.html" to the actual secure page URL)
                window.location.href = "secure.html";
            } else {
                document.getElementById("login-message").textContent = "Incorrect username or password.";
            }
        }