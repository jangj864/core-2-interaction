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