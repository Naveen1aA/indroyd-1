# indroyd
KBC-Style Game in React
This project is a KBC (Kaun Banega Crorepati)-style quiz game built using React. The game displays questions on a computer screen along with a QR Code that players can scan to participate. Players use their mobile devices to scan the code, enter their names, and submit answers to the same question displayed on the main screen.

If the player submits the correct answer, the game automatically moves to the next question.
If the answer is incorrect, the player will see an error message and can retry the question.
Features
QR Code Integration: Players can scan a QR code to join the game from their mobile devices.
Real-time Feedback: Players get instant feedback on whether their answer is correct or incorrect.
Multiple Questions: The game supports a sequence of questions.
Responsive Design: The game works across different screen sizes, from desktops to mobile devices.
Project Structure
The project is divided into React components and uses the Context API for state management. Below is a quick breakdown of the key components:

GameContext.js: Manages the current question, tracks players' answers, and controls moving to the next question.
GameScreen.js: Displays the current question and QR code for players to join the game.
PlayerScreen.js: Allows players to submit their answers and receive feedback.
Getting Started
Prerequisites
Ensure that you have the following software installed on your machine:

Node.js (v14 or above)
npm (Node Package Manager) o
