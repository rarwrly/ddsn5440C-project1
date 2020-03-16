/*Mobile Navigation bar*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/* CREATING A NEW BRANCH TEST */


/* AMBER JS FOR LOCATIONS PAGE */

/* CONTACT ALERT */
function thankyoualert() {
  alert("Thank you for submiting your interest. We will get back to you shortly!");
} 


/* PHONE NUMBER DETAILS */
document.getElementById("Northphillynumber").addEventListener("click", function(){
  document.getElementById("NorthPhillyPhoneNumber").innerHTML = "(267) 385-3800";
});

document.getElementById("Fairmountnumber").addEventListener("click", function(){
  document.getElementById("FairmountPhoneNumber").innerHTML = "(215) 309-6851";
});

document.getElementById("CenterCitynumber").addEventListener("click", function(){
  document.getElementById("CenterCityPhoneNumber").innerHTML = "123-456-7894";
});

document.getElementById("Southphillynumber").addEventListener("click", function(){
  document.getElementById("SouthPhillyPhoneNumber").innerHTML = "(215) 298-9680";
});

/* ADRESS DETAILS */

document.getElementById("NorthPhillyAdressIcon").addEventListener("click", function(){
  document.getElementById("NorthPhillyAdress").innerHTML = "ACCT Philly \n 111 W Hunting Park Ave, Philadelphia, PA 19140";
});


document.getElementById("centercityadressicon").addEventListener("click", function(){
  document.getElementById("CenterCityAdress").innerHTML = "Morris Animal Shelter \n 1242 Lombard St, Philadelphia, PA 19147";
});

document.getElementById("Fairmountadressicon").addEventListener("click", function(){
  document.getElementById("FairmountAdress").innerHTML = "Pennsylvania SPCA  \n 1546 Frankford Ave, Philadelphia, PA 19125";
});

document.getElementById("SouthphillyAdressIcon").addEventListener("click", function(){
  document.getElementById("SouthPhillyAdress").innerHTML = "PAWS\n 2900 Grays Ferry Ave, Philadelphia, PA 19146";
});

 
/* END AMBER'S JS */