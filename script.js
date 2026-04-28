// Display Current Date
document.getElementById('date-display').innerText = new Date().toLocaleDateString();

// Water Tracker Logic
let waterAmount = 1.5;
function addWater() {
    waterAmount += 0.25;
    document.getElementById('water').innerText = waterAmount.toFixed(2);
}

// Mood Logger Logic
function logMood(mood) {
    const history = document.getElementById('mood-history');
    const entry = document.createElement('li');
    entry.innerText = `${new Date().toLocaleTimeString()}: Feeling ${mood}`;
    history.prepend(entry);
}