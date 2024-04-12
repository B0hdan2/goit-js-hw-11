// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// img
import error from './img/group.svg';

import { formEl, galleryList } from './js/refs';
import { requestToServer } from './js/pixabay-api';
import { renderCard } from './js/render-functions';

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  galleryList.innerHTML = '';

  const inputValue = event.currentTarget.elements.search.value.trim();

  requestToServer(inputValue)
    .then(response => {
      if (inputValue === '' || response.hits.length === 0) {
        return iziToast.error({
          iconUrl: error,

          message: `Sorry, there are no images matching<br> your search query. Please try again!`,
          messageHTML: true,
          messageColor: '#fff',
          messageSize: '16px',

          backgroundColor: '#ef4040',

          position: 'topRight',

          transitionIn: 'fadeInLeft',
        });
      }

      galleryList.innerHTML = renderCard(response.hits);

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(error => console.log(error));
}
