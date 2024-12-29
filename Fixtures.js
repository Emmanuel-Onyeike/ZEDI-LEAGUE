const teams = [
    { position: 1, name: "ATLAS CITY", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { position: 2, name: "AVALANCE", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { position: 3, name: "BLAZE UNITED", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { position: 4, name: "GOLDEN EAGLES", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { position: 5, name: "NOVA CITY", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { position: 6, name: "SHADOW WOLVES", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { position: 7, name: "SILVER STREAKS", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { position: 8, name: "STARLIGHT STRIKERS", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { position: 9, name: "WILDFIRE WARRIOR", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { position: 10, name: "ZEN WARRIORS", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
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
    { home: "ATLAS CITY", away: "ZEN WARRIORS", date: "TBA"},
    { home: "AVALANCE", away: "WILDFIRE WARRIOR", date: "TBA",},
    { home: "BLAZE UNITED", away: "STARLIGHT STRIKERS", date: "TBA"},
    { home: "GOLDEN EAGLES", away: "SILVER STREAKS", date: "TBA"},
    { home: "NOVA CITY", away: "SHADOW WOLVES", date: "TBA"},
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