const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const wrapper = document.querySelector(".wrapper");

// Ensure No button has absolute positioning
noBtn.style.position = "absolute";

// Function to move the No button randomly
function moveNoButton() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Set boundaries to prevent button from moving outside the wrapper
    const maxX = wrapperRect.width - noBtnRect.width - 10;
    const maxY = wrapperRect.height - noBtnRect.height - 10;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "You are my SUNSHINE. I love you soo much Roshini Pallamala.   😘";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
});

// Move the "No" button on hover (for desktop)
noBtn.addEventListener("mouseover", moveNoButton);

// Move the "No" button on touchstart (for mobile)
noBtn.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent accidental taps
    moveNoButton();
});
