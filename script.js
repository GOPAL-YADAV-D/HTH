document.addEventListener('DOMContentLoaded', (event) => {
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