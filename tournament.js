// Check if the target date is already stored in localStorage
let targetDate = new Date(localStorage.getItem("targetDate"));

if (!targetDate) {
    // If no target date is stored, set a new target date 20 days ahead from now
    targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 20);
    
    // Store the new target date in localStorage
    localStorage.setItem("targetDate", targetDate);
}

// Function to update the countdown every second
function updateCountdown() {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        // Timer is done, display the final message
        document.getElementById("countdownTimer").innerHTML = "The tournament has started!";
        clearInterval(countdownInterval); // Stop the countdown
    } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown in the HTML
        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }
}

// Start the countdown
const countdownInterval = setInterval(updateCountdown, 1000);

// Run the function immediately to show the timer
updateCountdown();
