import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const ulGallery = document.querySelector(".gallery");
console.log(ulGallery);

function createGallary(elements) {
  return elements
    .map(
      (el) => `
  <li class='gallery__item>
    <a class = 'gallery__link' href ='${el.original}'>
      <img
      class='gallery__image'
        src='${el.preview}'        
        alt='${el.description}'
      />
    </a>
  </li> 
  `
    )
    .join("");
}

const liGallery = createGallary(galleryItems);

ulGallery.innerHTML = liGallery;

let lightbox = new SimpleLightbox({
  elements: document.querySelectorAll("li"),
  captions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
});
