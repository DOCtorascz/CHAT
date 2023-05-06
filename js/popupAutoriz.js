export {autorizRequest, autorizContent}

const autorizContent = {
  popupOpenCode: document.querySelector('.popup__open-code'),
  contentEmail: document.querySelector('.popup__content'),
  url: 'https://edu.strada.one/api/user',
}

function autorizRequest() {
  const contentEmailResponse = { email: `${autorizContent.contentEmail.value}`};

  fetch(autorizContent.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(contentEmailResponse),
  })
    .then(response => response.json())
}
