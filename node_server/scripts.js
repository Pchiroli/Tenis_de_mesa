

/* let players = [];
let results = {};

function addPlayer() {
    const playerName = document.getElementById('playerName').value.trim();
    if (playerName && !players.includes(playerName)) {
        players.push(playerName);
        document.getElementById('playerName').value = '';
        updateTable();
    }
}

function updateTable() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    if (players.length > 1) {
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        headerRow.insertCell().textContent = '';
        players.forEach(player => {
            const cell = headerRow.insertCell();
            cell.textContent = player;
        });

        players.forEach(player1 => {
            const row = table.insertRow();
            const headerCell = row.insertCell();
            headerCell.textContent = player1;

            players.forEach(player2 => {
                const cell = row.insertCell();
                if (player1 === player2) {
                    cell.textContent = 'X';
                } else {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.size = 5;
                    input.placeholder = 'Sets';
                    input.dataset.player1 = player1;
                    input.dataset.player2 = player2;
                    cell.appendChild(input);
                }
            });
        });

        tableContainer.appendChild(table);
        updateResultsContainer();
    }
}

function saveResults() {
    // Reset results
    results = {};
    players.forEach(player => {
        results[player] = { played: 0, won: 0, lost: 0, setsWon: 0 };
    });

    // Read and process all inputs
    document.querySelectorAll('input[data-player1][data-player2]').forEach(input => {
        const player1 = input.dataset.player1;
        const player2 = input.dataset.player2;
        const score = input.value.trim();

        console.log(`Processing match between ${player1} and ${player2} with score ${score}`);

        if (score) {
            const [sets1, sets2] = score.split('-').map(Number);
            if (!isNaN(sets1) && !isNaN(sets2)) {
                console.log(`Updating results: ${player1} ${sets1}-${sets2} ${player2}`);

                results[player1].played++;
                results[player2].played++;
                results[player1].setsWon += sets1;
                results[player2].setsWon += sets2;

                if (sets1 > sets2) {
                    results[player1].won++;
                    results[player2].lost++;
                } else if (sets1 < sets2) {
                    results[player2].won++;
                    results[player1].lost++;
                }
            }
        }
    });

    console.log('Updated results:', results);
    updateResultsContainer();
}

function updateResultsContainer() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = 'Jugador';
    headerRow.insertCell().textContent = 'Partidos Jugados';
    headerRow.insertCell().textContent = 'Partidos Ganados';
    headerRow.insertCell().textContent = 'Partidos Perdidos';
    headerRow.insertCell().textContent = 'Sets Ganados';

    players.forEach(player => {
        const row = table.insertRow();
        row.insertCell().textContent = player;
        row.insertCell().textContent = results[player]?.played || 0;
        row.insertCell().textContent = results[player]?.won || 0;
        row.insertCell().textContent = results[player]?.lost || 0;
        row.insertCell().textContent = results[player]?.setsWon || 0;
    });

    resultsContainer.appendChild(table);
}

function resetTournament() {
    players = [];
    results = {};
    document.getElementById('playerName').value = '';
    document.getElementById('tableContainer').innerHTML = '';
    document.getElementById('resultsContainer').innerHTML = '';
}

 */

