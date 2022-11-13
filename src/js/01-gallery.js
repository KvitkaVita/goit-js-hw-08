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

new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});

