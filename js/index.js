import { authorizRequest, authorizContent} from "./authorizRequest.js";
import { addCodeAuthoriz, createBtCode } from "./popup.js";
import { confirmationAddCode } from "./codeRequest.js";
import Cookies from "js-cookie";

authorizContent.getCode.addEventListener('click', (e) => {
  e.preventDefault()
  authorizRequest()
})

authorizContent.addCode.addEventListener('click', (e) => {
  e.preventDefault()
  addCodeAuthoriz(true)
})

createBtCode.addEventListener('click', (e) => {
  e.preventDefault()
  confirmationAddCode()
})

const form = {
  form: document.querySelector('form'),
  headerAddMessageText: document.querySelector('.header__add-message-text'),
  headerAddMessageAdd: document.querySelector('.header__add-message-add'),
}

function addMessage() {
  const socket = new WebSocket(`wss://edu.strada.one/websockets?${Cookies.get('code')}`);

  const headerChat = document.querySelector('.header__chat');
  const TmplheaderChat = document.querySelector('#tmpl');
  const TmplheaderChatInner = document.querySelector('.tpml__inner');

  const messageValue = form.headerAddMessageText.value
  const spanContentText = TmplheaderChat.content.querySelector('.header__chat-message-content');

  socket.onopen = function(e) {
    socket.send(JSON.stringify({ text: `${messageValue}` }));
  };

  socket.onmessage = function(e) {
    alert(e.data);
  };

  spanContentText.textContent = messageValue;
  TmplheaderChatInner.append(TmplheaderChat.content.cloneNode(true))
  headerChat.append(TmplheaderChatInner)
}


form.headerAddMessageAdd.addEventListener('click', (e) => {
  e.preventDefault()
  addMessage()
})
