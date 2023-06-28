// DOM Elements
const modalbg = document.querySelector(".modalForm-bg");

//  why using query SelectorAll when you only have one modalButton ???
const modalBtn = document.querySelector(".modal-btn");

const formData = document.querySelectorAll(".formData");

const closeBtnForm = document.querySelector(".close");





// ?????

function editNav() {
  const topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}




// launch modal event
modalBtn.addEventListener("click", launchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form issue 1
const closeModalFunction = () => {
  modalbg.style.display = "none";
} 

// close modal event issue 1
closeBtnForm.addEventListener("click", closeModalFunction)



// RESPONSIVE MOBILE MENU
const menuWrapper = document.querySelector(".nav-wrapper");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menuWrapper.style.transform = "translateX(0)";
  menu.style.transform = "translateX(0)";
};

const hideMenu = () => {
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menuWrapper.style.transform = "translateX(-200%)";
  menu.style.transform = "translateX(200%)";
};

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);




