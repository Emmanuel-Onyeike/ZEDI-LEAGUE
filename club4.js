// Player data for each player
const playerData = {
    'Player 1': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '85',
            shooting: '90',
            speed: '92',
            defense: '80',
            stamina: '75',
            strength: '88'
        },
        rating: 85
    },
    'Player 2': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '78',
            shooting: '80',
            speed: '85',
            defense: '75',
            stamina: '70',
            strength: '80'
        },
        rating: 75
    },
    'Player 3': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '88',
            shooting: '93',
            speed: '91',
            defense: '86',
            stamina: '80',
            strength: '85'
        },
        rating: 90
    },
    'Player 4': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '70',
            shooting: '60',
            speed: '65',
            defense: '72',
            stamina: '78',
            strength: '74'
        },
        rating: 68
    },
    'Player 5': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '92',
            shooting: '87',
            speed: '90',
            defense: '88',
            stamina: '85',
            strength: '89'
        },
        rating: 91
    },
    'Player 6': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '76',
            shooting: '74',
            speed: '80',
            defense: '78',
            stamina: '82',
            strength: '76'
        },
        rating: 78
    },
    'Player 7': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '81',
            shooting: '85',
            speed: '88',
            defense: '85',
            stamina: '87',
            strength: '82'
        },
        rating: 83
    },
    'Player 8': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '79',
            shooting: '75',
            speed: '78',
            defense: '83',
            stamina: '80',
            strength: '80'
        },
        rating: 77
    },
    'Player 9': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '90',
            shooting: '92',
            speed: '93',
            defense: '87',
            stamina: '91',
            strength: '90'
        },
        rating: 89
    },
    'Player 10': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '72',
            shooting: '70',
            speed: '74',
            defense: '80',
            stamina: '75',
            strength: '77'
        },
        rating: 73
    },
    'Player 11': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '87',
            shooting: '88',
            speed: '90',
            defense: '89',
            stamina: '85',
            strength: '84'
        },
        rating: 88
    },
    'Player 12': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '80',
            shooting: '78',
            speed: '80',
            defense: '75',
            stamina: '82',
            strength: '81'
        },
        rating: 80
    },
    'Player 13': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '86',
            shooting: '89',
            speed: '87',
            defense: '88',
            stamina: '84',
            strength: '85'
        },
        rating: 86
    }
};

// Function to display player details
function showPlayerDetails(playerName) {
    const player = playerData[playerName];

    if (player) {
        // Set player image
        document.getElementById('playerImage').style.backgroundImage = `url(${player.image})`;
        document.getElementById('playerImage').style.backgroundSize = 'cover';

        // Set player stats
        document.getElementById('passing').innerText = player.stats.passing;
        document.getElementById('shooting').innerText = player.stats.shooting;
        document.getElementById('speed').innerText = player.stats.speed;
        document.getElementById('defense').innerText = player.stats.defense;
        document.getElementById('stamina').innerText = player.stats.stamina;
        document.getElementById('strength').innerText = player.stats.strength;

        // Set rating bar color
        const ratingBar = document.getElementById('ratingBar');
        const ratingPercentage = player.rating;

        ratingBar.innerHTML = `<div style="width: ${ratingPercentage}%"></div>`;

        if (ratingPercentage >= 80) {
            ratingBar.querySelector('div').style.backgroundColor = 'green';
        } else if (ratingPercentage >= 60) {
            ratingBar.querySelector('div').style.backgroundColor = 'yellow';
        } else {
            ratingBar.querySelector('div').style.backgroundColor = 'red';
        }
    }
}
// Function to handle image selection for a player
function selectProfileImage(playerName) {
    const imageURL = prompt('Enter the URL of the profile image for ' + playerName);  // Prompt for image URL input
    if (imageURL) {
        // Save the selected image URL in localStorage for the player
        localStorage.setItem(playerName + '-profile-image', imageURL);

        // Update the player's image immediately
        displayProfileImage(playerName);
    }
}

// Function to display the profile image
function displayProfileImage(playerName) {
    const playerImageDiv = document.getElementById(playerName + '-image');
    const storedImageURL = localStorage.getItem(playerName + '-profile-image');

    // If there's a stored image URL, display it; otherwise, show a placeholder
    if (storedImageURL) {
        playerImageDiv.style.backgroundImage = `url(${storedImageURL})`;
        playerImageDiv.style.backgroundSize = 'cover';
        playerImageDiv.style.backgroundPosition = 'center';
    } else {
        // Placeholder image if no profile is set
        playerImageDiv.style.backgroundImage = 'url("placeholder-image.jpg")';
    }
}

// Function to initialize the profile images for all players
function initializeProfileImages() {
    const playerList = document.querySelectorAll('#playerList li');

    playerList.forEach(player => {
        const playerName = player.textContent.trim();
        displayProfileImage(playerName);
    });
}

// Call the function to initialize profile images on page load
initializeProfileImages();
