let mediaPlayer = document.querySelector(".media-player");
let playBtn = document.getElementsByClassName('play-btn');
let backBtn = document.getElementsByClassName('back-btn');
let forwardBtn = document.getElementsByClassName('forward-btn');

let sounds = document.querySelector(".sounds");





//play sounds

play-btn.addEventListener("click", function(){
     sounds.play();
    });


//Sound Titles


let sound = ['bensound-relaxing', 'Healing-Water-David-Renda', 'rain-solace']

//keep track of sounds

let soundIndex = 2

//Load sounds to the DOM

loadSound(sound[soundIndex])

//update sound info

function loadSound(sound) {

    audio.src = `sounds/${sound}.mp3`
    bg-Image.src = `bg-media/${sound}.png`
}

