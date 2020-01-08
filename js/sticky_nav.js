window.onscroll = function(){sticky_function()
}

var nav = document.getElementById("#navigation")
var dis = nav.offsetTop
if (dis == 0){
  nav.classList.add("sticky")

}

function sticky_function(){
  if (window.pageYOffset >= dis){
    nav.classList.add("sticky")
  }else{
    nav.classList.remove("sticky");
  }
  }
