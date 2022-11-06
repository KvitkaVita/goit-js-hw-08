import throttle from "lodash.throttle"

const STORAGE_KEY = "feedback-form-state";

const refs = {
   form: document.querySelector(".feedback-form"),
   email: document.querySelector("input"),
   textarea: document.querySelector("textarea"),
};

refs.form.addEventListener("submit", onFormSubmit)
// refs.email.addEventListener("input", onEmailInput)
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

populateMessage();
// "feedback-form-state" - ключ до сховища

function onFormSubmit(evt) {
evt.preventDefault();

evt.currentTarget.reset();

localStorage.removeItem(STORAGE_KEY);
}

// нижче треба добавити тротл
function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message)
}

function populateMessage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if(savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}