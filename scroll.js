/* 스크롤 이벤트 처리 */
function handleScroll() {
  const elements = document.querySelectorAll(".animated-element");
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementPosition < screenHeight * 0.8) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    } else {
      element.style.opacity = "0";
      element.style.transform = "translateY(100px)";
    }
  });
}

// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", handleScroll);

// 초기 로딩 시 한번 실행 (화면이 바로 20% 이상 보이는 경우 대비)
const leftTextDiv = document.getElementById("section1_left_img_div");
const rightTextDiv = document.getElementById("right_text_div");

let scrollPos = 0;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;
  const minWidthThreshold = 1280;
  if (window.innerWidth >= minWidthThreshold) {
    if (currentScrollPos > scrollPos) {
      // Scroll down
      leftTextDiv.style.transform = "translateY(0%)";
      rightTextDiv.style.transform = "translateY(60%)";
    } else {
      // Scroll up
      leftTextDiv.style.transform = "translateY(60%)";
      rightTextDiv.style.transform = "translateY(0%)";
    }

    scrollPos = currentScrollPos;
  }
});
//
// window.addEventListener("wheel", () => {
//   let wheeler = window.scrollY;
//   if(wheeler > 100){
//     wheeler ==100
//   }
// });
//
// 클래스없애기

// let observer = new IntersectionObserver((e)=>{
//   e.forEach((e)=>{
//     if(e.isIntersecting){
//       e.target.style.position = 'fixed';
//       e.target.style.top = '0';
//     }
//     e.intersectionRatio
//   })
// })
// let divv = document.querySelectorAll('.right_bg')
// observer.observe(divv[0])
// observer.observe(divv[1])
// observer.observe(divv[2])

// Intersection Observer 콜백 함수 정의

//

// window.addEventListener("scroll", () => {
//   let scrll = window.scrollY;

//   let first = document.querySelector("#div_first");
//   let second = document.querySelector("#div_second");
//   let third = document.querySelector("#div_third");

//   // 초기 상태로 되돌리기 위한 스크롤 범위 지정
//   const resetScrollRange = 2900;

//   // 첫 번째 영역 (div_first)
//   const firstStart = 0
//   const firstEnd = window.innerHeight * 0.98;

//   // 두 번째 영역 (div_second)
//   const secondStart = firstEnd;
//   const secondEnd = secondStart + window.innerHeight * 0.98;
// console.log(window)
//   // 세 번째 영역 (div_third)
//   const thirdStart = secondEnd;

//   if (scrll >= firstStart && scrll < firstEnd) {
//     // div_first 영역이 98% 들어왔을 때
//     first.style.position = "fixed";
//     first.style.top = "0";
//     first.style.zIndex = "1";
//     second.style.zIndex = "0";
//   } else if (scrll >= secondStart && scrll < secondEnd) {
//     // div_second 영역이 98% 들어왔을 때
//     first.style.position = "absolute";
//     first.style.zIndex = "0";
//     third.style.zIndex = "1";
//     second.style.position = "fixed";
//     second.style.top = "0";
//     second.style.zIndex = "2";
//   } else if (scrll >= thirdStart) {
//     // div_third 영역이 98% 들어왔을 때
//     second.style.position = "absolute";
//     second.style.zIndex = "0";
//     third.style.position = "fixed";
//     third.style.top = "0";
//     third.style.zIndex = "3";
//   } else {
//     // 나머지 상황
//     first.style.zIndex = "3";
//     second.style.zIndex = "2";
//     third.style.zIndex = "1";
//     first.style.position = "absolute";
//     second.style.position = "absolute";
//     third.style.position = "absolute";
//   }
// });

// 가로 1280px
window.addEventListener("scroll", () => {
  let scrll = window.scrollY;
  console.log(scrll);

  let first = document.querySelector("#div_first");
  let second = document.querySelector("#div_second");
  let third = document.querySelector("#div_third");

  // 초기 상태로 되돌리기 위한 스크롤 범위 지정
  const resetScrollRange = 2900;

  if (window.innerWidth >= 1280) {
    // 부드러운 효과를 위한 transition 추가
    first.style.transition = "position 0.3s ease";
    second.style.transition = "position 0.3s ease";
    third.style.transition = "position 0.3s ease";

    if (0 < scrll < 2859 || 4911 < scrll) {
      first.style.position = "absolute";
    }
    if (scrll >= 2676 && scrll < 3418) {
      first.style.position = "fixed";
      first.style.top = "0";
      first.style.zIndex = "1";
      second.style.zIndex = "0";
      third.style.zIndex = "0";
    } else if (scrll >= 3418 && scrll < 4178) {
      first.style.position = "absolute";
      first.style.zIndex = "0";
      third.style.zIndex = "1";
      second.style.position = "fixed";
      second.style.top = "0";
      second.style.zIndex = "2";
    } else if (scrll >= 4178 && scrll < 4911) {
      second.style.position = "absolute";
      second.style.zIndex = "0";
      third.style.position = "fixed";
      third.style.top = "0";
      third.style.zIndex = "3";
    } else {
      first.style.zIndex = "3";
      second.style.zIndex = "2";
      third.style.zIndex = "1";
      first.style.position = "absolute";
      second.style.position = "absolute";
      third.style.position = "absolute";
    }
  }
});

// 가로 해상도가 900에서 1000 사이인 경우에만 실행

window.addEventListener("scroll", () => {
  let scrll = window.scrollY;
  console.log(scrll);

  let first = document.querySelector("#div_first");
  let second = document.querySelector("#div_second");
  let third = document.querySelector("#div_third");

  // 초기 상태로 되돌리기 위한 스크롤 범위 지정
  const resetScrollRange = 2900;

  if (window.innerWidth >= 900 && window.innerWidth <= 1000) {
    if (0 < scrll < 3134 || 5200 < scrll) {
      first.style.transition = "position 0.3s ease";
      first.style.position = "absolute";
    }
    if (scrll >= 3175 && scrll < 3661) {
      first.style.transition = "position 0.3s ease";
      first.style.position = "fixed";
      first.style.top = "0";
      first.style.zIndex = "1";
      second.style.zIndex = "0";
    } else if (scrll >= 3661 && scrll < 4476) {
      first.style.transition = "position 0.3s ease";
      first.style.position = "absolute";
      first.style.zIndex = "0";
      third.style.zIndex = "1";
      second.style.transition = "position 0.3s ease";
      second.style.position = "fixed";
      second.style.top = "0";
      second.style.zIndex = "2";
    } else if (scrll >= 4476 && scrll < 4776) {
      second.style.transition = "position 0.3s ease";
      second.style.position = "absolute";
      second.style.zIndex = "0";
      third.style.transition = "position 0.3s ease";
      third.style.position = "fixed";
      third.style.top = "0";
      third.style.zIndex = "3";
    } else {
      first.style.transition = "position 0.3s ease";
      first.style.zIndex = "3";
      second.style.transition = "position 0.3s ease";
      second.style.zIndex = "2";
      third.style.transition = "position 0.3s ease";
      third.style.zIndex = "1";
      first.style.position = "absolute";
      second.style.position = "absolute";
      third.style.position = "absolute";
    }
  }
});
// 2900 3450 4300 5200first.style.position = "static";
// first.style.position = "sticky";
// first.style.top = "0";
// first.style.zIndex = "2"
