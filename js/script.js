var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
        triggerTabList.forEach(function (triggerEl) {
        var tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
  })
})
$('.banner-slide').slick({
  arrows: true,
  autoplay:true,
  autoplaySpeed:4000,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  pauseOnHover:false,
  slidesToScroll: 1,
})

// slick-slider
$('.on-sale').slick({
  arrows: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  fade: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
})
$('.slick-blog').slick({
  arrows: false,
  infinite: false,
  speed: 800,
  fadeup: true,
  slidesToShow: 3,
  pauseOnHover:false,
  dots: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})
$('.brand').slick({
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 5,
  pauseOnHover:false,
  slidesToScroll: 1,
})
// product-full-image
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: '0',
  focusOnSelect: true
});
// spcial product
$('.special').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  infinate: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover:false,
  margin: 20,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
        loop: true,
        autoplay: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
 // scrollTop
 var btn = $('#back-to-top');

 $(window).scroll(function() {
   if ($(window).scrollTop() > 300) {
     btn.addClass('show');
   } else {
     btn.removeClass('show');
   }
 });
// top-to-back
 btn.on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({scrollTop:0}, '300');
 });

// })(jQuery, window, document);
// Range use
function getVals(){
  // Get slider values
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat( slides[0].value );
    let slide2 = parseFloat( slides[1].value );
  // Neither slider will clip the other, so make sure we determine which is larger
  if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
  
  let displayElement = parent.getElementsByClassName("rangeValues")[0];
      displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
}

window.onload = function(){
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName("range-slider");
      for( let x = 0; x < sliderSections.length; x++ ){
        let sliders = sliderSections[x].getElementsByTagName("input");
        for( let y = 0; y < sliders.length; y++ ){
          if( sliders[y].type ==="range" ){
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
          }
        }
      }
}






// product-quentity-button
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}