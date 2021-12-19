import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeImage = ({ original, preview, description } = {}) => (`
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
`);

const app = () => {
  let currentModalHandler;

  const openImageModal = function (url, alt) {
    const instance = basicLightbox.create(`<img src="${url}" alt="${alt}">`);
    instance.show();

    if (instance.visible()) {
      currentModalHandler = closeModalHandler.bind(instance);
      window.addEventListener('keyup', currentModalHandler);
    }
  };

  const closeModalHandler = function (evt) {
    if (evt.key === 'Escape') {
      this.close();
      window.removeEventListener('keyup', currentModalHandler);
    }
  };

  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = galleryItems.map(makeImage).join('\n');
  gallery.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.classList.contains('gallery__image')) {
      const fullImageUrl = evt.target.dataset.source;
      const alt = evt.target.getAttribute('alt');
      openImageModal(fullImageUrl, alt);
    }
  });
};

app();
