//top button
var mybutton = document.getElementById("up");

window.onscroll = function(){
  scrollFunction()
};

function scrollFunction(){
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 ){
    up.style.display = "block";
  }else{
    up.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showLanguages(){
  document.getElementById("myDropdown1").classList.toggle("show");
}

function showGamingSkills() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function showAR() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

function showWeb() {
  document.getElementById("myDropdown4").classList.toggle("show");
}

function showAI() {
  document.getElementById("myDropdown5").classList.toggle("show");
}

function showAdobe() {
  document.getElementById("myDropdown6").classList.toggle("show");
}

function showHardware() {
  document.getElementById("myDropdown7").classList.toggle("show");
}

function showNetwork() {
  document.getElementById("myDropdown8").classList.toggle("show");
}

//Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}