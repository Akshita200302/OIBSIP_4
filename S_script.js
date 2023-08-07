function logout() {
            // Clear user information from local storage (assuming the "users" key contains user credentials)
            localStorage.removeItem("users");

            // Redirect to the login page (change "login.html" to the actual login page URL)
            window.location.href = "login.html";
        }