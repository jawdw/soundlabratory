
const toggleButton = document.querySelector('.dark-light-toggle');
const webBody = document.body;



function toggleDarkMode() {

    var navbar = document.querySelector('.navbar');
    var soundButtons = document.querySelectorAll('.btn');
    if (webBody.classList.contains('dark-mode')) {
        toggleButton.textContent = 'dark mode';
    } else {
        toggleButton.textContent = 'light mode';
    }
    webBody.classList.toggle('dark-mode');
    navbar.classList.toggle('navbar-dark');
    soundButtons.forEach(button => {
        button.classList.toggle('dark-mode');
    });
}

function toggleMultiSound() {
    const multiSoundButtons = document.querySelectorAll('.multi-sound-toggle');

    multiSoundButtons.forEach(button => {
        button.classList.toggle('active');
    });
}

function toggleStopSounds() {
    const sounds = document.querySelectorAll('audio');
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}

function playSound(id) {
    toggleStopSounds(); // Stop any currently playing sounds before starting a new one
    const audio = document.getElementById(id);

    audio.currentTime = 0;
    audio.play();
}
window.addEventListener('keydown', (e) => {
    if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        toggleStopSounds();
    } else if (e.key === 'n' || e.key === 'N') {
        // List your filenames here exactly as they are in the folder
        const soundFiles = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3'];
        const imageFile = ['default.png'];

        const overlay = document.getElementById('image-overlay');
        const popupImg = document.getElementById('popup-image');

        // Create a reusable audio object
        const randomAudio = new Audio();

        function playRandomChaos() {
            // 1. Pick random sound and image
            const randomIdx = Math.floor(Math.random() * soundFiles.length);
            const soundPath = `${soundFiles[randomIdx]}`;
            const imagePath = `${imageFile}`;

            // 2. Set sources and play
            randomAudio.src = soundPath;
            popupImg.src = imagePath;

            randomAudio.play();

            // 3. Show the image
            overlay.classList.add('show-overlay');

            // 4. Hide the image automatically when the sound ends
            randomAudio.onended = () => {
                overlay.classList.remove('show-overlay');
            };
        }

        playRandomChaos();
    } else if (e.key === 'd' || e.key === 'D') {
        toggleDarkMode();
    }
});