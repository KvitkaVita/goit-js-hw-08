import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const userData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onSetData, 500));
refs.message.addEventListener('input', throttle(onSetData, 500));

populateMessage();
// "feedback-form-state" - ключ до сховища

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(`e-mail: ${refs.email.value}, message: ${refs.message.value}`);

  evt.target.reset();

  localStorage.removeItem(STORAGE_KEY);
}


function onSetData(evt) {
    userData.email = refs.email.value;
    userData.message = refs.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function populateMessage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData)

  if (parsedData) {
    refs.email.value = parsedData.email || ""

    refs.message.value = parsedData.message || "";
  }
}
