(function () {
  "use strict";

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }

  /**
   * Main Swiper Slider
   */
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
      new Swiper(".brand-slider", {
        loop: true,
        speed: 600,
       autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 5,
          },
        },
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
      new Swiper(".client-slider", {
        loop: true,
        speed: 600,
       autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 5,
          },
        },
      });
    }
  });

})();