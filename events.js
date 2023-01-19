



function hamburgerMenu() {
  document.getElementById("tabs_button2").classList.toggle("show");
  document.getElementById("navBar").classList.toggle("navbarToggleClass");
  document.body.classList.toggle("stopscrolling");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.daddy-big-flex .quickAccess .quickaccess-ki-ul a li');

window.addEventListener('scroll', ()=>{
let current = "";
sections.forEach(section => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.clientHeight;
  if(pageYOffset >= (sectionTop - 400)){
    current = section.getAttribute('id');
  }
})
navLi.forEach( li => {
li.classList.remove('activeThistab');
if(li.classList.contains(current)){
  li.classList.add('activeThistab')
}
})
})



window.onscroll = function(ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 150) {
      document.getElementById('quickAccess').style.transform = 'translateX(-250px)';
      document.getElementById('quickAccess').style.transitionDuration = '.2s';


  }
  else{
      document.getElementById('quickAccess').style.transform = 'translateX(0px)';
      document.getElementById('quickAccess').style.transitionDuration = '.2s';
  }
  scrollFunction()
};




let mybutton = document.getElementById("backtotopbutton");
// window.onscroll = function(){
//   scrollFunction()
// };

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