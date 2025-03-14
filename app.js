/**
 * Date : Mar 14 2025
 * Title : Private Clinic
 * Description : A simple billing system for a private clinic.
 * author : M H R Habib.
 */

// Global Variable 
let isToggleClose= true


window.onload = () => {
    main()

}

function main(){
    //DOM Reference
    const contactForm = document.getElementById('contactForm');
    const patientName = document.getElementById('patientName');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');

    
    //Event Listener
    patientName.addEventListener('input', (e) => handleNameValidation(e, patientName));
    email.addEventListener('input', (e) => handleEmailValidation(e, email));
    phoneNumber.addEventListener('input', (e) => handleNumberValidation(e, phoneNumber));


    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const patientName = event.target.patientName.value;
        const email = event.target.email.value;
        const phoneNumber = event.target.phoneNumber.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        const isPatient = event.target.checkbox.checked;


        const contactMail = {
            patientName,
            email,
            phoneNumber,
            subject,
            message,
            isPatient
        }
        console.log(contactMail)
    
    })
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
    }
    else{
        parent.classList.remove('error');
    }
}


//Utils function =========================

function validationName(name){
    console.log(name, 'name')
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