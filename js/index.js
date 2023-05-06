import { autorizRequest, autorizContent } from "./popupAutoriz.js";

const headerChat = document.querySelector('.header__chat');
const TmplheaderChat = document.querySelector('#tmpl');
const TmplheaderChatInner = document.querySelector('.tpml__inner');

const form = {
  form: document.querySelector('form'),
  headerAddMessageText: document.querySelector('.header__add-message-text'),
  headerAddMessageAdd: document.querySelector('.header__add-message-add'),
}

function addMessage() {
  const messageValue = form.headerAddMessageText.value
  const spanContentText = TmplheaderChat.content.querySelector('.header__chat-message-content');

  spanContentText.textContent = messageValue;
  TmplheaderChatInner.append(TmplheaderChat.content.cloneNode(true))
  headerChat.append(TmplheaderChatInner)
}

// form.form.addEventListener('click', (event) => {
//   event.preventDefault()
// })

form.headerAddMessageAdd.addEventListener('click', addMessage)
autorizContent.popupOpenCode.addEventListener('click', (e) => {
  e.preventDefault()
  autorizRequest()
})
