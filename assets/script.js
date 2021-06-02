let mediaPlayer = document.querySelector(".media-player");
let music = document.querySelector(".music");
let play = document.querySelector(".play");
let back = document.querySelector(".back");
let forward = document.querySelector(".forward");

let audio = document.querySelector("#audio");

let countdown = document.getElementsByClassName('.timer-countdown');
let timeSelector = document.getElementsByClassName('.time-selector'); 

let sounds = document.querySelector(".sounds");

let bgImage = document.querySelector("#bg-img");

//Play Music

play.addEventListener("click", function() {
  music.play();
});

//update Music info

function loadMusic(music) {

    audio.src = `sounds/${music}.mp3`
    bgImage.src = `bg-media/${music}.png`
}

function playSong() {

    mediaPlayer.classList.add('play')
    play.querySelector('i.fas').classList.remove('fa-play')
    play.querySelector('i.fas').classList.add('fa-pause')
}

function pauseSong() {

}

//Event Listeners

play.addEventListener("click", () => {
    
    let nowPlaying = mediaPlayer.classList.contains('play')
    
    if (nowPlaying) {
        pauseSong()
    } else {
        playSong()
    }
    
    });

/*
//Meditation Duration

let defaultDuration = 600;

//Sound Titles


let sound = ['bensound-relaxing', 'Healing-Water-David-Renda', 'rain-solace']

//keep track of sounds

let soundIndex = 2

//Load sounds to the DOM

loadSound(sound[soundIndex])


*/