/**
 * Date : Mar 14 2025
 * Title : Private Clinic
 * Description : A simple billing system for a private clinic.
 * author : M H R Habib.
 */

// Global Variable 
let isToggleClose= true;
let isFormValidate = true;
let testSliderWidth = 0;


window.onload = () => {
    main()

}

function main(){
    //DOM Reference
    const contactForm = document.getElementById('contactForm');
    const patientName = document.getElementById('patientName');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    const faqContainer = document.querySelector('.faqs-container');
    const chevronRight = document.querySelector('.chevron-right');
    const chevronLeft = document.querySelector('.chevron-left');

    
    //Event Listener
    patientName.addEventListener('input', (e) => handleNameValidation(e, patientName));
    email.addEventListener('input', (e) => handleEmailValidation(e, email));
    phoneNumber.addEventListener('input', (e) => handleNumberValidation(e, phoneNumber));
    contactForm.addEventListener('submit', (e) => handleForm(e));
    faqContainer.addEventListener('click', (e) => handleFAQAction(e));
    chevronRight.addEventListener('click', () => handleChevronRight(chevronRight));
    chevronLeft.addEventListener('click', handleChevronLeft);

}
//Event handler ========================

function handleNameValidation(event, parent){
    const isValidate = validationName(event.target.value.trim());
    formErrorMsgDisplay(isValidate, parent);
}

function handleEmailValidation(event, parent){
    const isValidate = validationEmail(event.target.value);
    formErrorMsgDisplay(isValidate, parent);
}

function handleNumberValidation(event, parent){
    const isValidate = validationPhoneNumber(event.target.value);
    formErrorMsgDisplay(isValidate, parent);
}

function handleTextValidation(parent){
    const isValidate = textValidation(parent.value);
    formErrorMsgDisplay(isValidate, parent);
}

function handleForm(event){
    event.preventDefault();
    if(!isFormValidate) return alert('Please complete it with valid data.');
    const patientName = event.target.patientName.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const isPatient = event.target.checkbox.checked;
    if (patientName === '' || email === '' || phoneNumber === '' || subject === '' || message === '') return alert('Please fill in all the requirements.');

    const contactMail = {
        patientName,
        email,
        phoneNumber,
        subject,
        message,
        isPatient
    }
}

function handleFAQAction(e){
    const header = e.target.closest('.faq-header')
    if(header){
        const parent = header.closest('.faq-box');
        const i = parent.querySelector('i');
        const p = parent.querySelector('p');
        i.classList.toggle('rotate');
        p.style.display = p.style.display === 'block' ? 'none' : 'block';
    }
}

function handleChevronRight(){
    testSliderWidth += -305
    testimonialSlider()
}
function handleChevronLeft(){
    testSliderWidth += +305
    testimonialSlider()
}

// DOM Function ======================

/**
 * Toggles the navigation menu open and close.
 * Updates the menu icon based on the toggle state.
 */
function navMenuOpenClose(){
    const navMenu = document.querySelector('.nav-links');
    const menuIcon = document.getElementById('menuIcon');
    navMenu.classList.toggle('open');

    if(isToggleClose){
        isToggleClose = false;
        menuIcon.classList.remove('fas', 'fa-bars');
        menuIcon.classList.add('fa-solid', 'fa-xmark');
    }else{
        isToggleClose = true;
        menuIcon.classList.remove('fa-solid', 'fa-xmark');
        menuIcon.classList.add('fas', 'fa-bars');
    }
}

/**
 * Displays or removes an error message based on validation.
 * @param {boolean} isValidate 
 * @param {HTMLElement} parent 
 */
function formErrorMsgDisplay(isValidate, parent){
    if(!isValidate){
        parent.classList.add('error');
        isFormValidate = false;
    }
    else{
        parent.classList.remove('error');
        isFormValidate = true;
    }
}


function testimonialSlider(){
    const parent = document.querySelector('.testo-container');
    parent.style.marginLeft = testSliderWidth + 'px';

}

//Utils function =========================

function validationName(name){
    const regex = /^[A-Za-z ]{2,}$/;
    return regex.test(name);
}

function validationEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validationPhoneNumber(number){
    const regex = /^\d+$/; 
    return regex.test(number);
}

function textValidation(text){
    const textRegex = /^[A-Za-z0-9\s.,!?'"()-]+$/;
    return textRegex.test(text);
}