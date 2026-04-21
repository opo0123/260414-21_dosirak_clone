window.addEventListener("load", () => {
  // 비주얼 슬라이드
  // 1. 슬라이드 갯수만큼 li 생성
  const swSlideCount = document.querySelectorAll(
    ".sw-visual .swiper-slide",
  ).length;
  // console.log(swSlideCount); // length(속성) 갯수 찍힘

  // 2. li태그 출력 장소(ul) 지정
  const swSlideUl = document.querySelector(".sw-visual-pg-list");
  // console.log(swSlideCount); // ul 찍힘

  // 3. li에 html로 작성할 글자 생성 (1, 2, 3, 4)
  let swVisualHtml = ``; // 공백
  for (let i = 0; i < swSlideCount; i++) {
    swVisualHtml = swVisualHtml + `<li>${i + 1}</li>`; // 재할당
    // console.log(swVisualHtml);

    // 4. swVisualHtml을 ul에 추가
    swSlideUl.innerHTML = swVisualHtml;
  }

  // 5. 페이지네이션 관련 (코딩으로 생성한 li태그 저장)
  const swVisualPgLi = document.querySelectorAll(".sw-visual-pg-list li");
  // console.log(swVisualPgLi);

  // 슬라이드 효과
  const swVisual = new Swiper(".sw-visual", {
    effect: "fade",
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1500,
    autoplay: {
      delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplay 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },

    // 네비게이션
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });

  // 페이지네이션
  // 1. li의 흰색 라인이 늘어나는 모션 실행
  swVisualPgLi[0].classList.add("active"); // 0 = index 번호

  // swiper가 바뀔 때마다 실행 - 슬라이더가 바뀔 때마다 해당 li의 active 실행
  swVisual.on("slideChange", () => {
    // console.log(swVisual.realIndex);
    swVisualPgLi.forEach((item, index) => {
      //  console.log(item, index);  // item - 요소(li) , index - 번호
      if (swVisual.realIndex === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });

  // li 클릭 시 해당 슬라이드로 변경
  swVisualPgLi.forEach((item, index) => {
    item.addEventListener("click", () => {
      // slideToLoop() - 원하는 페이지로 보내기 가능
      swVisual.slideToLoop(index, 500, false);
    });
  });
});
