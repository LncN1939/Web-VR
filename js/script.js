const imagen1 = document.querySelector('#imagen1');
const mensaje = document.querySelector('#mensaje');

imagen1.addEventListener('click', () => {
  const messageText = imagen1.getAttribute('data-message');
  const messageImage = imagen1.getAttribute('data-image');
  const messageHtml = `<div class="message-container"><div class="message-text"><h2>Información sobre el álbum</h2><p>${messageText}</p></div><div class="message-image"><img src="${messageImage}" /></div></div>`;
  mensaje.innerHTML = messageHtml;
  mensaje.classList.remove('oculto');
});

mensaje.addEventListener('click', () => {
  mensaje.classList.add('oculto');
});

const imagen2 = document.querySelector('#imagen2');
const mensaje2 = document.querySelector('#mensaje');

imagen2.addEventListener('click', () => {
  const messageText = imagen2.getAttribute('data-message');
  const messageImage = imagen2.getAttribute('data-image');
  const messageHtml = `<div class="message-container"><div class="message-text"><h2>Información sobre el álbum</h2><p>${messageText}</p></div><div class="message-image"><img src="${messageImage}" /></div></div>`;
  mensaje.innerHTML = messageHtml;
  mensaje.classList.remove('oculto');
});

mensaje.addEventListener('click', () => {
  mensaje.classList.add('oculto');
});

const imagen3 = document.querySelector('#imagen3');
const mensaje3 = document.querySelector('#mensaje');

imagen3.addEventListener('click', () => {
  const messageText = imagen3.getAttribute('data-message');
  const messageImage = imagen3.getAttribute('data-image');
  const messageHtml = `<div class="message-container"><div class="message-text"><h2>Información sobre el álbum</h2><p>${messageText}</p></div><div class="message-image"><img src="${messageImage}" /></div></div>`;
  mensaje.innerHTML = messageHtml;
  mensaje.classList.remove('oculto');
});

mensaje.addEventListener('click', () => {
  mensaje.classList.add('oculto');
});