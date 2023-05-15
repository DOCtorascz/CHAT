export { confirmationAddCode }
import { authorizContent } from "./authorizRequest.js";
import Cookies from "js-cookie";

function confirmationAddCode() {
  Cookies.set('code', `${authorizContent.textInput.value}`);
  const contentCodeResponse = { name: `Kakashi` };

  try {
    fetch(authorizContent.url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': 'secret',
        credentials: "include",
        Authorization: `Bearer ${Cookies.get('code')}`
      },
      body: JSON.stringify(contentCodeResponse),
    })
      .then(response => response.json())

    authorizContent.textInput.value = ''
    authorizContent.dialog.close()
  } catch (err) {
    alert(err)
  }
}