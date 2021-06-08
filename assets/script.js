let mediaPlayer = document.querySelector(".media-player");
let song = document.querySelector(".song");
let play = document.querySelector(".play");
let back = document.querySelector(".back");
let forward = document.querySelector(".forward");
let title = document.querySelector("#title");

let audio = document.querySelector("#audio");

//Timer
let countdown = document.getElementsByClassName('.timer-countdown');
let timeSelector = document.querySelectorAll('.time-selector button'); 

let sounds = document.querySelector(".sounds");
//Background
let bgImage = document.querySelector("#bg-img");

//keep track of sounds

let songIndex = 2;


//Sound Titles


const songs = ['bensound-relaxing', 'Healing-Water-David-Renda', 'rain-solace'];

// Background Cover Images

let poster = ['4.jpg', '5.jpg', 'bg-1.jpg'];


//Load music details to the DOM

loadSong(songs[songIndex]);



//update Music info

function loadSong(song) {
    
    //title.innerText= song;
    audio.src = `assets/sounds/${song}.mp3`;
    //$(bgImage).attr("src", bgImage[songIndex]);
    //bgImage.src = `assets/bg-media/${song}.jpg`;
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
    
    let nowPlaying = mediaPlayer.classList.contains('play')
    
    if (nowPlaying) {
        pauseSong();
        
        //bgImage.play();
    } else {
        playSong();
        //bgImage.pause();
    }

    // Animate the Countdown Timer
    song.ontimeupdate = function () {
    
    let currentTime = song.currentTime;
    let elapsed = defaultDuration - currentTime;
    let seconds = Math.floor (elapsed % 60);
    let minutes = Math.floor (elapsed / 60);

    countdown.textContent = `${minutes}:${seconds}`;
    };

    /*if (currentTime >= defaultDuration) {
        song.pause();
        song.currentTime = 0;
        
    };
    */
    
});

    //EL - Change Meditation Music

back.addEventListener("click", PrevSound);
forward.addEventListener("click", NextSound);




// select time duration for meditation

timeSelector.forEach(option => {
    option.addEventListener("click", function() { //event listener for time selector buttons
    defaultDuration = this.getAttribute("data-time");
    countdown.textContent = `${Math.floor(defaultDuration / 60)}:${Math.floor(defaultDuration % 60
        )}`;
    });
})