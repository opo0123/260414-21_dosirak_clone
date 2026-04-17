window.addEventListener("load", () => {
  const swBusiness = new Swiper(".sw-business", {
    slidesPerView: 1, // swiper 기본(mobile - 1개만 보임)

    // spaceBetween: 20, // slide 간격 (gap)

    breakpoints: {
      // 640 이후
      640: {
        slidesPerView: 2,
      },
    },

    breakpoints: {
      //1024 이후
      1024: { slidesPerView: 3 },
    },
  });
});
