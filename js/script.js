const imagen1 = document.querySelector('#imagen1');
const imagen2 = document.querySelector('#imagen2');
const mensaje = document.querySelector('#mensaje');

let lock = false;

imagen1.addEventListener('click', () => {
  if (lock) {
    return;
  }
  lock = true;
  console.log('1')
  const messageText = imagen1.getAttribute('data-message');
  const messageImage = imagen1.getAttribute('data-image');
  const messageHtml = `<div class="message-container"><div class="message-text"><h2>Información sobre el álbum</h2><p>${messageText}</p></div><div class="message-image"><img src="${messageImage}" /></div></div>`;
  mensaje.innerHTML = messageHtml;
  mensaje.classList.remove('oculto');
  setTimeout(() => {
    lock = false;
  }, 100);
});

imagen2.addEventListener('click', () => {
  if (lock) {
    return;
  }
  lock = true;
  console.log('2')
  const messageText = imagen2.getAttribute('data-message');
  const messageImage = imagen2.getAttribute('data-image');
  const messageHtml = `<div class="message-container"><div class="message-text"><h2>Información sobre el álbum</h2><p>${messageText}</p></div><div class="message-image"><img src="${messageImage}" /></div></div>`;
  mensaje.innerHTML = messageHtml;
  mensaje.classList.remove('oculto');
  setTimeout(() => {
    lock = false;
  }, 100);
});

mensaje.addEventListener('click', () => {
  mensaje.classList.add('oculto');
});