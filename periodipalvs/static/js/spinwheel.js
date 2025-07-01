const games = [
    {
        title: "Matching Game",
        desc: "Match terms and definitions about puberty and menstruation.",
        url: "/minigame-matching"
    },
    {
        title: "Period Tracker Puzzle",
        desc: "Arrange the icons on the calendar to simulate a typical menstrual cycle!",
        url: "/minigame"
    },
    {
        title: "Quiz Challenge",
        desc: "Answer quick questions about menstrual health.",
        url: "/minigame-quiz"
    },
    {
        title: "Sorting Game",
        desc: "Sort items into correct menstrual hygiene categories.",
        url: "/minigame-sorting"
    }
];

document.getElementById('spinBtn').onclick = function() {
    const idx = Math.floor(Math.random() * games.length);
    document.getElementById('gameTitle').textContent = games[idx].title;
    document.getElementById('gameDesc').textContent = games[idx].desc;
    document.getElementById('playGameBtn').href = games[idx].url;
    document.getElementById('gameModal').style.display = 'flex';
};

function closeModal() {
    document.getElementById('gameModal').style.display = 'none';
}