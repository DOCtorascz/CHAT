export {Errors}

const errorMessage = document.querySelector('.error-message');

class Errors {
  constructor(emails) {
    this.emails = emails
  }

  validEmail() {
    errorMessage.textContent = this.emails
    errorMessage.setAttribute('style', 'opacity: 1')
  }

  closeErr() {
    errorMessage.setAttribute('style', 'opacity: 0')
  }
}
