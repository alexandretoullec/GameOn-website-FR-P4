// Dom for menu

const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const menu = document.querySelector(".iconMenu");

// DOM Elements for form
const modalbg = document.querySelector(".modalForm-bg");
const modalBtns = document.querySelectorAll(".modal-btn");
const signups = document.querySelectorAll(".hero-section__content__btn-signup");
const closeBtnForms = document.querySelectorAll(".close,.btn-close");

// DOM for form validation
const form = document.querySelector(".modalForm__container");
const formDatas = document.querySelectorAll(
  ".modalForm__container__form__formData"
);
const bntSubmit = document.querySelector(".btn-submit");
const thanks = document.querySelector(".thanks-container");
const formInputs = document.querySelectorAll(".input");
const radios = document.querySelectorAll('input[type="radio"]');
const radioCont = document.querySelector('input[type="radio"]').parentElement;

// ******************Responsive menu*****************

// function for responsive menu

const editNav = () => {
  const topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
  } else {
    topNav.className = "topnav";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  }
};

// Event listener
menu.addEventListener("click", editNav);

// ********************** Open close Form ****************************************

// launch modal form
const launchModal = () => {
  form.style.display = "block";
  inputContReset();
  errorMsgReset();
  thanks.style.display = "none";
  modalbg.style.display = "block";
};

// launch modal event
signups.forEach((signup) => signup.addEventListener("click", launchModal));

// close modal form issue 1
const closeModalFunction = () => {
  modalbg.style.display = "none";
};

// close modal event issue 1
closeBtnForms.forEach((closeBtnForm) =>
  closeBtnForm.addEventListener("click", closeModalFunction)
);

// ********************** Form Validation ****************************************

// function which look for each input according to specific regex

// ********** REGEX form validation *************************

const standardRegex = new RegExp(/^[\w-\.]{2,}/);
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

const inputCheck = (input) => {
  switch (input.id) {
    case "first":
      return standardRegex.test(input.value);
    case "last":
      return standardRegex.test(input.value);
    case "email":
      return emailRegex.test(input.value);
    case "birthdate":
      // juste to make sure a value has been entered
      return input.value;
    case "quantity":
      // return a number
      return parseInt(input.value);
    default:
      return false;
  }
};

const errorMsg = (input) => {
  // closest is used to select the closest element for the input which has the selected class modalForm__container__form__formData and add the dataset attribute -error-visible whith a value of true
  input
    .closest(".modalForm__container__form__formData")
    .setAttribute("data-error-visible", true);
  // using swith for the first five inputs and add a msg error
  switch (input.id) {
    case "first":
      input.closest(".modalForm__container__form__formData").dataset.error =
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      break;
    case "last":
      input.closest(".modalForm__container__form__formData").dataset.error =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      break;
    case "email":
      input.closest(".modalForm__container__form__formData").dataset.error =
        "Merci de renseigner une adresse mail conforme";
      break;
    case "birthdate":
      input.closest(".modalForm__container__form__formData").dataset.error =
        "Vous devez entrer votre date de naissance.";
      break;
    case "quantity":
      input.closest(".modalForm__container__form__formData").dataset.error =
        "Merci de rensigner un nombre de participation";
      break;
    default:
      return "";
  }
};

// verifying if a checkbox has been checked for the city

const checkboxCheck = () => {
  for (let radio of radios) {
    if (radio.checked) {
      return true;
    }
  }
  return false;
};

// show a message if no cities have been checked

const errorMsgCity = () => {
  radioCont.setAttribute("data-error-visible", true);
  radioCont.dataset.error = "Vous devez choisir une option.";
};

// check if general conditions have been approved!!

const generalCondition = document.querySelector("#checkbox1");
const generalConditionCont = generalCondition.parentElement;

const messageGeneralCondition = () => {
  generalConditionCont.setAttribute("data-error-visible", true);
  generalConditionCont.dataset.error =
    "Vous devez vérifier que vous acceptez les termes et conditions.";
};

const formValidation = () => {
  form.style.display = "none";
  thanks.style.display = "flex";
};

const checkForm = () => {
  // boolean true by default
  let isValid = true;

  // check if input verify the rules using a function and a for each
  formInputs.forEach((formInput) => {
    if (!inputCheck(formInput)) {
      errorMsg(formInput);
      isValid = false;
    }
  });

  // check if one checkboxcity have been checked
  if (!checkboxCheck()) {
    errorMsgCity();
    isValid = false;
  }

  // check if general conditions have been approved!!
  if (!generalCondition.checked) {
    messageGeneralCondition();
    isValid = false;
  }

  // if isValid still true launch function formaValidation
  if (isValid) {
    formValidation();
  }
};

const errorMsgReset = () => {
  formInputs.forEach((input) => {
    const inputCont = input.parentElement;
    inputCont.dataset.error = "";
    inputCont.setAttribute("data-error-visible", "false");
  });
  radioCont.dataset.error = "";
  radioCont.setAttribute("data-error-visible", "false");
  generalConditionCont.dataset.error = "";
  generalConditionCont.setAttribute("data-error-visible", "false");
};

const inputContReset = () => {
  formInputs.forEach((input) => {
    input.value = "";
  });
};

// validation form when passed all tests

const validate = (e) => {
  e.preventDefault();
  errorMsgReset();
  checkForm();
};

bntSubmit.addEventListener("click", validate);
