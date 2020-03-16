//ADOPTIONS JS CLICK EVENTS//

var oscar = document.getElementById("OscarThumbnail");
var patty = document.getElementById("PattyThumbnail");
var lucky = document.getElementById("LuckyThumbnail");
var peanut = document.getElementById("Peanuthumbnail");
var hammy = document.getElementById("HammyThumbnail");
var sonic = document.getElementById("SonicThumbnail");
var bob = document.getElementById("BobThumbnail");
var davey = document.getElementById("DaveyThumbnail");



oscar.addEventListener("click", function () {
	alert("MEET OSCAR \n \nPogonas are a genus of reptiles containing eight lizard species (though some sources say nine) which are often known by the common name bearded dragons. The name bearded dragon refers to the beard of the dragon, the underside of the throat, which can turn black for a number of reasons, most often as a result of stress.\n \nThey are a semi-arboreal species, spending significant amounts of time on branches, in bushes, and near human habitation. Pogona species bask on rocks and exposed branches in the mornings and afternoons. They are found throughout much of Australia in a wide range of habitats such as deserts, shrublands and Eucalyptus woodlands.Several species of this genus, especially the central bearded dragon, are often kept as pets. They can also be exhibited in zoos due to their hardy nature and easy care in comparison to other exotic reptiles.");
})


patty.addEventListener("click", function () {
	alert("MEET PATTY \n \nPatty is a great short haired female guinea piggie. She is approx 2-3 years old. She would like to be adopted with her bff Bean if possible. \n \nThe domestic guinea pig has enjoyed widespread popularity as a pocket pet, a type of household pet, since its introduction by European traders in the 16th century. Their friendly responsiveness to handling and feeding, and the relative ease of caring for them have made and continue to make guinea pigs a popular choice of pet. Please consider adding Patty to your family!");
})


lucky.addEventListener("click", function () {
	alert("MEET LUCKY \n \nLucky is a 8-10 month old petite retrieve mix that came to us from GA. Lucky is having a tough time adjusting to the loud shelter and is very nervous. We are looking for a special adopter to show Lucky that the world is not such a scary place. Lucky does very well with other dogs! Her ideal home would have a dog friend and backyard. She is currently eligible for our foster to adopt program to ensure she is set up for success in her new home. \n \nLucky received a wellness exam by our veterinarian and is up to date with his vaccinations. He is neutered and tested for heartworm and lyme diseases.");
})

peanut.addEventListener("click", function () {
	alert("MEET PEANUT \n \nTake him home if you need a personal lap warmer during the cold days! Peanut is a very handsome, calm and playful kitty that loves being petted on the head. He's the type of guy that naps next to you while you are watching TV. He's also super friendly and has no issue showing off his fluffy belly. Though Peanut doesn't really like handshakes, he's never mean about it. If you try to touch his little paws, he will just gently push your hands away. He's not a talker, but he will let you know what he likes and what he doesn't like for sure. He's really sweet and could be your perfect lap warmer during the colder days. Since he is still a kitten we are looking for adoptors who are willing to take on an energetic kitty who loves playtime.");
})

hammy.addEventListener("click", function () {
	alert("MEET HAMMY \n \nThank you for your interest in adoption. Please note all correspondence will be initially through email until approved. Please check your Spam folder for emails from the group about your application.Thank you for considering adoption\n \nHammy and his brother Roberto were part of an opps litter that came into our rescue at one day of age. The boys are very sweet but can be a bit shy. DOB: Oct 27, 2019 Hammy is looking for a forever home to call his own. If you are interested in adoption please start with our online hamster adoption application which can be found on our front page. We offer Bin cages and additional supplies for an additional fee.");
})

sonic.addEventListener("click", function () {
	alert("MEET HAMMY \n \nThank you for your interest in adoption. Please note all correspondence will be initially through email until approved. Please check your Spam folder for emails from the group about your application.Thank you for considering adoption\n \nHammy and his brother Roberto were part of an opps litter that came into our rescue at one day of age. The boys are very sweet but can be a bit shy. DOB: Oct 27, 2019 Hammy is looking for a forever home to call his own. If you are interested in adoption please start with our online hamster adoption application which can be found on our front page. We offer Bin cages and additional supplies for an additional fee.");
})

bob.addEventListener("click", function () {
	alert("MEET BOB \n \nBob is a laid-back little guy with some soft, thick floof to him. He's a lap kitten and enjoys loafing on your legs to take a snooze. This gentle, loving boy would do well in any home where he can snuggle with people. If you're looking to adopt a pair, Bob loves to cuddle with his sister, Lil. Bob is still getting over a mild kitty cold, but he'll be healthy and ready to go home in a few weeks! \n \nAll kittens are spayed/neutered, tested for FIV/FelV, vaccinated, dewormed, and microchipped.");
})

davey.addEventListener("click", function () {
	alert("MEET DAVEY \n \n\ Hi my name is Davey! We think I'm a Australian Cattle Dog/ Shepherd Mix. I will be 8 weeks on 3/6. Im going to be about a medium size dog fully grown. I love to be with my humans, I will follow you everywhere. I like playing with my toys but love playing with my fur foster dog. Working on my potty training. I'm looking for my furever home. \n \nIf interested in me send a email to Philly Pets for an application. Hope to meet you soon!     ");
})

//END ADOPTIONS JS CLICK EVENTS//









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