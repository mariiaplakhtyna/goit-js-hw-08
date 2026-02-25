const images = [
  {
    preview:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400",
    original:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Forest",
  },
  {
    preview:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    original:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Mountains",
  },
];

const galleryEl = document.querySelector(".gallery");

const markup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});