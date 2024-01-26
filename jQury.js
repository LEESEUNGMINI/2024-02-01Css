document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('.section');
    var section3 = document.getElementById('section3');

    function handleScroll() {
      var scrollPosition = window.scrollY;

      sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          var progress = (scrollPosition - sectionTop) / (sectionBottom - sectionTop);
          section.querySelector('.left-content').style.transform = 'translateY(' + (100 - progress * 100) + '%)';
          section.querySelector('.right-bg').style.transform = 'translateY(' + (-progress * 100) + '%)';
        }
      });

      // 섹션3에 도달하면 전체 섹션 숨기기
      if (scrollPosition >= section3.offsetTop) {
        sections.forEach(function(section) {
          section.style.transform = 'translateY(-100%)';
        });
      }
    }

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 페이지 로딩 시 한 번 호출하여 초기 상태 설정
    handleScroll();
  });