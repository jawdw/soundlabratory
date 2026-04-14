
const toggleButton = document.querySelector('.dark-light-toggle');
const webBody = document.body;
var multiSoundMode = false;


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
    const multiSoundButton = document.querySelector('.multi-sound-toggle');

    if (!multiSoundMode) {
        multiSoundMode = true;
        multiSoundButton.textContent = 'single-sound mode';
    } else {
        multiSoundMode = false;
        multiSoundButton.textContent = 'multi-sound mode';
    }
}

function toggleStopSounds() {
    const sounds = document.querySelectorAll('audio');
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}

function playSound(id) {
    if (!multiSoundMode) {
        toggleStopSounds();
    }
    const audio = document.getElementById(id);

    audio.currentTime = 0;
    audio.play();
}
window.addEventListener('keydown', (e) => {
    if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        toggleStopSounds();
    } else if (e.key === 'n' || e.key === 'N') {
        const soundFiles = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3'];
        const imageFile = ['default.png'];

        const overlay = document.getElementById('image-overlay');
        const popupImg = document.getElementById('popup-image');

        const randomAudio = new Audio();

        function playRandomChaos() {
            const randomIdx = Math.floor(Math.random() * soundFiles.length);
            const soundPath = `${soundFiles[randomIdx]}`;
            const imagePath = `${imageFile}`;

            randomAudio.src = soundPath;
            popupImg.src = imagePath;

            randomAudio.play();

            overlay.classList.add('show-overlay');

            randomAudio.onended = () => {
                overlay.classList.remove('show-overlay');
            };
        }

        playRandomChaos();
    } else if (e.key === 'd' || e.key === 'D') {
        toggleDarkMode();
    } else if (e.key === 'm' || e.key === 'M') {
        toggleMultiSound();
    }
});
