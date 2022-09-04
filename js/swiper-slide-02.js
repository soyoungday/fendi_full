
      var swiper = new Swiper(".mySwiper-02", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination-02",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next-02",
          prevEl: ".swiper-button-prev-02",
        },
      });
