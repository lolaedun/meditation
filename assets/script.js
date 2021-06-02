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




//Meditation Duration

let defaultDuration = 600;

//Sound Titles


let sound = ['bensound-relaxing', 'Healing-Water-David-Renda', 'rain-solace']

//keep track of sounds

let soundIndex = 2

//Load sounds to the DOM

loadSound(sound[soundIndex])

//update sound info

function loadSound(sound) {

    audio.src = `sounds/${sound}.mp3`
    bgImage.src = `bg-media/${sound}.png`
}

function playSong() {

    mediaPlayer.classList.add('play-btn')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
}

function pauseSong() {

}

//Event Listeners

playBtn.addEventListener("click", () => {
    
    let nowPlaying = mediaPlayer.classList.contains('play-btn')
    
    if (nowPlaying) {
        pauseSong()
    } else {
        playSong()
    }
    
    });
