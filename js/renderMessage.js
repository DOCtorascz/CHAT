export {renderMeassage, tpmlInner}
import {format, utcToZonedTime} from 'date-fns-tz'
const tpmlInner = document.querySelector('.tpml__inner');

function renderMeassage(res) {
  let str = ''

  res.forEach(element => {
    const dateUtc = utcToZonedTime(element.createdAt, 'America/New_York');
    str += `<div class="header__chat-message">
    <p class="header__chat-message-name">
    ${element.user.name}: <span class="header__chat-message-content">${element.text}</span>
    </p>
    <p class="header__chat-message-time">
      ${format(dateUtc, 'yyyy-MM-dd HH:mm', { timeZone: 'America/New_York' })}
    </p>
  </div>`
  });
  tpmlInner.insertAdjacentHTML('beforeend', `${str}`)
}