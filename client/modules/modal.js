const modal = () => {
  const modal = document.getElementById('modal');

  const btn = document.getElementById('modal-button');

  const body = document.getElementsByTagName('body')[0];

  const span = document.getElementsByClassName('close')[0];

  btn.onclick = () => {
    modal.style.display = 'block';
    body.classList.add('hide-overflow');
  };

  span.onclick = () => {
    modal.style.display = 'none';
    body.classList.remove('hide-overflow');
  };

  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = 'none';
      body.classList.remove('hide-overflow');
    }
  };
};

export default modal;
