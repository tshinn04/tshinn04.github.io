let votes = {};

function vote(artist) {
    if (votes[artist]) {
        votes[artist]++;
    } else {
        votes[artist] = 1;
    }
    displayResults();
}

const username = localStorage.getItem('username');
if (username) {
    document.getElementById('username-display').textContent = `Hello, ${username}!`;
    document.getElementById('username-display').style.display = 'inline';
    document.getElementById('login-link').style.display = 'none'; 
}

function displayResults() {
    const resultsList = document.getElementById('vote-results');
    resultsList.innerHTML = '';

    for (const artist in votes) {
        const li = document.createElement('li');
        li.textContent = `${artist}: ${votes[artist]} vote(s)`;
        resultsList.appendChild(li);
    }
}

function search() {
    const query = document.getElementById('search').value.toLowerCase();
    const artistItems = document.querySelectorAll('#artist-list li');

    artistItems.forEach(item => {
        const artistName = item.querySelector('.artist-name').textContent.toLowerCase();
        item.style.display = artistName.includes(query) ? 'block' : 'none';
    });
}