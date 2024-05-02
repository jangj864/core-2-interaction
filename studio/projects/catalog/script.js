$(document).ready(function() {

  var $sky = $('.sky'),
      $ground = $('.ground'),
      $road = $('.road'),
      $roadObj = $('.road-object'),
      $roadObjL = $('.road-object.left'),
      $roadObjR = $('.road-object.right'),
      $shadow = $('.shadow'),
      $lines = $('.lines'),
      $car = $('.car'),
      $carBody = $('.car-body'),
      $mountain = $('.mountain');

  // Presets
  TweenMax.set($road, {
    rotationX: 30,
    transformPerspective: 120
  });
  TweenMax.set($roadObjL, {
    rotationY: '+=180'
  });
  TweenMax.set($shadow, {
    rotationX: 180
  });
  TweenMax.set($car, {
    xPercent: -50
  });

  // Car Animation
  TweenMax.to($carBody, 0.2, {
    yPercent: 2,
    yoyo: true,
    repeat: -1
  });

  // Road Animation Elements
  TweenMax.from($lines, 4, {
    yPercent: -100,
    repeat: -1,
    ease: Linear.easeNone
  });
  TweenMax.staggerFrom($roadObj, 4, {
    top: '10',
    ease: Power1.easeIn,
    scale: 0.3,
    repeat: -1
  }, 1);

  //Background Mountain Animation
  TweenMax.to($mountain, 50, {
    yPercent: -100,
    //xPercent: 50,
    scale: 1.5,
    ease: Linear.easeNone
  });

  // Keyboard Actions
  $(document).keydown(function(e) {
    if (e.keyCode === 37) {
      TweenMax.to($car, 0.33, {
        x: '-=40'
      });
    } else if (e.keyCode === 39) {
      TweenMax.to($car, 0.33, {
        x: '+=40'
      });
    } else if (e.keyCode === 38) {
      TweenMax.to($car, 0.25, {
        y: '-=10',
        scale: '-=0.035',
        onComplete: carPosY
      });
    } else if (e.keyCode === 40) {
      TweenMax.to($car, 0.25, {
        y: '+=10',
        scale: '+=0.035',
        onComplete: carPosY
      });
    }
  });

  function carPosY() {
    var pos = $('.car').position().top;
    if (pos < 0) {
      TweenMax.to($car, 0.01, {
        y: '+=10',
        scale: '+=0.035'
      });
      console.log('top limit reached');
    } else if (pos > 150) {
      TweenMax.to($car, 0.01, {
        y: '-=10',
        scale: '-=0.035'
      });
      console.log('bottom limit reached');
    }
  }
});

document.querySelector('.studio-btn.main').addEventListener('click', function() {
  // 기존 콘텐츠를 숨김
  $('#mainlogo').fadeOut(500);
  $('.buttons').fadeOut(500, function() {
    // 배경색 변경과 새 콘텐츠 표시
    document.body.style.backgroundColor = "#F0AE76";
    document.querySelector('.mountain').style.backgroundImage = "url('background_studio.png')";
    
    // 새 콘텐츠 표시
    $('#studio-content').fadeIn(500);
    
    // 차량의 속도 애니메이션 조정
    TweenMax.to('.car', 1, {
      scaleX: 1.1, // 차량의 속도를 시뮬레이션하기 위해 크기 조정
      ease: Power2.easeOut
    });

    // 스크롤을 이동하여 새로운 콘텐츠를 중앙에 위치시킵니다.
    $('html, body').animate({
      scrollTop: $("#studio-content").offset().top - 100
    }, 1000);
  });
});

document.querySelector('.lab-btn.main').addEventListener('click', function() {
  // 기존 콘텐츠 숨기기
  $('#mainlogo').fadeOut(500);
  $('.buttons').fadeOut(500, function() {
    // 배경색 변경과 새 배경 이미지 설정
    document.body.style.backgroundColor = "#009999";
    document.querySelector('.mountain').style.backgroundImage = "url('background_lab.png')";

    // 새 콘텐츠 표시
    $('#lab-content').fadeIn(500);
    
    // 차량 속도 애니메이션 조정
    TweenMax.to('.car', 1, {
      scaleX: 1.1, // 차량의 속도를 시뮬레이션하기 위해 크기 조정
      ease: Power2.easeOut
    });

    // 스크롤 이동
    $('html, body').animate({
      scrollTop: $("#lab-content").offset().top - 100
    }, 1000);
  });
});

// Home 버튼 이벤트 처리
document.querySelectorAll('.home-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    // 모든 컨텐츠를 숨깁니다.
    $('#studio-content, #lab-content').fadeOut(500, function() {
      // 메인 로고와 버튼들을 표시합니다.
      $('#mainlogo, .buttons').fadeIn(500);
    });

    // 초기 배경색 및 이미지 복원
    document.body.style.backgroundColor = "rgb(172, 255, 255)";
    document.querySelector('.mountain').style.backgroundImage = "url('original_background.png')";
  });
});

// LAB 버튼 이벤트 처리
document.querySelector('.lab-btn.right').addEventListener('click', function() {
  // studio-content를 숨기고 lab-content를 표시합니다.
  $('#studio-content').fadeOut(500, function() {
    $('#lab-content').fadeIn(500);
  });
});


// Home 버튼 클릭 이벤트
document.querySelectorAll('.home-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    $('#studio-content, #lab-content').fadeOut(500, function() {
      $('#mainlogo, .buttons').fadeIn(500);
    });
    document.body.style.backgroundColor = "rgb(172, 255, 255)";
    document.querySelector('.mountain').style.backgroundImage = "url('original_background.png')";
  });
});

// Studio 버튼 클릭 이벤트 (Lab에서 Studio로 전환)
document.querySelector('.studio-btn.right').addEventListener('click', function() {
  $('#lab-content').fadeOut(500, function() {
    $('#studio-content').fadeIn(500);
  });
});

$(document).ready(function() {
  // When LAB button in studio-content is clicked
  $('.lab-btn.right', '#studio-content').click(function() {
      $('#studio-content').fadeOut(500, function() {
          // Change background and mountain image to LAB specific
          $('body').css('background-color', '#009999');
          $('.mountain').css('background-image', 'url("background_lab.png")');
          $('#lab-content').fadeIn(500);
      });
  });

  // When STUDIO button in lab-content is clicked
  $('.studio-btn.right', '#lab-content').click(function() {
      $('#lab-content').fadeOut(500, function() {
          // Change background and mountain image to STUDIO specific
          $('body').css('background-color', '#F0AE76');
          $('.mountain').css('background-image', 'url("background_studio.png")');
          $('#studio-content').fadeIn(500);
      });
  });

  // Home button behavior (common to both STUDIO and LAB content)
  $('.home-btn').click(function() {
      $('#studio-content, #lab-content').fadeOut(500, function() {
          // Reset to main background and mountain image
          $('body').css('background-color', 'rgb(172, 255, 255)');
          $('.mountain').css('background-image', 'url("original_background.png")');
          $('#mainlogo, .buttons').fadeIn(500);
      });
  });
});
