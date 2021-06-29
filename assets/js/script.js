const mediaPlayerRef = document.querySelector("#mediaPlayer");
const audioRef = document.querySelector("#audio");
const playBtnRef = document.querySelector("#play");
const backBtnRef = document.querySelector("#back");
const forwardBtnRef = document.querySelector("#forward");
const countdownRef = document.querySelector('#timerCountdown');
const timeSelectorRef = document.querySelectorAll('#timeSelect button');
const bgImageRef = document.querySelector("#bg-img");
const affirmationRef = document.querySelector("#affirmation");
const muteRef = document.querySelector("#soundOn");

/**
 * Tracking affirmation pages
 */
let songIndex = 6;
const songs = [{
        tune: 'Yuval-Ron-Fire',
        backgroundImageName: 'meditation-video-10',
        affirmation: 'I AM OKAY',
    }, {
        tune: 'Yuval-Ron-Pitta',
        backgroundImageName: 'meditation-video12',
        affirmation: 'I CAN DO GREAT THINGS',
    },
    {
        tune: 'Mindfulness-Meditation',
        backgroundImageName: 'meditation-video1',
        affirmation: 'MY NEEDS ARE IMPORTANT',
    }, {
        tune: 'rain-solace',
        backgroundImageName: 'meditation-video7',
        affirmation: 'I CAN BUILD TRUST',
    }, {
        tune: 'india',
        backgroundImageName: 'meditation-video9',
        affirmation: 'I CAN PAUSE AND BEGIN AGAIN',
    }, {
        tune: 'om',
        backgroundImageName: 'meditation-video4',
        affirmation: 'EVERYTHING WILL BE OK',
    }, {
        tune: 'HeartWave',
        backgroundImageName: 'meditation-video3',
        affirmation: 'I DESERVE TO BE HAPPY',
    }, {
        tune: 'Abundance',
        backgroundImageName: 'meditation-video5',
        affirmation: 'I ALWAYS FIND HOPE',
    }, {
        tune: 'Chill-Pill',
        backgroundImageName: 'meditation-video8',
        affirmation: 'I CHOOSE TO FEEL PEACEFUL',
    },
];

loadSong(songs[songIndex]);
/**
 * This will update the meditation page
 */
function loadSong(songs) {
    audioRef.src = `assets/sounds/${songs.tune}.mp3`;
    affirmationRef.innerText = songs.affirmation;
    bgImageRef.src = `assets/videos/${songs.backgroundImageName}.mp4`;
}
/**
 * Media player functions
 */
function playSong() {
    mediaPlayerRef.classList.add('play');
    playBtnRef.querySelector('i.fas').classList.remove('fa-play');
    playBtnRef.querySelector('i.fas').classList.add('fa-pause');
    audioRef.play();
}

function pauseSong() {
    mediaPlayerRef.classList.remove('play');
    playBtnRef.querySelector('i.fas').classList.remove('fa-pause');
    playBtnRef.querySelector('i.fas').classList.add('fa-play');
    audioRef.pause();
}

function muteSong() {
    mediaPlayerRef.classList.add('play');
    muteRef.querySelector('i.fas').classList.remove("fa-volume-up");
    muteRef.querySelector('i.fas').classList.add("fa-volume-mute");
    audioRef.muted = true;
}


function unMuteSong() {
    mediaPlayerRef.classList.remove('play');
    muteRef.querySelector('i.fas').classList.add("fa-volume-up");
    muteRef.querySelector('i.fas').classList.remove("fa-volume-mute");
    audioRef.muted = false;
}

function PrevSound() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playBtnRef.querySelector('i.fas').classList.remove('fa-pause');
    playBtnRef.querySelector('i.fas').classList.add('fa-play');
    bgImageRef.pause();
}

function NextSound() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playBtnRef.querySelector('i.fas').classList.remove('fa-pause');
    playBtnRef.querySelector('i.fas').classList.add('fa-play');
    bgImageRef.pause();
}

let defaultDuration = 600;

/**
 * Event Listners - Media player and Countdown Timer
 */
playBtnRef.addEventListener("click", function() {
    let nowPlaying = mediaPlayerRef.classList.contains('play');
    if (nowPlaying) {
        pauseSong();
        bgImageRef.pause();
    } else {
        playSong();
        bgImageRef.play();
    }

    audioRef.ontimeupdate = function() {
        let currentTime = audioRef.currentTime;
        let elapsed = defaultDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
        countdownRef.innerHTML = `${minutes}:${seconds <10? '0': '' }${seconds}`;
        if (currentTime >= defaultDuration) {
            audioRef.pause();
            audioRef.currentTime = 0;
            playBtnRef.querySelector('i.fas').classList.add('fa-play');
            playBtnRef.querySelector('i.fas').classList.remove('fa-pause');
            bgImageRef.pause();
        }
    };
});
muteRef.addEventListener("click", function() {
    let soundOn = mediaPlayerRef.classList.contains('play');
    if (soundOn) {
        unMuteSong();
    } else {
        muteSong();

    }
});
backBtnRef.addEventListener("click", PrevSound);
forwardBtnRef.addEventListener("click", NextSound);
/**
 * This will change the countdown timer display based on user selections
 */
timeSelectorRef.forEach(function(option) {
    option.addEventListener("click", function() {
        defaultDuration = this.getAttribute("data-time");
        let displayMins = Math.floor(defaultDuration / 60);
        let displaySecs = Math.floor(defaultDuration % 60);
        if (displaySecs < 10) {
            displaySecs = "0" + displaySecs;
        }
        countdownRef.innerHTML = `${displayMins}:${displaySecs}`;
    });
});