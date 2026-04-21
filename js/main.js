window.addEventListener("load", () => {
  // gotop
  // footer 상단 위치 px 파악
  let footer = document.querySelector(".footer");
  let footerY = footer.offsetTop; // footer의 top 위치 값
  let gotop = document.querySelector(".gotop");
  //   console.log(footerY); // 반응할 때마다 값이 달라짐

  // gotop 기본 설정 (눌렀을 때)
  gotop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavor: "smooth",
    });
  });

  // 높이가 95%일 때
  let waypointfooter = new Waypoint({
    element: document.querySelector(".footer"),
    handler: function (direction) {
      // 푸터에서 튕겨 올라감
      if (direction === "down") {
        gotop.classList.add("active-footer");
      } else {
        gotop.classList.remove("active-footer");
      }
      // console.log(direction);
    },
    offset: "95%", // Waypoint가 언제 실행될지 기준 위치 조정 (handler)
  });

  // scroll 위치가 service 영역에 위치하면 gotop이 보이게
  let waypointService = new Waypoint({
    element: document.querySelector(".service"),
    handler: function (direction) {
      if (direction === "down") {
        gotop.classList.add("active");
      } else {
        gotop.classList.remove("active");
      }
    },
    offset: "80%",
  });

  // 스크롤 애니메이션 라이브러리를 시작(초기화)
  AOS.init();
});
