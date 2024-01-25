let div = document.getElementById("slide_div2");

window.addEventListener("scroll", () => {
  let whell = window.scrollY;
  if (whell > 2335) {
    div.style.animation = "downAndUp 1s ease-out forwards ";
  } else {
    div.style.animation = "upAndDown 1s ease-out forwards";
  }
});
// 휠 이벤트
// window.addEventListener("wheel", () => {
//   let nav = document.getElementById("main_nav");
//   let well = window;
//   console.log(well);
// });
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  let whella = window.scrollY;

  if (whella > 200) {
    // whella가 400을 넘어갈 때의 처리
    if (prevScrollpos > currentScrollPos) {
      // 스크롤을 올릴 때
      document.getElementById("main_nav").style.animation =
        "Down 1s ease-out forwards";
      document.getElementById("main_nav").style.background =
        "rgba(255, 255, 255, 0.9)";
    } else {
      // 스크롤을 내릴 때
      document.getElementById("main_nav").style.animation =
        "Up 1s ease-out forwards";
      document.getElementById("main_nav").style.background =
        "rgba(255, 255, 255, 0.9)";
    }
  } else {
    // whella가 400 이하일 때의 처리
    document.getElementById("main_nav").style.animation = "";
    document.getElementById("main_nav").style.background =
      "rgba(255, 255, 255, 0)";
  }

  prevScrollpos = currentScrollPos;
};
// background: rgba(133, 133, 133, 0.5);
