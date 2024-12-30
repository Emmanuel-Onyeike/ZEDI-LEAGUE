// Function to calculate tournament start date: 19 days, 3 hours, 43 minutes, 30 seconds from now
const tournamentStartDate = new Date();
tournamentStartDate.setDate(tournamentStartDate.getDate() + 19); // Add 19 days
tournamentStartDate.setHours(tournamentStartDate.getHours() + 3); // Add 3 hours
tournamentStartDate.setMinutes(tournamentStartDate.getMinutes() + 43); // Add 43 minutes
tournamentStartDate.setSeconds(tournamentStartDate.getSeconds() + 30); // Add 30 seconds

// Save the tournament start date to localStorage if not already saved
if (!localStorage.getItem('tournamentStartDate')) {
    localStorage.setItem('tournamentStartDate', tournamentStartDate.getTime());
} else {
    // Use the saved tournament start date from localStorage
    tournamentStartDate.setTime(localStorage.getItem('tournamentStartDate'));
}

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = tournamentStartDate - now;

    // Get the days, hours, minutes, and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML with the countdown values
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown has ended, show that the tournament has started
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".notification p").innerHTML = "<strong>The tournament has started!</strong>";
        document.querySelector(".countdown").style.display = "none"; // Hide countdown
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Call the function initially to set the countdown
updateCountdown();
