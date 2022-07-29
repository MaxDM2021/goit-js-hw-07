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
          // window.removeEventListener("keydown", onPressKeyESC);
        }
        }




      }
    
      }


   





  //   function onCloseOriginalImage (event) {
  //     window.removeEventListener('click', onClickPress );
  //     document.body.classList.remove('instanse__image');
  // }

 


    
    // function onBackdropClick(event) {
    //     console.log('Клик по backdrop')
    //     console.log(event.currentTarget)
    //     console.log(event.target);
    
    //     if (event.currentTarget === event.target) {
    //         console.log('Кликнули именно в бекдроп!!!')
    //         onCloseModal();
    //     }
    // }
    
    // function onClickPress (event) {
    // console.log(event.code);
    // const ESC_KEY_CODE = 'click';
    // // const isEscKey = event.code === ESC_KEY_CODE
    
    // if (ESC_KEY_CODE){
    // onCloseModal();
    // }
    // }
    
// ========================================


// const modal = basicLightbox.create(`<img src="${galleryItems.original} width="800" height="600">`);
// modal.show;

// if(modal.visile()) {
// window.addEventListener("keydown", onPressKeyESC);
// window.addEventListener('click', mouseClick);
// }


// function onPressKeyESC(evt) {
//   if(evt.code ==='Escape'){
//   modal.close();
//   window.removeEventListener("keydown", onPressKeyESC);
// }
// }

// function mouseClick(evt){
//   if(evt.cod === 'click'){
//   modal.close();
//   window.removeEventListener('click', mouseClick);
//   }
// }














// =========================================


//     const gallery = document.querySelector('.gallary');

// const template = ({preview, original, description}) => 
// ` <div class="gallery__item">
// <a class="gallery__link" href="${original}">
// <img
// class="gallery__image"
// src="${preview}"
// alt="${description}"
// />
// </a>
// </div>`;

// const render = (array) => {
//   const items = array.reduce((acc, item) => (acc += template(item)));
//   gallery.innerHTML(items);

// };

// render(galleryItems);

// new SimpleLightbox('.gallery a', {
//   captionDelay: 100,
//   captionData: "alt",
// })
