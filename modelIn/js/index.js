/*  
En Scroll function der gør at når du scroller over 0px af Y aksen akitiveres og 
tilføjes "affix" classen med sort baggrund.
 */
function menuShow() {
document.querySelector("#menu").classList.toggle("show");
}

function burgerMenuColor() {
document.querySelector("#burgerColorChange").classList.toggle("burger-color");
}

// ACCORDION START
var acc = document.getElementsByClassName('accordion');

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
   
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// ACCORDION END