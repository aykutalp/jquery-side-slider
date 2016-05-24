// Scripts.js
$(function() {

  var $slider = $('#slider');
  var $slideContainer =  $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  var width = $slider.width();
  var animSpeed = 1000;
  var animPause = 2500;
  var currentSlide = 1;

  var interval;

  function startSlider(){
    interval = setInterval(function(){
      $slideContainer.animate({'margin-left': '-=' + width}, animSpeed, function(){
        currentSlide++;
        if (currentSlide == $slides.length){
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, animPause);
  }

  function stopSlider(){
    clearInterval(interval);
  }

  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
  startSlider();

});
