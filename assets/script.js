let mediaPlayer = document.querySelector(".media-player");
let music = document.querySelector(".music");
let play = document.querySelector(".play");
let back = document.querySelector(".back");
let forward = document.querySelector(".forward");
let title = document.querySelector("#title");

let audio = document.querySelector("#audio");

//Timer
let countdown = document.getElementsByClassName('.timer-countdown');
let timeSelector = document.querySelector('.time-selector button'); 

let sounds = document.querySelector(".sounds");
//Background
let bgImage = document.querySelector("#bg-img");

//keep track of sounds

let songIndex = 2;


//Sound Titles


let songs = ['bensound-relaxing', 'Healing-Water-David-Renda', 'rain-solace'];

/*
//Load music details to the DOM

loadSong(songs[songIndex]);

*/


//update Music info

function loadSong(song) {
    //title.innerHTML= song
    audio.src = `sounds/${song}.mp3`
    bgImage.src = `bg-media/${song}.png`
}

//Play music
function playSong() {

    mediaPlayer.classList.add('play')
    play.querySelector('i.fas').classList.remove('fa-play')
    play.querySelector('i.fas').classList.add('fa-pause')

    audio.play();
}

//Pause music
function pauseSong() {
    mediaPlayer.classList.remove('play')
    play.querySelector('i.fas').classList.add('fa-play')
    play.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause();

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

}

//Meditation Duration

let defaultDuration = 600;

//Event Listeners

//Play Music



play.addEventListener("click", function() {
    
    let nowPlaying = mediaPlayer.classList.contains('play')
    
    if (nowPlaying) {
        pauseSong();
        bgImage.play();
    } else {
        playSong();
        bgImage.pause();
    }
    
});

//Change Meditation sounds

back.addEventListener("click", PrevSound);
forward.addEventListener("click", NextSound);

// Animate the Countdown Timer
music.ontimeupdate = function () {
let currentTime = music.currentTime;
let elapsed = defaultDuration - currentTime;
let seconds = Math.floor (elapsed % 60);
let minutes = Math.floor (elapsed /60);

countdown.textContent = `${minutes}:${seconds}`;
};

// select time duration for meditation

timeSelector.forEach();{
    option.addEventListener("click", function() {
    defaultDuration = this.getAttribute("data-time");
    countdown.textContent = `${Math.floor(defaultDuration /60)};${Math.floor(defaultDuration % 60
        )}`;
    });
}


