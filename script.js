document.addEventListener('DOMContentLoaded', (event) => {
    // Simulate user login status and team status
    var userLoggedIn =true; 
    var userInTeam = true; 

    // Function to check if the user is logged in
    function isLoggedIn() {
        return userLoggedIn;
    }

    // Function to check if the user is in a team
    function isInTeam() {
        return userInTeam;
    }

    // Function to fetch user name from the backend
    function fetchUserName() {
        // Simulate fetching user name from the backend
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("John Doe");
            }, 1000);
        });
    }

    // Function to fetch team members from the backend
    function fetchTeamMembers() {
        // Simulate fetching team members from the backend
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(["Alice", "Bob", "Charlie"]);
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
        loginContainer.style.display = 'flex';
    }

    // Get the popup
    var popup = document.getElementById("popup");
    var popupContent = document.querySelector(".popup-content");

    // Get the <span> element that closes the popup
    var closePopup = document.getElementById("close-popup");

    // Get the divs that will trigger the popup
    var topLeftTwoLeft = document.querySelector(".top-left-two .left");
    var topRight = document.querySelector(".top-right");
    var bottomLeft = document.querySelector(".bottom-left");

    // Function to show the popup with specific content
    function showPopup(content) {
        popupContent.innerHTML = `
            <span id="close-popup" class="close-popup">&times;</span>
            ${content}
        `;
        popup.style.display = 'block';

        // Re-attach the close event listener
        document.getElementById('close-popup').onclick = function() {
            popup.style.display = 'none';
        };
    }

    // Check if elements exist before adding event listeners
    if (topLeftTwoLeft) {
        topLeftTwoLeft.onclick = function() {
            if (isLoggedIn() && isInTeam()) {
                fetchTeamMembers().then((teamMembers) => {
                    let teamContent = `
                <div class="popup-wrapper"> 
                        <div class="header team-header">
                            <h1>Your Team</h1>
                        </div>
                        <div class="content team-content">
                            <ul>
                    `;
                    teamMembers.forEach(member => {
                        teamContent += `<li>${member}</li>`;
                    });
                    teamContent += `
                            </ul>
                            <input type="text" class="ppt-link-input" id="ppt-link" placeholder="Enter PPT link">
                            <button id="submit-ppt" class="submit-ppt-btn">Submit</button>
                        </div>
                </div>
                    `;
                    showPopup(teamContent);

                    // Add event listener for submitting PPT link
                    document.getElementById('submit-ppt').onclick = function() {
                        var pptLink = document.getElementById('ppt-link').value;
                        if (pptLink) {
                            // Simulate saving to backend
                            alert(`PPT link submitted: ${pptLink}`);
                            popup.style.display = 'none';
                        }
                    };
                });
            } else {
                showPopup(`
                    <div class="popup-wrapper"> 
                        <div class="header">
                            <h1>Create or Join a Team</h1>
                        </div>
                        <div class="content">
                            <a href="#" id="create-team" class="btn">Create Team</a>
                            <a href="#" id="join-team" class="btn">Join Team</a>
                        </div>
                    </div>
                `);

                // Add event listener for "Create Team" button
                document.getElementById('create-team').onclick = function() {
                    showPopup(`
                        <div class="popup-wrapper">
                            <div class="header">
                                <h1>Create a Team</h1>
                            </div>
                            <div class="content">
                                <input type="text" id="team-name" placeholder="Enter team name">
                                <button id="submit-team">Create Team</button>
                             </div>
                        </div>
                    `);

                    // Add event listener for submitting team name
                    document.getElementById('submit-team').onclick = function() {
                        var teamName = document.getElementById('team-name').value;
                        if (teamName) {
                            // Simulate saving to backend
                            alert(`Team created: ${teamName}`);
                            popup.style.display = 'none';
                        }
                    };
                };

                // Add event listener for "Join Team" button
                document.getElementById('join-team').onclick = function() {
                    showPopup(`
                        <div class="popup-wrapper">
                            <div class="header">
                                <h1>Join a Team</h1>
                            </div>
                            <div class="content">
                                <input type="text" id="team-code" placeholder="Enter team code">
                                <button id="submit-code">Join Team</button>
                            </div>
                        </div>
                    `);

                    // Add event listener for submitting team code
                    document.getElementById('submit-code').onclick = function() {
                        var teamCode = document.getElementById('team-code').value;
                        if (teamCode) {
                            // Simulate checking the team code and joining the team
                            alert(`Joined team with code: ${teamCode}`);
                            popup.style.display = 'none';
                        }
                    };
                };
            }
        }
    }

    if (topRight) {
        topRight.onclick = function() {
            showPopup(`
                <div class="header">
                    <h1>Top Right Content</h1>
                </div>
                <div class="content">
                    <p>This is the content for the top right div.</p>
                </div>
            `);
        }
    }

    if (bottomLeft) {
        bottomLeft.onclick = function() {
            showPopup(`
                <div class="header">
                    <h1>Bottom Left Content</h1>
                </div>
                <div class="content">
                    <p>This is the content for the bottom left div.</p>
                </div>
            `);
        }
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});