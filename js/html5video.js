var video = document.getElementById("videoid")
var control = document.querySelector(".control")
var progress = document.querySelector(".progress_bar")
var button = document.querySelector(".fas")

button.addEventListener("click",function(){
if (button.classList.contains("fa-play-circle")){
  button.classList.remove("fa-play-circle")
  button.classList.add("fa-pause-circle")
  video.play();
}else{
  button.classList.add("fa-play-circle")
  button.classList.remove("fa-pause-circle")
  video.pause();

}})

video.addEventListener("timeupdate",function(){
  var progress_position = video.currentTime / video.duration;
  progress.style.width = progress_position * 100 + "%"

})

window.addEventListener("keydown",function(event){
  var ev = event.code
  if (ev == "ArrowRight") {
    video.currentTime =  video.currentTime + video.duration * 0.05}
  if (ev == "ArrowLeft") {
    video.currentTime =  video.currentTime - video.duration * 0.05

}})
