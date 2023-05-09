export { confirmationAddCode }
import { authorizContent } from "./authorizRequest.js";
import { getMessage } from "./getMessages.js";
import Cookies from "js-cookie";

function confirmationAddCode() {
  Cookies.set('code', `${authorizContent.textInput.value}`);
  const contentCodeResponse = { name: `ItsI` };

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
    getMessage()
    authorizContent.dialog.close()
  } catch (err) {
    alert(err)
  }
}