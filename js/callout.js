if (window.innerWidth >= 1024){
  var mask = document.getElementById("gallerymask")

  function CallOut(img){
    mask.style.display = "block"
    var imglink = img.getAttribute("src")

    mask.style.height = window.outerHeight +window.pageYOffset + "px";
    mask.style.width = window.innerWidth  + "px";
    mask.style.background = "rgba(0,0,0,0.7)"
    // background-image = url(.../andywarhol/)
    var populate = `
    <span id = "close" onclick = "Close()">X</span>
    <img id = "maskimage" src = ${imglink} alt = "illustration of many tomato soup can">
    <p class = "cap">${img.getAttribute("alt")}</p>
    `
    document.getElementById("gallerymask").innerHTML = populate;
    var image = document.querySelector("#gallerymask img")
    var closebutton =  document.querySelector("#gallerymask span")
    image.style.marginTop = window.pageYOffset+100+ 'px'
    closebutton.style.marginTop = window.pageYOffset + 80+ 'px'

  }

  function Close(){
    mask.style.display = "none"
  }
}
