import { galleryItems } from "./gallery-items.js";

// Change code below this line

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
        data-source='${el.original}'
        alt='${el.description}'
      />
    </a>
  </li> 
  `
    )
    .join("");
}

const liGallery = createGallary(galleryItems);
console.log(liGallery);

ulGallery.innerHTML = liGallery;

ulGallery.addEventListener("click", clickOnImg);

function clickOnImg(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  ulGallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
