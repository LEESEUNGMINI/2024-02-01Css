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
