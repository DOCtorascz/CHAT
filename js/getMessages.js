export {getMessage}
import Cookies from "js-cookie";

function getMessage() {
  const tpmlInner = document.querySelector('.tpml__inner');
  const url = 'https://edu.strada.one/api/messages/';

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
      let str = ''
      res.messages.forEach(element => {
        console.log(element)
        str += `<div class="header__chat-message">
        <p class="header__chat-message-name">
        ${element.user.name}: <span class="header__chat-message-content">${element.text}</span>
        </p>
        <p class="header__chat-message-time">
          18:45
        </p>
      </div>`
      });
      tpmlInner.insertAdjacentHTML('beforeend', `${str}`)
    })
}
