// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  


  /* hamburger */
  $('.hamburger').click(function(e) { 
      e.preventDefault();    
      $(this).closest('.header').find('.header__nav').slideToggle();
      $(this).closest('.header').find('.header__services').slideToggle();
  });
  $(window).resize(function(){
    if ($(window).width() > 768) {
      $('.header__nav').show();
      $('.header__services').show();
    } else {
      $('.header__nav').hide();
      $('.header__services').hide();
    }
  });


  /* view */
  $('.view__list').click(function(e) { 
      e.preventDefault(); 
      $(this).closest('.content').find('.content__articles').addClass('content__articles--list');
  });
  $('.view__pics').click(function(e) { 
      e.preventDefault();    
      $(this).closest('.content').find('.content__articles').removeClass('content__articles--list');
  });


  // /* галерея header banner */
  // $('.promo__gallery').slick({
  //   infinite: true,
  //   arrows: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   speed: 1000,
  //   fade: true,
  //   centerMode: true,
  //   centerPadding: '0'
  // });

  // /* Меню выпадашки */
  // $('.menu__link--dropdown').click(function(){
  //   if($(this).next('.submenu').is(":visible")) {
  //     $(this).next('.submenu').fadeOut(250);
  //   } else {
  //     $(this).closest('.menu').find('.submenu').fadeOut(250);
  //     $(this).siblings('.submenu').fadeIn(250);
  //   }
  // }); 

  // /* галерея "серт.документы" */
  // $('.certification-docs__gallery').slick({
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   centerMode: true,
  //   centerPadding: '0',
  //   responsive: [
  //     {
  //       breakpoint: 1180,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 540,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  // /* галерея questions-section */
  // $('.questions-section__gallery').slick({
  //   infinite: true,
  //   arrows: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   fade: true,
  //   centerMode: true,
  //   centerPadding: '0',
  //   responsive: [
  //     {
  //       breakpoint: 540,
  //       settings: {
  //         adaptiveHeight: true
  //       }
  //     }
  //   ]
  // });

  // /* галерея contacts-section по городу */
  // $('.contacts-section__city-wrapper').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: false,
  //   fade: true,
  //   swipe: false,
  //   asNavFor: '.city-section__gallery'
  // });
  // $('.city-section__gallery').slick({
  //   slidesToShow: 8,
  //   slidesToScroll: 1,
  //   asNavFor: '.contacts-section__city-wrapper',
  //   vertical: true,
  //   centerPadding: 0,
  //   centerMode: true,
  //   focusOnSelect: true
  // });

  // /* галерея contacts-section по офису */
  // $('.contacts-section__office-gallery').slick({
  //   infinite: true,
  //   arrows: false,
  //   dots: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   centerMode: true,
  //   centerPadding: '0'
  // });

  // /* плавный скролл наверх */
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 102) {
  //     $('.up').fadeIn();
  //   } else {
  //     $('.up').fadeOut();
  //   }
  // });
  // $('.up').click(function () {
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, 600);
  //   return false;
  // });


  // /* certification type */
  // $('.certification-type__link').click(function(e) { 
  //     e.preventDefault();    
  //     $(this).closest('.certification-type__text').find('.certification-type__sublist').slideToggle();
  // });

  /* Map */
  $('.contacts__map').each(function (index, Element) {
      var map =new GMaps({
          el: Element,
          lat: 56.8378081,
          lng: 60.5950772,
          scrollwheel: false
      });
      map.addMarker({
          lat: 56.8378081,
          lng: 60.5950772,
      });
  });


});

