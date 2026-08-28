const dialogs = {
  video: document.querySelector('#video-dialog'),
  booking: document.querySelector('#booking-dialog')
};

document.querySelectorAll('[data-dialog]').forEach((trigger) => {
  trigger.addEventListener('click', () => dialogs[trigger.dataset.dialog]?.showModal());
});

document.querySelectorAll('.son-dialog').forEach((dialog) => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) dialog.close();
  });
});

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.hidden = true;
  document.querySelector('.form-success').hidden = false;
});
