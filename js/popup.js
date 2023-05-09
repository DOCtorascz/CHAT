export {addCodeAuthoriz, createBtCode}
import { authorizContent} from "./authorizRequest.js";

const createBtCode = document.createElement('button');

function addCodeAuthoriz (addCode = '', rename = '') {
  if (addCode != '') {
    authorizContent.namePopup.textContent = "Подтверждение"
    authorizContent.textInput.setAttribute('placeholder', 'Код:');
    authorizContent.textInput.setAttribute('type', 'text');
    authorizContent.addCode.setAttribute('style', 'display: none');
    authorizContent.getCode.setAttribute('style', 'display: none');
    
    createBtCode.setAttribute('class', 'addCode stl');
    createBtCode.textContent = 'Подтвердить'
    authorizContent.formPopup.appendChild(createBtCode)
  } 
  // else if (rename != '') {
  //   authorizContent.namePopup.textContent = "Настройки"
  //   authorizContent.textInput.setAttribute('placeholder', 'Имя в чате:');
  //   authorizContent.getCode.textContent = '->';
  //   createBtCode.setAttribute('style', 'display: none')


  // }
}