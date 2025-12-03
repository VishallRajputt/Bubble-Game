🎮 Bubble Game (JavaScript)
📌 Overview
Bubble Game is a fun and interactive browser-based game built with HTML, CSS, and JavaScript. The objective is simple: pop as many bubbles as you can before the timer runs out! This project is perfect for beginners learning DOM manipulation, event handling, and basic game logic in JavaScript.

🚀 Features
- Dynamic bubble generation at random positions
- Score tracking system
- Countdown timer
- Responsive design for desktop 
- Simple and lightweight — runs directly in the browser

🛠️ Tech Stack
- HTML5 → Game structure
- CSS3 → Styling and animations
- JavaScript (ES6) → Game logic and interactivity

📂 Project Structure
bubble-game/
│── index.html        # Main HTML file
│── style.css         # Game styling
│── script.js         # Game logic
│── README.md         # Documentation



🎯 How to Play
- Open the game in your browser.
- Bubbles will appear randomly on the screen.
- Click on a bubble to pop it and earn points.
- Keep popping until the timer runs out.
- Final score is displayed at the end.

⚡ Installation & Setup
- Clone the repository:
git clone https://github.com/your-username/bubble-game.git
- Navigate to the project folder:
cd bubble-game
- Open index.html in your browser — no server setup required!

🧩 Sample Code (Bubble Generation)
function makeBubble() {
  let bubbleContainer = document.querySelector("#bubble-container");
  let bubbleHTML = "";
  for (let i = 0; i < 20; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    bubbleHTML += `<div class="bubble">${randomNum}</div>`;
  }
  bubbleContainer.innerHTML = bubbleHTML;
}




🔮 Future Improvements
- Add difficulty levels
- Sound effects when popping bubbles
- Leaderboard for high scores
- Touch support for mobile devices

👨‍💻 Author
Developed by Vishal Singh
Feel free to contribute or suggest improvements!  
