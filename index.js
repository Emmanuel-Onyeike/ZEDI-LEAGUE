
// Get modal and notification icon
const modal = document.getElementById("notification-modal");
const bellIcon = document.getElementById("bell-icon");
const closeButton = document.getElementById("close-btn");

// When the user clicks on the bell icon, open the modal
bellIcon.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block"; // Show the modal
}

// When the user clicks on the close button, close the modal
closeButton.onclick = function() {
    modal.style.display = "none"; // Hide the modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal if the user clicks outside
    }
}
