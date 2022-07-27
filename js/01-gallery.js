import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const palettContainer = document.querySelector('.gallery');

const cardsMarkup = createColorCardsMarkup(galleryItems);

palettContainer.insertAdjacentHTML('beforeend', cardsMarkup);

palettContainer.addEventListener('click', onPalettrContainerClick);

// Эта фунция отвечает за созание разметки
function createColorCardsMarkup (galleryItems) { 
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

    const refs = {
        openModalBtn: document.querySelector('.gallery__link'),
        closeModalBtn: document.querySelector('.gallery__image'),
        backdrop: document.querySelector('.gallery__item'),
    };
    
    refs.openModalBtn.addEventListener('click', onOpenModal);
    refs. closeModalBtn.addEventListener('click', onCloseModal);
    refs.backdrop.addEventListener('click', onBackdropClick);


    function onOpenModal () {
        window.addEventListener('click', onClickPress );
        document.body.classList.add('show-modal');
    }
    
    function onCloseModal () {
        window.removeEventListener('click', onClickPress );
        document.body.classList.remove('show-modal');
    }
    
    function onBackdropClick(event) {
        console.log('Клик по backdrop')
        console.log(event.currentTarget)
        console.log(event.target);
    
        if (event.currentTarget === event.target) {
            console.log('Кликнули именно в бекдроп!!!')
            onCloseModal();
        }
    }
    
    function onClickPress (event) {
    console.log(event.code);
    const ESC_KEY_CODE = 'click';
    const isEscKey = event.code === ESC_KEY_CODE
    
    if (isEscKey ){
    onCloseModal();
    }
    }
    