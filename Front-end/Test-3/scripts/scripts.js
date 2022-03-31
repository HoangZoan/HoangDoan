"use strict";

const heroSliderConfig = {
  slidesContainerClass: "sliders",
  slideClass: "sliders__item",
  dotsClass: "sliders__dots",
  dotClass: "sliders__dots__item",
  direction: "Y",
  firstSlide: 0,
  autoPlay: {
    status: true,
    timeout: 2500,
  },
};

const sliderZengerater = (config) => {
  const slidesContainer = document.querySelector(
    `.${config.slidesContainerClass}`
  );
  const slides = document.querySelectorAll(`.${config.slideClass}`);
  const dots = document.querySelector(`.${config.dotsClass}`);
  const maxSlide = slides.length;

  // Render dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dots.insertAdjacentHTML(
        "beforeend",
        `<button class="${config.dotClass}" data-slide="${i}"></button>`
      );
    });
  };

  // Active dot handler
  const activateDot = function (slide) {
    document
      .querySelectorAll(`.${config.dotClass}`)
      .forEach((dot) => dot.classList.remove(`${config.dotClass}--active`));

    document
      .querySelector(`.${config.dotClass}[data-slide="${slide}"]`)
      .classList.add(`${config.dotClass}--active`);
  };

  // Go to the slide
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) =>
        (s.style.transform = `translate${config.direction || "X"}(${
          100 * (i - slide)
        }%)`)
    );
    activateDot(slide);
  };

  // Dot click event handler
  dots.addEventListener("click", (event) => {
    const dotEl = event.target.closest(`.${config.dotClass}`);
    if (!dotEl) return;

    const slideIndex = dotEl.dataset.slide;
    goToSlide(slideIndex);
  });

  // Initialize
  slidesContainer.style.overflow = "hidden";
  createDots();
  goToSlide(config.firstSlide || 0);

  // Autoplay
  if (config.autoPlay.status) {
    let time = 0;

    setInterval(() => {
      if (time >= maxSlide) {
        time = 0;
      }

      goToSlide(time);
      time++;
    }, config.autoPlay.timeout);
  }
};

sliderZengerater(heroSliderConfig);
