import { galleryItems } from "./gallery-items.js";

const palettContainer = document.querySelector(".gallery");
const cardsMarkup = createImageCardsMarkup(galleryItems);
palettContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// Эта фунция отвечает за созание разметки

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
    `;
    })
    .join("");
}

// обьявление "SimpleLightbox"

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
