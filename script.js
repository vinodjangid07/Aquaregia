
// preloader script
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})

let tabsformobileclass = document.querySelectorAll('.tabsbuttonclass')
function hamburgerMenu() {
    document.getElementById("tabs_button2").classList.toggle("show");
    document.getElementById("navBar").classList.toggle("navbarToggleClass");
    document.body.classList.toggle("stopscrolling")
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");

      tabsformobileclass.forEach((item) =>
      item.classList.toggle('showmobiletabs'));
    
  }
  


let majorDescription = document.getElementById("major-attraction-para");
let attractionSlider = document.getElementById("attraction-slider");

 const list = document.querySelectorAll('.nav-list-tabs');
 list.forEach((item) =>
item.addEventListener('click',activeTab));
function activeTab(){
    list.forEach((item) =>
    item.classList.remove('active-tab'));
    this.classList.add('active-tab');
    if (this == document.getElementById("event")) {
        majorDescription.textContent = "Events wala description"
           attractionSlider.innerHTML = ` <div class="image-div" id="image1"><img id="sliderimage1" src="events1.jpg" alt=""></div>
           <div class="image-div" id="image2"><img id="sliderimage2" src="events2.jpg" alt=""></div>
           <div class="image-div" id="image3"><img id="sliderimage3" src="events3.jpg" alt=""></div>`
    }
    else if (this == document.getElementById("games")) {
        majorDescription.textContent = "Games wala description"
           attractionSlider.innerHTML = ` <div class="image-div" id="image1"><img id="sliderimage1" src="games1.jpg" alt=""></div>
           <div class="image-div" id="image2"><img id="sliderimage2" src="games2.jpg" alt=""></div>`
    }
    else if (this == document.getElementById("workshops")) {
        majorDescription.textContent = "Workshops wala description"
           attractionSlider.innerHTML = ` <div class="image-div" id="image1"><img id="sliderimage1" src="workshops1.jpg" alt=""></div>
           <div class="image-div" id="image2"><img id="sliderimage2" src="workshops2.jpg" alt=""></div>`
    }
    else if (this == document.getElementById("carnival")) {
        majorDescription.textContent = "Carnival wala description"
           attractionSlider.innerHTML = ` <div class="image-div" id="image1"><img id="sliderimage1" src="carnival1.jpg" alt=""></div>
           <div class="image-div" id="image2"><img id="sliderimage2" src="carnival2.jpg" alt=""></div>
           <div class="image-div" id="image3"><img id="sliderimage3" src="carnival3.jpg" alt=""></div>`
    }
    else if (this == document.getElementById("zonal")) {
        majorDescription.textContent = "Zonal wala description"
           attractionSlider.innerHTML = ` <div class="image-div" id="image1"><img id="sliderimage1" src="zonal.jpg" alt=""></div>`
    }
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


// for socials 
// window.onscroll = function(ev) {
//   if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 400) {
//     if (mediascreen.matches) { 
//       document.getElementById('socials-container').style.transform = 'translateX(0px)';
//     } else {
//       document.getElementById('socials-container').style.transform = 'translateX(-200px)';
//       document.getElementById('socials-container').style.transitionDuration = '.2s';
//     }

    
//   }
//   else{
//       document.getElementById('socials-container').style.transform = 'translateX(0px)';
//       document.getElementById('socials-container').style.transitionDuration = '.2s';
//   }
// };




// var mediascreen = window.matchMedia("(max-width: 998px)")
