const mediaPlayerRef = document.querySelector(".media-player");
const songRef = document.querySelector(".song");
const play = document.querySelector(".play");
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");
const title = document.querySelector("#title");

const audioRef = document.querySelector("#audio");

//Timer
const countdown = document.querySelector('.timer-countdown');
const timeSelector = document.querySelectorAll('.time-selector button'); 

const sounds = document.querySelector(".sounds");

const bgImageRef = document.querySelector("#bg-img");
const affirmationRef = document.querySelector("#affirmation")

//keep track of sounds

let songIndex = 2;

const songs = [

    {
        tune: 'bensound-relaxing',
        backgroundImageName: 'meditation-video1',
        affirmation: 'MY NEEDS ARE IMPORTANT',
    },

    {
        tune: 'rain-solace',
        backgroundImageName: 'meditation-video7',
        affirmation: 'I CAN BUILD TRUST',
    },

    {
        tune: 'Healing-Water-David-Renda',
        backgroundImageName: 'meditation-video3',
        affirmation: 'I DESERVE TO BE HAPPY',
    },


]


//Load music details to the DOM

loadSong(songs[songIndex]);



//update Music info

function loadSong(songs) {
    
    
    audioRef.src = `assets/sounds/${songs.tune}.mp3`;
    affirmationRef.innerText = songs.affirmation;
    bgImageRef.src = `assets/bg-media/${songs.backgroundImageName}.mp4`;

}


//Play music
function playSong() {

    mediaPlayerRef.classList.add('play')
    play.querySelector('i.fas').classList.remove('fa-play')
    play.querySelector('i.fas').classList.add('fa-pause')

    audioRef.play();
}

//Pause music
function pauseSong() {
    mediaPlayerRef.classList.remove('play')
    play.querySelector('i.fas').classList.add('fa-play')
    play.querySelector('i.fas').classList.remove('fa-pause')

    audioRef.pause();

}

//Prev music

function PrevSound() {
    
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}


// Next music

function NextSound() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex]);
    playSong();
}

//Meditation Duration

let defaultDuration = 600;

//Event Listeners

    // EL - Play Music



play.addEventListener("click", function() {
    
    let nowPlaying = mediaPlayerRef.classList.contains('play')
    
    if (nowPlaying) {
        pauseSong();
        bgImageRef.pause();
        //bgImage.play();
    } else {
        playSong();
        bgImageRef.play();
        //bgImage.pause();
    }

    // Animate the Countdown Timer
    songRef.ontimeupdate = function () {
    
    let currentTime = songRef.currentTime;
    let elapsed = defaultDuration - currentTime;
    let seconds = Math.floor (elapsed % 60);
    let minutes = Math.floor (elapsed / 60);

    

    countdown.innerHTML = `${minutes}:${seconds <10? '0': '' }${seconds}`;
    
    if (currentTime >= defaultDuration) {
        songRef.pause();
        songRef.currentTime = 0;
        play.querySelector('i.fas').classList.add('fa-play')
        play.querySelector('i.fas').classList.remove('fa-pause')
        bgImageRef.pause();
        
    };
    };

    
    
    
});

    //EL - Change Meditation Music

back.addEventListener("click", PrevSound);
forward.addEventListener("click", NextSound);




// select time duration for meditation

timeSelector.forEach(option => {
    
    option.addEventListener("click", function() { //event listener for time selector buttons
    defaultDuration = this.getAttribute("data-time");
    let displayMins = Math.floor(defaultDuration / 60);
    let displaySecs = Math.floor(defaultDuration % 60);
    if (displaySecs<10) {displaySecs = "0" + displaySecs};
    countdown.innerHTML = `${displayMins}:${displaySecs}`;

    
    });
})

