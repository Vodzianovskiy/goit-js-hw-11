import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
}); 

export default {
  createGallery(images) {
    const markup = images.hits
      .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <a href="${largeImageURL}">
          <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item">Likes <span>${likes}</span></p>
              <p class="info-item">Views<span>${views}</span></p>
              <p class="info-item">Comments <span>${comments}</span></p>
              <p class="info-item">Downloads<span>${downloads}</span></p>
            </div>
          </div>
        </a>
      `)
      .join(''); 

    galleryRef.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  },

  clearGallery() {
    galleryRef.innerHTML = '';
  },

  showLoader() {
    document.body.classList.add('loading'); 
  },

  hideLoader() {
    document.body.classList.remove('loading');
  },
};
