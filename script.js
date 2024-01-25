document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.style.right = mobileMenu.style.right === "0%" ? "-100%" : "0%";
  });
});

// X //

document.addEventListener("DOMContentLoaded", function () {
  const meToggle = document.getElementById("menu");
  const bileMenu = document.getElementById("mobileMenu");

  meToggle.addEventListener("click", function () {
    bileMenu.style.right = bileMenu.style.right === "0%" ? "-100%" : "0%";
  });
});

const pick = document.getElementById("input1");
const oppep = document.getElementById("open_ul");
const inputa = document.getElementById("inputa");
const a1 = document.getElementById("a1");

pick.addEventListener("change", function () {
  if (pick.checked) {
    oppep.style.height = "150px";
    inputa.innerHTML = '<i class="fa-solid fa-minus"></i>';
    a1.style.color = "#107AF2";
  } else {
    oppep.style.height = "0px";
    inputa.innerHTML = "<i class='fa-solid fa-plus'></i>";
    a1.style.color = "black";
  }
});

const pickk = document.getElementById("input2");
const oppepp = document.getElementById("open_ul1");
const inputaa = document.getElementById("inputb");
const a2 = document.getElementById("a2");

pickk.addEventListener("change", function () {
  if (pickk.checked) {
    oppepp.style.height = "50px";
    inputaa.innerHTML = '<i class="fa-solid fa-minus"></i>';
    a2.style.color = "#107AF2";
  } else {
    oppepp.style.height = "0";
    inputaa.innerHTML = "<i class='fa-solid fa-plus'></i>";
    a2.style.color = "black";
  }
});

const pickkk = document.getElementById("input3");
const oppeppp = document.getElementById("open_ul2");
const inputaaa = document.getElementById("inputc");
const a3 = document.getElementById("a3");

pickkk.addEventListener("change", function () {
  if (pickkk.checked) {
    oppeppp.style.height = "50px";
    inputaaa.innerHTML = '<i class="fa-solid fa-minus"></i>';
    a3.style.color = "#107AF2";
  } else {
    oppeppp.style.height = "0";
    inputaaa.innerHTML = "<i class='fa-solid fa-plus'></i>";
    a3.style.color = "black";
  }
});

const pickkkk = document.getElementById("input4");
const oppepppp = document.getElementById("open_ul3");
const inputaaaa = document.getElementById("inputd");
const a4 = document.getElementById("a4");

pickkkk.addEventListener("change", function () {
  if (pickkkk.checked) {
    oppepppp.style.height = "50px";
    inputaaaa.innerHTML = '<i class="fa-solid fa-minus"></i>';
    a4.style.color = "#107AF2";
  } else {
    oppepppp.style.height = "0";
    inputaaaa.innerHTML = "<i class='fa-solid fa-plus'></i>";
    a4.style.color = "black";
  }
});
const pickkkkk = document.getElementById("input5");
const oppeppppp = document.getElementById("open_ul4");
const inputaaaaa = document.getElementById("inpute");
const a5 = document.getElementById("a5");

pickkkkk.addEventListener("change", function () {
  if (pickkkkk.checked) {
    oppeppppp.style.height = "170px";
    inputaaaaa.innerHTML = '<i class="fa-solid fa-minus"></i>';
    a5.style.color = "#107AF2";
  } else {
    oppeppppp.style.height = "0";
    inputaaaaa.innerHTML = "<i class='fa-solid fa-plus'></i>";
    a5.style.color = "black";
  }
});
// ㅋㅋ
