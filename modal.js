// ******************Responsive menu*****************

    // Dom for menu

const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const menu = document.querySelector(".iconMenu");


    // Event listener
menu.addEventListener("click",editNav);


    // function for responsive menu

function editNav () {
  const topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
    openMenu.style.display="none"
    closeMenu.style.display="block"

  } else {
    topNav.className = "topnav";
    closeMenu.style.display="none";
    openMenu.style.display="block"
  }
}


// ********************** Form Validation ****************************************

// DOM Elements for form
const modalbg = document.querySelector(".modalForm-bg");
const modalBtns = document.querySelectorAll(".modal-btn");
const signups = document.querySelectorAll(".hero-section__content__btn-signup");
const closeBtnForms = document.querySelectorAll(".close,.btn-close");
const checkboxs = document.querySelectorAll('input[type="radio"]')



// launch modal form
const launchModal = () => {
  
  form.style.display = "block";
  inputContReset();
  errorMsgReset();
  thanks.style.display = "none";
  modalbg.style.display = "block";
}

// launch modal event
signups.forEach(signup => signup.addEventListener("click", launchModal));

// close modal form issue 1
const closeModalFunction = () => {
  modalbg.style.display = "none";
  
} 

// close modal event issue 1
closeBtnForms.forEach(closeBtnForm => closeBtnForm.addEventListener("click", closeModalFunction))


// Hiding form pressing c'est parti button and showing merci container 



// DOM elemnts 
const form = document.querySelector(".modalForm__container");
const formDatas = document.querySelectorAll(".modalForm__container__form__formData");
const bntSubmit = document.querySelector(".btn-submit");
const thanks = document.querySelector(".thanks-container");
const closeBtn = document.querySelector(".btn-close");



// ***************** checking if form is fully completed

        // ********** DOM  
const formInputs =document.querySelectorAll(".input");


const standardRegex = new RegExp(/^[a-zA-Z-]{2,}/);
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const birthRegex = new RegExp(/^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/)

const formValidation = () => {
  // inputContReset();
  form.style.display = "none";
  thanks.style.display = "flex";
  
  // modalbg.style.display = "none";
}

  // function which look for each input according to its id specific regex

const inputCheck = (input) => {
  switch(input.id){
    case "first" : 
      return standardRegex.test(input.value);
    case "last" : 
      return standardRegex.test(input.value);
    case "email" : 
      return emailRegex.test(input.value);
    case "birthdate":
        return !!input.value;
    case "quantity":
      // return a number
      return parseInt(input.value);
    default:
      return false;
  }
}

const errorMsg = (input) => {
  
  input.closest(".modalForm__container__form__formData").setAttribute("data-error-visible" , true);
  switch(input.id) {
    case "first" :
      input.closest(".modalForm__container__form__formData").dataset.error = "Merci de renseigenr un prénom d'au moins deux charactères";
      break;
    case "last" :
      input.closest(".modalForm__container__form__formData").dataset.error = "Merci de renseigenr un nom d'au moins deux charactères";
      break;
    case "email":
      input.closest(".modalForm__container__form__formData").dataset.error = "merci de renseigner une adresse mail conforme with a @ ";
      break;
    case "birthdate":
      input.closest(".modalForm__container__form__formData").dataset.error = "merci de renseigner une date de naissance conforme";
      break;
    case "quantity":
      input.closest(".modalForm__container__form__formData").dataset.error = "merci de rensigner un nombre de participation même si celle ci est nulle";
      break;
    default:
      return "";
  }
}


// verifying if a checkbox has been checked

const checkboxCheck = () => {
    for (let checkbox of checkboxs){
      if (checkbox.checked){
        return true;
      }
    }
    return false;
}

const radioCont = document.querySelector('input[type="radio"]').parentElement;

const errorMsgCity = () => {
  
  radioCont.setAttribute("data-error-visible" , true);
  radioCont.dataset.error = "Merci de selectionner une ville pour participer au trounoi de votre choix";
}

const checkForm = () => {
  // boolean true by default
  let isValid = true;

  // checking if input verify the rules using a function and a for each

  formInputs.forEach(formInput => {
     if (!inputCheck(formInput)){
      errorMsg(formInput);
      isValid=false;
     } 
    }
  )

    if(!checkboxCheck()){
      errorMsgCity();
      isValid=false;
    }
  
  // if isValid still true launch function formaValidation
  if (isValid) {
    formValidation()
  }
}



const errorMsgReset = () => {
  formInputs.forEach(input => {
    const inputCont = input.parentElement;
    inputCont.dataset.error = "";
    inputCont.setAttribute("data-error-visible", "false");

  })
  radioCont.dataset.error = "";
  radioCont.setAttribute("data-error-visible", "false");

}

const inputContReset = () => {
  formInputs.forEach(input => {
    input.value = "";
  })
}

// validation form when passed all tests

const validate = (e) => {
  e.preventDefault();
  errorMsgReset();  
  checkForm();
} 


bntSubmit.addEventListener("click", validate);

