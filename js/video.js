var video = document.querySelector("#player1");
var volume_display = document.querySelector("#volumeDisplay");

function welcome(){
	console.log("Good job opening the window")
}//welcome()


function play() {
 	console.log("Play Video");
	video.play();
	volume_display.innerHTML = video.volume*100 + "%";
}//play()


function pause() {
 	console.log("Pause Video");
	video.pause();
}//pause()


function slower() {
	console.log("Slowing video");
	console.log("Video speed was " + video.playbackRate);

	video.playbackRate *= .9;

	console.log("Video speed was " + video.playbackRate);
}//slower()


function faster() {
	console.log("Speeding up");
	console.log("Video speed was " + video.playbackRate);

	video.playbackRate /= .9;

	console.log("Video speed was " + video.playbackRate);
}//faster()


function skip() {
	console.log("Skipping ahead");
	console.log("Current location is " + video.currentTime);

	newTime = video.currentTime + 10;

	if(newTime > video.duration) {
		console.log("Exceeded length");
		newTime = 0;
		video.pause();
	}//if
	video.currentTime = newTime;
	console.log("New  location is " + video.currentTime);
}//skip()


function mute() {
	console.log("Mute toggle");
	console.log(video.muted);

	if(video.muted == true) {
		console.log("Unuting video");

		video.muted = false;

		document.querySelector("#muteButton").innerHTML = "Mute";
	}//if
	else if(video.muted == false) {
		console.log("Muting video");

		video.muted = true;

		document.querySelector("#muteButton").innerHTML = "Unmute";
	}//if
}//mute()

function volumeSlider() {
	console.log("In volume slider");

	video.volume = document.querySelector("#slider").value / 100;

	volume_display.innerHTML = video.volume*100 + "%";
}//volumeSlider()

function styleIt() {
	console.log("In style");
	video.classList.toggle("oldSchool");
}//styleIt()