const mediaPlayerRef = document.querySelector("#mediaPlayer");
const songRef = document.querySelector(".song");
const play = document.querySelector(".play");
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");
const audioRef = document.querySelector("#audio");
const countdown = document.querySelector('.timer-countdown');
const timeSelector = document.querySelectorAll('.time-selector button');
const bgImageRef = document.querySelector("#bg-img");
const affirmationRef = document.querySelector("#affirmation");

//keep track of sounds
let songIndex = 6;
const songs = [{
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
	tune: 'Abundance',
	backgroundImageName: 'meditation-video5',
	affirmation: 'I ALWAYS FIND HOPE',
}, {
	tune: 'Chill-Pill',
	backgroundImageName: 'meditation-video8',
	affirmation: 'I CHOOSE TO FEEL PEACEFUL',
}, {
	tune: 'HeartWave',
	backgroundImageName: 'meditation-video3',
	affirmation: 'I DESERVE TO BE HAPPY',
}, ];

loadSong(songs[songIndex]);
//update Music info
function loadSong(songs) {
	audioRef.src = `assets/sounds/${songs.tune}.mp3`;
	affirmationRef.innerText = songs.affirmation;
	bgImageRef.src = `assets/videos/${songs.backgroundImageName}.mp4`;
}
//Play music
function playSong() {
	mediaPlayerRef.classList.add('play');
	play.querySelector('i.fas').classList.remove('fa-play');
	play.querySelector('i.fas').classList.add('fa-pause');
	audioRef.play();
}
//Pause music
function pauseSong() {
	mediaPlayerRef.classList.remove('play');
	play.querySelector('i.fas').classList.remove('fa-pause');
	play.querySelector('i.fas').classList.add('fa-play');
	audioRef.pause();
}
//Prev music
function PrevSound() {
	songIndex--;
	if(songIndex < 0) {
		songIndex = songs.length - 1;
	}
	loadSong(songs[songIndex]);
	play.querySelector('i.fas').classList.remove('fa-pause');
	play.querySelector('i.fas').classList.add('fa-play');
	bgImageRef.pause();
}
// Next music
function NextSound() {
	songIndex++;
	if(songIndex > songs.length - 1) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	play.querySelector('i.fas').classList.remove('fa-pause');
	play.querySelector('i.fas').classList.add('fa-play');
	bgImageRef.pause();
}

let defaultDuration = 600;
//Event Listeners
// EL - Play Music
play.addEventListener("click", function() {
	let nowPlaying = mediaPlayerRef.classList.contains('play');
	if(nowPlaying) {
		pauseSong();
		bgImageRef.pause();
	} else {
		playSong();
		bgImageRef.play();
	}
	// Animate the Countdown Timer
	songRef.ontimeupdate = function() {
		let currentTime = songRef.currentTime;
		let elapsed = defaultDuration - currentTime;
		let seconds = Math.floor(elapsed % 60);
		let minutes = Math.floor(elapsed / 60);
		countdown.innerHTML = `${minutes}:${seconds <10? '0': '' }${seconds}`;
		if(currentTime >= defaultDuration) {
			songRef.pause();
			songRef.currentTime = 0;
			play.querySelector('i.fas').classList.add('fa-play');
			play.querySelector('i.fas').classList.remove('fa-pause');
			bgImageRef.pause();
		}
	};
});
//EL - Change Meditation Music
back.addEventListener("click", PrevSound);
forward.addEventListener("click", NextSound);
// select time duration for meditation
timeSelector.forEach(option => {
	option.addEventListener("click", function() { 
		defaultDuration = this.getAttribute("data-time");
		let displayMins = Math.floor(defaultDuration / 60);
		let displaySecs = Math.floor(defaultDuration % 60);
		if(displaySecs < 10) {
			displaySecs = "0" + displaySecs;
		}
		countdown.innerHTML = `${displayMins}:${displaySecs}`;
	});
});