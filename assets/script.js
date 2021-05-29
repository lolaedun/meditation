let mediaPlayer = document.querySelector(".media-player");
let playBtn = document.getElementsByClassName('play-btn');
let backBtn = document.getElementsByClassName('back-btn');
let forwardBtn = document.getElementsByClassName('forward-btn');

let sounds = document.querySelector(".sounds");





//play sounds

play-btn.addEventListener("click", function(){
     sounds.play();
    });