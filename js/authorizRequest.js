export {authorizRequest, authorizContent}
import { Errors } from "./errsors.js";
import { valid } from "./validEmail.js";

const authorizContent = {
  formPopup: document.querySelector('.form-popup'),
  namePopup: document.querySelector('.popup-control__name'),
  getCode: document.querySelector('.popup__open-code'),
  addCode: document.querySelector('.popup__add-code'),
  textInput: document.querySelector('.authoriz'),
  dialog: document.querySelector('#autoriz'),
  url: 'https://edu.strada.one/api/user',
}

function authorizRequest() {
  const contentEmailResponse = { email: `${authorizContent.textInput.value}`};
  const user = new Errors(valid(authorizContent.textInput.value));

  if (user.emails === null) {
    try {
      user.closeErr()
      fetch(authorizContent.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(contentEmailResponse),
      })
        .then(response => response.json())

      authorizContent.textInput.value = ''
    } catch(err) {
      alert('Неверное имя ящика')
    }
  } else {
    user.validEmail()
  }
}
