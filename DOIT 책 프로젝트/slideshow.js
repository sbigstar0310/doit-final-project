var slides = document.querySelectorAll("#slides > img");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var currentSildeImgIndex = 0;

showSlide(currentSildeImgIndex);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function prevSlide() {
  if (currentSildeImgIndex === 0) {
    currentSildeImgIndex = slides.length - 1;
  } else {
    currentSildeImgIndex -= 1;
  }
  showSlide(currentSildeImgIndex);
}

function nextSlide() {
  if (currentSildeImgIndex === slides.length - 1) {
    currentSildeImgIndex = 0;
  } else {
    currentSildeImgIndex += 1;
  }
  showSlide(currentSildeImgIndex);
}
