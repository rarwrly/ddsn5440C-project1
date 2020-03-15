/*Mobile Navigation bar*/
function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } 
  else {
    x.className = "topnav";
  }
}

/*---Index Page---*/
/*Donation form  on Index*/
  var donationName = document.getElementById("donation-full-name");
  var donationAmt = document.getElementById("donation-amount");
   var submit = document.getElementById("donation-submit")

 submit.addEventListener('click', function (){ //only executes on the submit button
        if (donationName.value !=='' && donationAmt.value !==''){
              alert("Thank you " + donationName.value + " for your donation of $" + donationAmt.value)
              donationName.value = ''
              donationAmt.value = ''
        }
        else if (donationName.value !=='' && donationAmt.value ==''){
              alert("Please enter your donation amount on the form. click Ok to close this pop-up.")
        }
        else if (donationName.value =='' && donationAmt.value !==''){
              alert("Please enter your full name on the form. click Ok to close this pop-up.")
        }
 })

/*Index page slide show*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


/*---- End Index Page*----*/