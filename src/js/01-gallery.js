import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
const gallery = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `
        <div class ="gallery__item">
                <a class="gallery__link" href="${original}">
               <img class="gallery__image" 
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
                </a>
                </div>
        `
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightBox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});

// console.log(galleryMarkup)
// let instance = '';
// gallery.addEventListener('click', onImageClick);
// function onImageClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   instance = SimpleLightbox.create(`<img src=${event.target.dataset.source}>`);
//   instance.show();
//   document.addEventListener('keydown', onModalCloseToEscape);
// }
// function onModalCloseToEscape(evt) {
//   if (evt.code === 'Escape') {
//     instance.close();
//     document.removeEventListener('keydown', onModalCloseToEscape);
//   }
// }
