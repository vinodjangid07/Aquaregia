// preloader script
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})
let tabsformobileclass = document.querySelectorAll('.tabsbuttonclass')
function hamburgerMenu() {
    document.getElementById("tabs_button2").classList.toggle("show");
    // document.getElementById("rotatebtn").classList.toggle("rotate")
    document.body.classList.toggle("stopscrolling")
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");

      tabsformobileclass.forEach((item) =>
      item.classList.toggle('showmobiletabs'));
    
  }
    let mybutton = document.getElementById("backtotopbutton");

 
window.onscroll = function(){
  scrollFunction()
};


function scrollFunction(){
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
  {
    mybutton.style.display = "block";
  }
   else{
      mybutton.style.display = "none";
     
      }
}


function scrolltoTopfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
