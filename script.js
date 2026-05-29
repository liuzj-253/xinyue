// 这个文件负责把 data.js 里的内容显示到网页上，平时不用修改。

const dailyDate = document.querySelector("#daily-date");
const dailyTitle = document.querySelector("#daily-title");
const dailyText = document.querySelector("#daily-text");
const dailyImages = document.querySelector("#daily-images");
const gallery = document.querySelector("#gallery");
const notes = document.querySelector("#notes");
const lightbox = document.querySelector("#photo-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector("#lightbox-close");

function createPhotoCard(image, title = "小心悦的日常", tag = "可爱瞬间") {
  const card = document.createElement("figure");
  card.className = "photo-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `查看大图：${title}`);
  card.dataset.image = image;
  card.dataset.title = title;

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;

  const caption = document.createElement("figcaption");
  caption.className = "photo-tag";
  caption.textContent = tag;

  card.append(img, caption);
  return card;
}

function openLightbox(image, title) {
  lightboxImage.src = image;
  lightboxImage.alt = title;
  lightboxCaption.textContent = title;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = "";
}

function setupLightbox() {
  document.addEventListener("click", (event) => {
    const card = event.target.closest(".photo-card");
    if (card) {
      openLightbox(card.dataset.image, card.dataset.title);
      return;
    }

    if (event.target === lightbox || event.target === lightboxClose) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    const card = event.target.closest?.(".photo-card");
    if (card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openLightbox(card.dataset.image, card.dataset.title);
    }

    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function renderToday() {
  dailyDate.textContent = siteData.today.date;
  dailyTitle.textContent = siteData.today.title;
  dailyText.textContent = siteData.today.text;

  dailyImages.innerHTML = "";
  siteData.today.images.slice(0, 3).forEach((image, index) => {
    dailyImages.append(createPhotoCard(image, `${siteData.today.title} ${index + 1}`, `今日 ${index + 1}`));
  });
}

function renderGallery() {
  gallery.innerHTML = "";
  siteData.gallery.forEach((item) => {
    gallery.append(createPhotoCard(item.image, item.title, item.tag));
  });
}

function renderNotes() {
  notes.innerHTML = "";
  siteData.notes.forEach((item, index) => {
    const note = document.createElement("article");
    note.className = "note-card";
    note.style.setProperty("--tilt", `${[-1.5, 1.2, -0.6][index % 3]}deg`);
    note.innerHTML = `<strong>${item.title}</strong><p>${item.text}</p>`;
    notes.append(note);
  });
}

renderToday();
renderGallery();
renderNotes();
setupLightbox();
