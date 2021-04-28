import gallery from './gallery-items.js';

// Переменные

const galleryUl = document.querySelector('ul.gallery');
const galleryModal = document.querySelector('div.lightbox');
const galleryModalContent = document.querySelector('img.lightbox__image');
const galleryModalClose = document.querySelector('[data-action="close-lightbox"]');

// Создание галереи 

galleryUl.innerHTML = gallery
  .map(({ original, preview, description }) => { 
    return`
    <li class="gallery__item">
    
    <a
      class="gallery__link"
      href="${original}"
    >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
  </li>
  `})
  .join('');

// Работа с модальным окном

function setModalPicture(event) {
  if (event.target.nodeName !== 'IMG') {
    return
  };
  
  event.preventDefault();
  galleryModalContent.setAttribute('src', event.target.dataset.source);
  galleryModalContent.setAttribute('alt', event.target.getAttribute('alt'));
  galleryModal.classList.add('is-open');
};

function modalClose() {
  galleryModal.classList.remove('is-open');
  galleryModalContent.setAttribute('src', '');
  galleryModalContent.setAttribute('alt', '');
};

galleryUl.addEventListener('click', setModalPicture);
galleryModalClose.addEventListener('click', modalClose);