/* let players = [];
let results = {};

function addPlayer() {
    const playerName = document.getElementById('playerName').value.trim();
    if (playerName && !players.includes(playerName)) {
        players.push(playerName);
        document.getElementById('playerName').value = '';
        updateTable();
    }
}

function updateTable() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    if (players.length > 1) {
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        headerRow.insertCell().textContent = '';
        players.forEach(player => {
            const cell = headerRow.insertCell();
            cell.textContent = player;
        });

        players.forEach(player1 => {
            const row = table.insertRow();
            const headerCell = row.insertCell();
            headerCell.textContent = player1;

            players.forEach(player2 => {
                const cell = row.insertCell();
                if (player1 === player2) {
                    cell.textContent = 'X';
                } else {
                    const input1 = document.createElement('input');
                    input1.type = 'number';
                    input1.min = 0;
                    input1.size = 1;  
                    input1.placeholder = 'Sets';
                    input1.dataset.player1 = player1;
                    input1.dataset.player2 = player2;
                    input1.dataset.type = 'player1';

                    const input2 = document.createElement('input');
                    input2.type = 'number';
                    input2.min = 0;
                    input2.size = 1; 
                    input2.placeholder = 'Sets';
                    input2.dataset.player1 = player1;
                    input2.dataset.player2 = player2;
                    input2.dataset.type = 'player2';

                    cell.appendChild(input1);
                    cell.appendChild(document.createTextNode(' - '));
                    cell.appendChild(input2);
                }
            });
        });

        tableContainer.appendChild(table);
        updateResultsContainer();
    }
}

function saveResults() {
    // Reset results
    results = {};
    players.forEach(player => {
        results[player] = { played: 0, won: 0, lost: 0, setsWon: 0 };
    });

    // Read and process all inputs
    document.querySelectorAll('input[data-player1][data-player2][data-type="player1"]').forEach(input => {
        const player1 = input.dataset.player1;
        const player2 = input.dataset.player2;
        const sets1 = input.value.trim();
        const sets2 = document.querySelector(`input[data-player1="${player1}"][data-player2="${player2}"][data-type="player2"]`).value.trim();

        if (sets1 && sets2 && !isNaN(sets1) && !isNaN(sets2)) {
            const setsWon1 = Number(sets1);
            const setsWon2 = Number(sets2);

            results[player1].played++;
            results[player2].played++;

            results[player1].setsWon += setsWon1;
            results[player2].setsWon += setsWon2;

            if (setsWon1 > setsWon2) {
                results[player1].won++;
                results[player2].lost++;
            } else if (setsWon1 < setsWon2) {
                results[player2].won++;
                results[player1].lost++;
            }
        }
    });

    updateResultsContainer();
}

function updateResultsContainer() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = 'Jugador';
    headerRow.insertCell().textContent = 'Partidos Jugados';
    headerRow.insertCell().textContent = 'Partidos Ganados';
    headerRow.insertCell().textContent = 'Partidos Perdidos';
    headerRow.insertCell().textContent = 'Sets Ganados';

    players.forEach(player => {
        const row = table.insertRow();
        row.insertCell().textContent = player;
        row.insertCell().textContent = results[player]?.played || 0;
        row.insertCell().textContent = results[player]?.won || 0;
        row.insertCell().textContent = results[player]?.lost || 0;
        row.insertCell().textContent = results[player]?.setsWon || 0;
    });

    resultsContainer.appendChild(table);
}

function resetTournament() {
    players = [];
    results = {};
    document.getElementById('playerName').value = '';
    document.getElementById('tableContainer').innerHTML = '';
    document.getElementById('resultsContainer').innerHTML = '';
} */


    let players = [];
let results = [];
let tournaments = [];

async function fetchTournaments() {
    const response = await fetch('/api/tournaments');
    tournaments = await response.json();
}

async function addPlayer() {
    const playerName = document.getElementById('playerName').value.trim();
    if (playerName && !players.includes(playerName)) {
        players.push(playerName);
        document.getElementById('playerName').value = '';
        updateTable();
    }
}

function updateTable() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    if (players.length > 1) {
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        headerRow.insertCell().textContent = '';
        players.forEach(player => {
            const cell = headerRow.insertCell();
            cell.textContent = player;
        });

        players.forEach(player1 => {
            const row = table.insertRow();
            const headerCell = row.insertCell();
            headerCell.textContent = player1;

            players.forEach(player2 => {
                const cell = row.insertCell();
                if (player1 === player2) {
                    cell.textContent = 'X';
                } else {
                    const input1 = document.createElement('input');
                    input1.type = 'number';
                    input1.min = 0;
                    input1.size = 1;
                    input1.placeholder = 'Sets';
                    input1.dataset.player1 = player1;
                    input1.dataset.player2 = player2;
                    input1.dataset.type = 'player1';

                    const input2 = document.createElement('input');
                    input2.type = 'number';
                    input2.min = 0;
                    input2.size = 1;
                    input2.placeholder = 'Sets';
                    input2.dataset.player1 = player1;
                    input2.dataset.player2 = player2;
                    input2.dataset.type = 'player2';

                    cell.appendChild(input1);
                    cell.appendChild(document.createTextNode(' - '));
                    cell.appendChild(input2);
                }
            });
        });

        tableContainer.appendChild(table);
        updateResultsContainer();
    }
}

