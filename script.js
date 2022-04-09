// var slides = [];
// var currentSlideIndex = 1;
// var currentSlide = document.getElementsByClassName("slider_active");
// currentSlide = currentSlide[0].id;
// var sliderItem = document.querySelectorAll(".slider-list-item");

// for (let i = 0; i < sliderItem.length; i++) {
//   slides.push(sliderItem[i].dataset.slide);
//   sliderItem[i].addEventListener("click", function () {
//     document.getElementById(currentSlide).classList = "slider_item";
//     document.getElementById(this.dataset.slide).classList += " slider_active";
//     defaultClass("slider-list-item");
//     this.classList += " slide_active_thumb";
//     currentSlide = this.dataset.slide;
//     currentSlideIndex = slides.indexOf(currentSlide);
//   });
// }
// function defaultClass(className) {
//   var elements = document.getElementsByClassName(className);
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].classList = className;
//   }
// }
// setInterval(slideAuto, 3500);
// function slideAuto() {
//   defaultClass("slider-list-item");
//   document.getElementById(currentSlide).classList = "slider_item";
//   document.getElementById(slides[currentSlideIndex]).classList +=
//     " slider_active";
//   var currThumb = document.querySelectorAll(
//     "[data-slide='" + slides[currentSlideIndex] + "']"
//   );
//   currThumb[0].classList += " slide_active_thumb";
//   console.log(currThumb[0]);
//   currentSlide = slides[currentSlideIndex];
//   currentSlideIndex++;
//   console.log(currentSlide);
//   if (currentSlideIndex == slides.length) {
//     currentSlideIndex = 0;
//   }
// }
var index = 0;
var mainSlide = document.querySelectorAll(".slider_item");
var currentSlide = document.getElementsByClassName("slider_active");
currentSlide = currentSlide[0].id;
var sliderItem = document.querySelectorAll(".slider-list-item");
sliderItem.forEach((sliderList) => {
  sliderList.addEventListener("click", (e) => {
    console.log(e.target);
    let li = e.originalTarget.parentNode;
    index = Array.from(sliderItem).indexOf(li);
    autoSlide();
    //console.log(e);
    // document.getElementById(currentSlide).classList = "slider_item";
    // currentSlide = sliderList.dataset.slide;
    // document.getElementById(currentSlide).classList += " slider_active";
    // document.getElementsByClassName("slide_active_thumb")[0].classList =
    //   "slider-list-item";
    // sliderList.classList += " slide_active_thumb";
  });
});
setInterval(autoSlide, 3500);
function autoSlide() {
  // mainSlide.forEach((sliderItem) => {
  //   sliderItem.classList = "slider_item";
  // });
  mainSlide[index].classList = "slider_item slider_active";
  if (typeof mainSlide[index - 1] !== "undefined") {
    mainSlide[index - 1].classList = "slider_item";
  } else {
    mainSlide[mainSlide.length - 1].classList = "slider_item";
  }
  index == mainSlide.length - 1 ? (index = 0) : index++;
}
