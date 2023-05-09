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
    } catch(err) {
      alert('Неверное имя ящика')
    }
  } else {
    user.validEmail()
  }
}

// function confirmationCode() {
//   const autorizDialog = document.querySelector('#autoriz');
//   const confirmationDialog = document.querySelector('#confirmation');
//   confirmationDialog.setAttribute('open', 'true')
//   autorizDialog.close()
// }

// const confirmationContent = {
//   confirmationBt: document.querySelector('.confirmationBt'),
//   confirmation: document.querySelector('.confirmation'),
//   dialog: document.querySelector('#confirmation'),
// }

// function confirmationAddCode() {
//   document.cookie = confirmationContent.confirmation.value
//   const contentCodeResponse = {  name: `${autorizContent.contentEmail.value}`};

//   fetch(autorizContent.url, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': 'secret',
//       credentials: "include",
//       Authorization: `Bearer ${document.cookie}`
//     },
//     body: JSON.stringify(contentCodeResponse),
//   })
//     .then(response => response.json())
//     .then(namePerson => console.log(namePerson))

//   confirmationGetUser()
//   // confirmationContent.dialog.close()
// }

// function confirmationGetUser() {
//   const url = 'https://edu.strada.one/api/user/me';
//   document.cookie = confirmationContent.confirmation.value
//   const contentCodeResponse = {  name: `${autorizContent.contentEmail.value}`};

//   fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': 'secret',
//       credentials: "include",
//       Authorization: `Bearer ${document.cookie}`
//     },
//   })
//     .then(response => response.json())
//     .then(namePerson => console.log(namePerson))
  
//   confirmationContent.dialog.close()
// }


// function optionsPopup() {
//   const confirmationDialog = document.querySelector('#confirmation');
//   const optionDialog = document.querySelector('#options');
//   optionDialog.setAttribute('open', 'true')
//   confirmationDialog.close()
// }