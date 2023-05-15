export { getMessage }
import { socet } from "./socetsRequest.js";
// import { renderMeassage } from "./renderMessage.js";
import { renderMeassage, tpmlInner } from "./renderMessage.js";
// import { socet } from "./socetsRequest.js";
import Cookies from "js-cookie";
let arrMessages = []

function getMessage() {
  const url = 'https://edu.strada.one/api/messages/';
  const headerChat = document.querySelector('.header__chat');

  try {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': 'secret',
        credentials: "include",
        Authorization: `Bearer ${Cookies.get('code')}`
      },
    })
      .then(response => response.json())
      .then(res => {
        arrMessages = res.messages.map(item => {
          return item
        })
        const socetMessage = socet()

        arrMessages.reverse()
        localStorage.setItem('messages', JSON.stringify(arrMessages))

        const strStorage = localStorage.getItem('messages')
        const arrStorage = JSON.parse(strStorage)
        let arrayLastMessages = arrStorage.splice(arrStorage.length - 20)
        let storageLength = arrStorage.length

        socetMessage.onopen = function (e) {
          console.log("[open] Соединение установлено");
          headerChat.addEventListener('scroll', (e) => {

            if (headerChat.scrollTop === 0) {
              storageLength -= 20
              let lastMessageStorage = arrStorage.splice(storageLength)
              // arrayLastMessages += arrStorage.splice(arrStorage.length - 20)
              arrayLastMessages.unshift(...lastMessageStorage)
              // console.log(arrayLastMessages)
              removeMessageDom()
              renderMeassage(arrayLastMessages)
            }

          })

          renderMeassage(arrayLastMessages)
          const tpmlInner = document.querySelector('.tpml__inner');
          tpmlInner.lastChild.scrollIntoView(top = false)
        }
        socetMessage.onmessage = function (e) {
          const message = JSON.parse(e.data);
          arrayLastMessages.push(message)
          removeMessageDom()
          renderMeassage(arrayLastMessages)
          console.log('Получены')
        };

        socetMessage.onclose = function (e) {
          console.log("Закрыто");
        };
      })
  } catch (err) {
    alert(err)
  }
}

function removeMessageDom() {
  while(tpmlInner.firstChild) {
    tpmlInner.removeChild(tpmlInner.lastChild)
  }
}
