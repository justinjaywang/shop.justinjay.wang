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
  })
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
    autoPlay: false,
    selectedAttraction: 0.15,
    friction: 0.72,
    percentPosition: true
  });
  flickity.on('staticClick', function() {
    flickity.next();
  });
};

document.addEventListener('DOMContentLoaded', function () {

  document.body.classList.add('js');
  initLazyLoad(); // initialize lazy load
  initShowcase(); // initialize showcase on home page

});
