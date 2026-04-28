// 1. PAGE SWITCHER LOGIC
function showPage(pageId, element) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update Nav Buttons
    if (element) {
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
    }
}

// 2. RUN TRACKER LOGIC
let running = false;
function startRun() {
    running = !running;
    const text = document.getElementById('run-text');
    const icon = document.getElementById('run-icon');
    const card = document.querySelector('.card.highlight');

    if(running) {
        text.innerText = "Tracking...";
        card.style.background = "#ff4444";
        card.style.color = "white";
    } else {
        alert("Great job! Run saved to Kuala Lumpur Leaderboard.");
        text.innerText = "Start Run";
        card.style.background = "#ccff00";
        card.style.color = "black";
    }
}