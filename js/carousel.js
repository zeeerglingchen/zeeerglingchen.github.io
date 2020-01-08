var carousel = document.querySelector("#carousel");
// carousel.width = window.innerWidth;
carousel.style.height = window.innerWidth/2 + "px";
console.log(carousel.height)

var allimages = document.querySelector(".carousel_ul");
var preButton = document.querySelector(".carousel_button--right");
var nexButton = document.querySelector(".carousel_button--left");
var images = Array.from(allimages.children);

var clickcounts = 1

function hide(){
  for(i = 0; i<images.length; i++){
    images[i].style.display = "none";
  }
}

hide()

preButton.addEventListener("click",function(){
  hide();
  clickcounts += -1;
  if(clickcounts == 0){
    clickcounts = images.length
    images[clickcounts - 1].style.display = "block";
    console.log(clickcounts)

  }

  if(clickcounts >= 1){
    images[clickcounts - 1].style.display = "block";
    console.log(clickcounts)
  }

})

nexButton.addEventListener("click",function(){
  hide()
  clickcounts += 1;
  if (clickcounts <= images.length){
    images[clickcounts - 1].style.display = "block"
  }
  if (clickcounts > images.length){
    images[0].style.display = "block"
    clickcounts = 1
  }

})

images[clickcounts - 1].style.display = "block";
