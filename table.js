// script.js

const teams = [
    { position: 1, name: "Manchester United", played: 18, won: 12, drawn: 3, lost: 3, gf: 40, ga: 20 },
    { position: 2, name: "Remo Stars", played: 18, won: 11, drawn: 4, lost: 3, gf: 38, ga: 22 },
    { position: 3, name: "Real Madrid", played: 18, won: 10, drawn: 5, lost: 3, gf: 36, ga: 24 },
    { position: 4, name: "Mamelodi Sundowns", played: 18, won: 9, drawn: 4, lost: 5, gf: 34, ga: 26 },
    { position: 5, name: "Al Nassr ", played: 18, won: 8, drawn: 5, lost: 5, gf: 30, ga: 25 },
    { position: 6, name: "Sporting CP", played: 18, won: 7, drawn: 4, lost: 7, gf: 28, ga: 30 },
    { position: 7, name: "PSG", played: 18, won: 6, drawn: 4, lost: 8, gf: 24, ga: 32 },
    { position: 8, name: "Inter Miami", played: 18, won: 5, drawn: 5, lost: 8, gf: 22, ga: 34 },
    { position: 9, name: "Bayern Leverkusen", played: 18, won: 4, drawn: 5, lost: 9, gf: 20, ga: 36 },
    { position: 10, name: "Galatasaray", played: 18, won: 2, drawn: 4, lost: 12, gf: 18, ga: 40 },
];

// Calculate points and goal difference
teams.forEach(team => {
    team.points = (team.won * 3) + (team.drawn);
    team.gd = team.gf - team.ga;
});

// Render the table
function renderTable(data) {
    const tbody = document.querySelector("#leagueTable tbody");
    tbody.innerHTML = "";

    data.forEach(team => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${team.position}</td>
            <td>${team.name}</td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.drawn}</td>
            <td>${team.lost}</td>
            <td>${team.gf}</td>
            <td>${team.ga}</td>
            <td>${team.gd}</td>
            <td>${team.points}</td>
        `;

        tbody.appendChild(tr);
    });
}

// Initial render
renderTable(teams);

// Sorting functionality
let sortDirection = {}; // Keeps track of sort direction for each column

function sortTable(columnIndex) {
    const keyMap = {
        0: 'position',
        1: 'name',
        2: 'played',
        3: 'won',
        4: 'drawn',
        5: 'lost',
        6: 'gf',
        7: 'ga',
        8: 'gd',
        9: 'points'
    };
    const key = keyMap[columnIndex];

    // Toggle sort direction
    sortDirection[key] = !sortDirection[key];

    teams.sort((a, b) => {
        if (a[key] < b[key]) return sortDirection[key] ? -1 : 1;
        if (a[key] > b[key]) return sortDirection[key] ? 1 : -1;
        return 0;
    });

    // Update positions based on points (descending)
    teams.sort((a, b) => b.points - a.points);
    teams.forEach((team, index) => team.position = index + 1);

    renderTable(teams);
}

// Fixtures data
const fixtures = [
    { home: "Manchester United", away: "Galatasaray", date: "TBA"},
    { home: "Remo Stars", away: "Bayern Leverkusen", date: "TBA",},
    { home: "Real Madrid", away: "Inter Miami", date: "TBA"},
    { home: "Mamelodi Sundowns", away: "PSG", date: "TBA"},
    { home: "Al Nassr", away: "Sporting CP", date: "TBA"},
];

// Render fixtures
function renderFixtures(data) {
    const fixturesContainer = document.getElementById("fixtures");
    fixturesContainer.innerHTML = "";

    data.forEach(fixture => {
        const fixtureDiv = document.createElement("div");
        fixtureDiv.className = "fixture";

        fixtureDiv.innerHTML = `
            <span class="team">${fixture.home}</span>
            <span class="vs">vs</span>
            <span class="team">${fixture.away}</span>
            <span class="time">${fixture.date}</span>
        `;

        fixturesContainer.appendChild(fixtureDiv);
    });
}

// Render table and fixtures
renderTable(teams);
renderFixtures(fixtures);
