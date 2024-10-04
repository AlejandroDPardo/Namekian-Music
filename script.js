// Global variable to store movement and background audio
let movement;
let backgroundAudio;
let direction = 1; // 1 for moving down, -1 for moving up
const bounceDistance = 20; // Maximum distance to bounce (in pixels)

// Initialize the background audio
function initAudio() {
    // Load the 'robot music.mp3' file and enable looping
    backgroundAudio = new Audio('robot music.mp3'); // Make sure 'robot music.mp3' is in the same directory as your HTML file
    backgroundAudio.loop = true; // Enable looping so it plays continuously
    backgroundAudio.volume = 0.5; // Set the volume level (adjust as needed)
}

// Function to start moving the meme and enable background audio
function startMeme() {
    // Disable start button and enable stop button
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;

    // Start the background audio
    backgroundAudio.play();

    // Call the function that moves the meme every 100ms (for smoother movement)
    movement = setInterval(moveMeme, 100);
}

// Function to stop moving the meme and stop background audio
function stopMeme() {
    // Disable stop button and enable start button
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;

    // Stop the background audio
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0; // Reset the audio to the start

    // Clear the interval to stop the meme movement
    clearInterval(movement);
}

// Function to bounce the meme up and down
function moveMeme() {
    // Get the meme element
    const meme = document.getElementById('meme');
    const currentTop = parseInt(meme.style.top) || 0; // Get the current top position

    // Calculate the new top position
    let newTop = currentTop + (direction * bounceDistance);
    
    // Change direction if it hits the upper or lower limits
    if (newTop <= 0 || newTop >= window.innerHeight - meme.clientHeight) {
        direction *= -1; // Reverse direction
        newTop = currentTop + (direction * bounceDistance); // Recalculate new position
    }

    // Apply the new top position to the meme element
    meme.style.top = newTop + 'px';
}

// Initialize audio when the page loads
window.onload = initAudio;
