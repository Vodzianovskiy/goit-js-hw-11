import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import api from './js/pixabay-api.js';
import render from './js/render-functions.js';

const formRef = document.querySelector('.form');
const inputRef = document.querySelector('input[name="search-text"]');

formRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  const query = inputRef.value.trim();
  if (!query) {
    iziToast.error({ 
      message: 'Please enter a search query!' 
    });
    return;
  }

  render.clearGallery();
  render.showLoader();
  inputRef.value = '';

  api.getImagesByQuery(query)
    .then(data => {
      render.hideLoader();
      
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        return;
      }
      
      render.createGallery(data.hits);
      iziToast.success({ 
        message: `Hooray! We found ${data.hits.length} images.` 
      });
    })
    .catch(error => {
      render.hideLoader();
      iziToast.error({ message: 'Oops, something went wrong!' });
    });
}
