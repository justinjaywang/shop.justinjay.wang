// lazy load
var initLazyLoad = function () {
  var lazy = new Blazy({
    selector: '.js-lazy',
    successClass: 'js-lazy-loaded',
    success: function(element) {
      setTimeout(function() {
        element.classList.add('js-post-lazy-loaded');
      }, 1);
    },
    errorClass: 'js-lazy-error',
    loadInvisible: true
  });
  lazy.load(
    document.querySelectorAll('.js-manual-lazy') // force load these ones
  );
};

// showcase
var initShowcase = function () {
  var el = document.querySelector('.js-showcase');
  if (!el) return;
  var flickity = new Flickity(el, {
    cellSelector: '.js-showcase-item',
    wrapAround: true,
    prevNextButtons: false,
    pageDots: true,
    autoPlay: 3000,
    selectedAttraction: 0.15,
    friction: 0.72,
    percentPosition: true
  });
  // flickity.on('change', function () {
  //   setShowcaseCaption(flickity.selectedIndex);
  // });
  flickity.on('staticClick', function() {
    flickity.next();
  });
};
// var setShowcaseCaption = function (i) {
//   var captionEls = document.querySelectorAll('.js-showcase-caption');
//   for (j=0; j<captionEls.length; j++) {
//     captionEls[j].classList.remove('showcase-caption--active');
//   }
//   captionEls[i].classList.add('showcase-caption--active');
// };

document.addEventListener('DOMContentLoaded', function () {

  document.body.classList.add('js');
  initLazyLoad(); // initialize lazy load
  initShowcase(); // initialize showcase on home page

});
