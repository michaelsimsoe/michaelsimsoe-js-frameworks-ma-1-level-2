(function($) {
  $.fn.slideShow = function(options) {
    // Default options
    let settings = $.extend(
      {
        galleryClass: '',
        containerClass: '',
        innerContainerClass: '',
        buttonMenu: '',
        prevBtnClass: '',
        nextBtnClass: '',
        imageClass: ''
      },
      options
    );

    this.addClass('_slideshow-gallery');
    this.addClass(settings.galleryClass);
    this.find('img').addClass('_slideshow-gallery__image');
    this.find('._slideshow-gallery__image').addClass(settings.imageClass);
    $('._slideshow-gallery__image').wrapAll(
      `<div class='_slideshow-gallery__image-container-inner ${settings.innerContainerClass}'></div>`
    );
    $('._slideshow-gallery__image-container-inner').wrap(
      `<div class='_slideshow-gallery__image-container ${settings.containerClass}'></div>`
    );
    this.append(`
      <div class="_slideshow-gallery__slider ${settings.buttonMenu}">
        <button id="_slideshow-gallery__prev-btn" class="${settings.prevBtnClass}">Previos</button>
        <button id="_slideshow-gallery__next-btn" class="${settings.nextBtnClass}">Next</button>
      </div>
    `);
    $('._slideshow-gallery__image-container-inner > ._slideshow-gallery__image')
      .first()
      .addClass('active');

    appendStyles();

    $('#_slideshow-gallery__next-btn').click(function() {
      let currentImg = $('._slideshow-gallery__image.active');
      let nextImg = currentImg.next();

      if (nextImg.length) {
        currentImg.removeClass('active');
        nextImg.addClass('active');
      }

      if (!nextImg.length) {
        currentImg.removeClass('active');
        $('._slideshow-gallery__image')
          .first()
          .addClass('active');
      }
    });

    $('#_slideshow-gallery__prev-btn').click(function() {
      let currentImg = $('._slideshow-gallery__image.active');
      let prevImg = currentImg.prev();

      if (prevImg.length) {
        currentImg.removeClass('active');
        prevImg.addClass('active');
      }

      if (!prevImg.length) {
        currentImg.removeClass('active');
        $('._slideshow-gallery__image')
          .last()
          .addClass('active');
      }
    });

    function appendStyles() {
      const pluginStyles = false;
      $('link').each(function() {
        if ($(this).attr('href') === 'slideshow.css') {
          pluginStyles = true;
        }
      });

      if (pluginStyles === false) {
        $('head').append(
          '<link rel="stylesheet" href="lib/slideshow.css" type="text/css" />'
        );
      }
    }
  };
})(jQuery);
