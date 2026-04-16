window.addEventListener("load", () => {
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mb-btn");
  const navMb = document.querySelector(".nav-mb");
  let scy = 0;

  // 스크롤 될 때
  window.addEventListener("scroll", () => {
    // 1. 스크롤바의 px 위치값 파악
    scy = window.document.documentElement.scrollTop;
    // 2. active 적용 조건
    if (scy > 0) {
      header.classList.add("active");
      mbt.classList.add("active");
    } else {
      header.classList.remove("active");
      mbt.classList.remove("active");
    }
  });

  // 모바일 메뉴 클릭 시
  const htmlRoot = document.querySelector("html"); // html 전체 담기
  mbt.addEventListener("click", () => {
    // contains("클래스") = 현재 "클래스" 유무 확인 (true/false)
    const state = mbt.classList.contains("ani");

    // "ani"가 있으면 ...
    if (state) {
      mbt.classList.remove("ani");
      navMb.classList.remove("active");
      header.classList.remove("active");
      // window 스크롤바 표시
      htmlRoot.classList.remove("active");
    } else {
      mbt.classList.add("ani");
      navMb.classList.add("active");
      header.classList.add("active");
      // window 스크롤바 삭제
      htmlRoot.classList.add("active");
    }
  });

  // 반응형 처리 (mobile -> pc 전환될 때) - 모바일 메뉴창 삭제 (초기화)
  window.addEventListener("resize", () => {
    let winW = window.innerWidth;
    if (winW > 1024) {
      mbt.classList.remove("ani");
      navMb.classList.remove("active");
      htmlRoot.classList.remove("active");

      // 스크롤 된 상태에서 전환 시..
      if (scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
      } else {
        header.classList.remove("active");
        mbt.classList.remove("active");
      }
    }
  });
});
