export {socet, socket}
import Cookies from "js-cookie";
import { renderMeassage, tpmlInner } from "./renderMessage.js";
import { form } from "./index.js";

let socket;

function socet(arrsMessage) {
  socket = new WebSocket(`wss://edu.strada.one/websockets?${Cookies.get('code')}`);

  return socket
  // socet.onopen = function(e) {
  //   console.log("[open] Соединение установлено");
  //   renderMeassage(arrsMessage)
  // };
  
  // socket.onmessage = function(e) {
  //   console.log('Получены')
  //   removeMessageDom()
  //   renderMeassage(arrsMessage)
  // };

  // socket.onclose = function(e) {
  //   console.log("Закрыто");
  // };
}

function removeMessageDom() {
  while(tpmlInner.firstChild) {
    tpmlInner.removeChild(tpmlInner.lastChild)
  }
}

