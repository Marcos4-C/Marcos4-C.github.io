// JavaScript Document

const videoPart1 = [
	{ src: "videos/video1.mp4", caption:"Peace"},
	{ src: "videos/video2.mp4", caption:"Beauty"},
	{ src: "videos/video4.mp4", caption:"Vibrant"},
	{ src: "videos/video11.mp4", caption:"Calm"}
];

const videoPart2 = [
	{ src: "videos/video5.mp4", caption:"Cold"},
	{ src: "videos/video13.mp4", caption:"Warm"},
	{ src: "videos/video6.mp4", caption:"Fluffy"}
];

const videoPart3 = [
	{ src: "videos/video9.mp4", caption:"Dark"},
	{ src: "videos/video3.mp4", caption:"Light"},
	{ src: "videos/video8.mp4", caption:"Golden"}
];
					
const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); // NEW
const replayBtn = document.getElementById("replayBtn");

	function picker(array) {
		const randomIndex = Math.floor(Math.random() * array.length);
		console.log("Random word:", array[randomIndex]);
		return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);


let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
//titleOverlay.style.display = "none";// REMOVED
titleOverlay.classList.add("playing");// NEW
player.classList.add("fullscreen");
replayBtn.style.display = "none";

	playlist = [
	picker(videoPart1),
	picker(videoPart2),
	picker(videoPart3),
	];

	currentIndex = 0;
	playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;

	player.src = current.src;
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
	});
}

// Advance when a video ends
	player.addEventListener("ended", () => {
		currentIndex++;
		if (currentIndex < playlist.length) {
			playCurrent();
		} else {
			console.log("All three parts finished.");
			replayBtn.style.display = "block";
		}
});