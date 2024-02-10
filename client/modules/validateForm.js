import IMask from 'imask';
import ajaxRequest from './ajaxRequest';

const validateForm = () => {
  const form = document.querySelector('form');
  const button = document.querySelector('button');
  const successMessage = document.getElementById('success-message');

  const baseUrl = 'http://localhost:9090/auth/registration';

  IMask(document.getElementById('phone-number'), {
    mask: '+{7}(000)000-00-00'
  });

  const inputValues = {
    username: document.querySelector('input[name="username"]'),
    email: document.querySelector('input[name="email"]'),
    'phone-number': document.querySelector('input[name="phone-number"]'),
    message: document.querySelector('textarea[name="text"]')
  };

  const errorValues = {};

  for (let value in inputValues) {
    const errorName = value + '-error';
    errorValues[errorName] = document.getElementById(errorName);
  }

  form.addEventListener('submit', async event => {
    try {
      event.preventDefault();

      button.disabled = true;
      successMessage.textContent = '';

      const request = JSON.stringify({
        username: inputValues['username'].value,
        email: inputValues['email'].value,
        'phone-number': inputValues['phone-number'].value,
        message: inputValues['message'].value
      });

      const data = await ajaxRequest(baseUrl, 'POST', request, {
        'Content-type': 'application/json'
      });

      button.disabled = false;

      for (let error in errorValues) {
        errorValues[error].textContent = '';
        inputValues[error.split('-error').join('')].classList.remove('error-input');
      }

      if (data.status === 'error') {
        const errors = data.fields;

        errors.forEach(error => {
          errorValues[error.path + '-error'].textContent = error.msg;
          inputValues[error.path].className = 'error-input';
        });

        return;
      }

      form.reset();
      successMessage.textContent = data.message;
      return;
    } catch (error) {
      console.log(error);
    }
  });
};

export default validateForm;
