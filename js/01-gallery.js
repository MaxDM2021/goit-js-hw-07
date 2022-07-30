import { galleryItems } from './gallery-items.js';
// Change code below this line

const palettContainer = document.querySelector('.gallery');

const cardsMarkup = createImageCardsMarkup(galleryItems);

palettContainer.insertAdjacentHTML('beforeend', cardsMarkup);

palettContainer.addEventListener('click', onOpenOriginalImage);

// Эта фунция отвечает за созание разметки

function createImageCardsMarkup (galleryItems) { 
    return galleryItems.map(({preview, original, description}) => {
    return `
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
    `;
    }).join('');
    }

// Эта фунция отвечает за вызов basicLightbox

    function onOpenOriginalImage (event) {
      event.preventDefault();

      if (event.target.classList.contains('gallery__image')){
        let instanse = basicLightbox.create(
          `<img src= ${event.target.dataset.source} width="800" height="600">`,{
        onClose: instanse => {
          window.removeEventListener("keydown", onPressKeyESC);
        } });
        instanse.src = event.target.dataset.source
        instanse.show()
        window.addEventListener("keydown", onPressKeyESC, { once: true } );
        function onPressKeyESC(evt) {
          if(evt.code ==='Escape'){
            instanse.close();
        }
        }
        }
        }


   