function saveResults() {
    results = {};
    players.forEach(player => {
        results[player] = { played: 0, won: 0, lost: 0, setsWon: 0, points: 0 };
    });

    document.querySelectorAll('input[data-player1][data-player2][data-type="player1"]').forEach(input => {
        const player1 = input.dataset.player1;
        const player2 = input.dataset.player2;
        const sets1 = input.value.trim();
        const sets2 = document.querySelector(`input[data-player1="${player1}"][data-player2="${player2}"][data-type="player2"]`).value.trim();

        if (sets1 && sets2 && !isNaN(sets1) && !isNaN(sets2)) {
            const setsWon1 = Number(sets1);
            const setsWon2 = Number(sets2);

            results[player1].played++;
            results[player2].played++;

            results[player1].setsWon += setsWon1;
            results[player2].setsWon += setsWon2;

            if (setsWon1 > setsWon2) {
                results[player1].won++;
                results[player2].lost++;
                results[player1].points += 2;
                results[player2].points += 1;
            } else if (setsWon1 < setsWon2) {
                results[player2].won++;
                results[player1].lost++;
                results[player2].points += 2;
                results[player1].points += 1;
            } else {
                results[player1].points += 1;
                results[player2].points += 1;
            }
        }
    });

    updateResultsContainer();
    saveToServer();
}

function updateResultsContainer() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = 'Jugador';
    headerRow.insertCell().textContent = 'Partidos Jugados';
    headerRow.insertCell().textContent = 'Partidos Ganados';
    headerRow.insertCell().textContent = 'Partidos Perdidos';
    headerRow.insertCell().textContent = 'Sets Ganados';
    headerRow.insertCell().textContent = 'Puntos';

    const sortedPlayers = players.slice().sort((a, b) => results[b].points - results[a].points);

    sortedPlayers.forEach(player => {
        const row = table.insertRow();
        row.insertCell().textContent = player;
        row.insertCell().textContent = results[player]?.played || 0;
        row.insertCell().textContent = results[player]?.won || 0;
        row.insertCell().textContent = results[player]?.lost || 0;
        row.insertCell().textContent = results[player]?.setsWon || 0;
        row.insertCell().textContent = results[player]?.points || 0;
    });

    resultsContainer.appendChild(table);
}

function resetTournament() {
    players = [];
    results = {};
    document.getElementById('playerName').value = '';
    document.getElementById('tableContainer').innerHTML = '';
    document.getElementById('resultsContainer').innerHTML = '';
    document.getElementById('tournamentDate').value = '';
    document.getElementById('tournamentLocation').value = '';
}

async function saveToServer() {
    const date = document.getElementById('tournamentDate').value;
    const location = document.getElementById('tournamentLocation').value;

    const tournamentData = {
        date,
        location,
        results
    };

    const response = await fetch('/api/tournaments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tournamentData)
    });

    if (response.ok) {
        console.log('Torneo guardado exitosamente');
    } else {
        console.error('Error al guardar el torneo');
    }
}

async function searchTournament() {
    const searchDate = document.getElementById('searchDate').value;
    const searchLocation = document.getElementById('searchLocation').value;

    await fetchTournaments();

    const tournament = tournaments.find(t => t.date === searchDate && t.location === searchLocation);

    if (tournament) {
        players = Object.keys(tournament.results);
        results = tournament.results;
        updateTable();
    } else {
        alert('Torneo no encontrado');
    }
}
