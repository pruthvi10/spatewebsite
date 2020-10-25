const slideshowImages = document.querySelectorAll(".intro .slideshow-img");
const nextImageDelay = 3000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  //   slideshowImages[currentImageCounter].style.opacity = 0;
  const tempCounter = currentImageCounter;
  setTimeout(() => {
    slideshowImages[tempCounter].style.opacity = 0;
  }, 1000);
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
}
