let playerAction = "";
let isGameOver = false;

function makeChoice(action) {
    playerAction = action;
    isGameOver = true;

    let resultText = "";
    let buttonContainer = document.getElementById("action-buttons");
    let restartButton = document.getElementById("restart-btn");

    if (playerAction === "gun") {
        resultText = "You lunge quickly for the firearm at his waist. You are too slow—he reacts instantly, driving the blade deep into your chest. You stumble backward and bleed to death on the cold pavement.";
    } 
    else if (playerAction === "run") {
        resultText = "You shove him hard and sprint blindly into the night. You hear heavy footsteps pounding right behind you. You manage to reach your street, but he chases you all the way there, corners you at your front door, and breaks in.";
    } 
    else if (playerAction === "beg") {
        resultText = "You drop to your knees, sobbing and pleading for mercy. As he lowers his guard to mock you, you explode upward, snatch the knife from his hand, and disarm him. You turn the tables and successfully rob him blind.";
    } 
    else {
        resultText = "Invalid action sequence detected.";
        isGameOver = false;
    }

    document.getElementById("story-text").innerHTML = resultText;

    buttonContainer.style.display = "none";
    restartButton.style.display = "block";
}

function resetGame() {
    playerAction = "";
    isGameOver = false;

    document.getElementById("story-text").innerHTML = "A shadowy figure steps out from the dark, pressing a cold steel blade directly against your throat. \"Don't make a sound,\" he whispers. What is your next move?";
    document.getElementById("action-buttons").style.display = "flex";
    document.getElementById("restart-btn").style.display = "none";
}