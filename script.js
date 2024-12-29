function loadPage(page) {
    const contentSections = document.querySelectorAll('.content');

    contentSections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active-content');
    });

    // Display the selected page's section
    const selectedPage = document.getElementById(`${page}-content`);
    if (selectedPage) {
        selectedPage.style.display = 'block';
        selectedPage.classList.add('active-content');
    }
}

// Function to open the login/signup modal
function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Function to close the login/signup modal
function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Function to handle login/signup form submission
function handleLoginSignup(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    if (username && email) {
        // Save to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);

        // Close the modal
        closeAuthModal();

        // Update greeting
        updateUserGreeting();
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to update the user greeting
function updateUserGreeting() {
    const username = localStorage.getItem('username');
    const userGreetingElement = document.getElementById('userGreeting');

    if (username && userGreetingElement) {
        userGreetingElement.textContent = `Welcome, ${username}!`;
    }
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('authModal');
    if (event.target === modal) {
        closeAuthModal();
    }
};

// Initialize the page on load
window.onload = function () {
    // Update user greeting if logged in
    updateUserGreeting();

    // Load the home page by default
    loadPage('home');
};
