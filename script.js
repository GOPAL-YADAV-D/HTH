document.addEventListener('DOMContentLoaded', (event) => {
    // Simulate user login status
    var userLoggedIn = true; // Change this to false to simulate a logged-out user

    // Function to check if the user is logged in
    function isLoggedIn() {
        return userLoggedIn;
    }

    // Function to fetch user name from the backend
    function fetchUserName() {
        // Simulate fetching user name from the backend
        // Replace this with actual fetch call to your backend
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("John Doe");
            }, 1000);
        });
    }

    // Get the main content and login container divs
    var mainContent = document.getElementById('main-content');
    var loginContainer = document.getElementById('login-container');
    var userNameSpan = document.getElementById('user-name');

    // Conditionally display the main content or login container
    if (isLoggedIn()) {
        mainContent.style.display = 'block';
        fetchUserName().then((userName) => {
            userNameSpan.textContent = userName;
        });
    } else {
        loginContainer.style.display = 'block';
    }

    // Get the popup
    var popup = document.getElementById("popup");

    // Get the <span> element that closes the popup
    var closePopup = document.getElementById("close-popup");

    // Get the divs that will trigger the popup
    var topLeftTwoLeft = document.querySelector(".top-left-two .left");
    var topRight = document.querySelector(".top-right");
    var bottomLeft = document.querySelector(".bottom-left");

    // Check if elements exist before adding event listeners
    if (topLeftTwoLeft) {
        topLeftTwoLeft.onclick = function() {
            popup.style.display = "block";
        }
    }

    if (topRight) {
        topRight.onclick = function() {
            popup.style.display = "block";
        }
    }

    if (bottomLeft) {
        bottomLeft.onclick = function() {
            popup.style.display = "block";
        }
    }

    // When the user clicks on <span> (x), close the popup
    if (closePopup) {
        closePopup.onclick = function() {
            popup.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});