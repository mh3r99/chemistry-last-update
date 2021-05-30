$(function () {
  // Chaneg lang
  $(".header__lang").on("click", function () {
    $(this).toggleClass("header__lang--active");
    $(this)
      .find("ul li")
      .on("click", function (e) {
        e.preventDefault();
        let tempValue = $(".header__lang").find("button span").text();
        $(".header__lang").find("button span").text($(this).find("a").text());
        $(this).find("a").text(tempValue);
      });
  });
  //   Hamburger
  const hamburger = $(".header__hamburger"),
    header_bottom = $(".header__bottom");
  hamburger.on("click", function (e) {
    e.preventDefault();
    hamburger.toggleClass("header__hamburger--active");
    header_bottom.toggleClass("header__bottom--active");
  });
  // Menu dropdown
  if (window.matchMedia("(min-width: 576px)").matches) {
    $(".menu__item-dropdown").on("click", function (e) {
      e.preventDefault();
      if ($(this).siblings().hasClass("menu__item--active")) {
        $(this).siblings().removeClass("menu__item--active");
        $(this)
          .siblings()
          .find(".dropdown-box")
          .removeClass("dropdown-box--active");
      }

      $(".dropdown-item").removeClass("dropdown-item--active");
      $(".subdropdown-box").removeClass("subdropdown-box--active");
      $(this)
        .siblings()
        .find(".menu__item-link")
        .removeClass("menu__item-link--active");
      $(this).find(".menu__item-link").toggleClass("menu__item-link--active");

      $(this).toggleClass("menu__item--active");
      $(this).find(".dropdown-box").toggleClass("dropdown-box--active");
    });
    // Menu subdropdown
    $(".subdropdown-box").removeClass("subdropdown-box--active");
    $(".dropdown-box-1 .dropdown-item ").on("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(this)
        .siblings()
        .find(".subdropdown-box")
        .removeClass("subdropdown-box--active");
      $(this).siblings().removeClass("dropdown-item--active");
      $(this).toggleClass("dropdown-item--active");
      $(this).find(".subdropdown-box").toggleClass("subdropdown-box--active");
    });
  } else {
    $(".menu__item-dropdown").on("click", function (e) {
      e.preventDefault();
      $(".menu").addClass("menu--hide");
      $(".mobile-menu").addClass("mobile-menu--show");

      $(".dropdown-item").removeClass("dropdown-item--active");
      $(".subdropdown-box").removeClass("subdropdown-box--active");

      $(".mobile-menu__list").removeClass("mobile-menu__list--active");
      $(`.${$(this).attr("id")}`).addClass("mobile-menu__list--active");

      $(".mobile-menu__back").on("click", function (e) {
        e.preventDefault();
        $(".menu").removeClass("menu--hide");
        $(".mobile-menu").removeClass("mobile-menu--show");
      });
    });
    // Menu subdropdown
    $(".subdropdown-box").removeClass("subdropdown-box--active");
    $(".dropdown-box-1 .dropdown-item ").on("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(this)
        .siblings()
        .find(".subdropdown-box")
        .removeClass("subdropdown-box--active");
      $(this).siblings().removeClass("dropdown-item--active");
      $(this).toggleClass("dropdown-item--active");
      $(this).find(".subdropdown-box").toggleClass("subdropdown-box--active");
    });
  }
  // Carousel
  $(".olymp__carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/olymp/slide-right-arrow.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/olymp/slide-right-arrow.svg"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".news__carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: false,
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/olymp/slide-right-arrow.svg"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
  $(".teachers__carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: false,
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/teachers/slide-right-arrow.svg"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  $(".resources__carousel").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/other_resources/left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/other_resources/right.svg"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".images__wrapper").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
          },
        },
      ],
    });
  }
  if (window.matchMedia("(max-width: 576px)").matches) {
    $(".gallery__photos-wrapper, .gallery__videos-wrapper").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 3,
      slidesPerRow: 1,
      infinite: true,
      dots: true,
      prevArrow: false,
      nextArrow: false,
    });
  }
  //  magnificPopup
  $(".photos-item__img").magnificPopup({
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return "";
      },
    },
  });
  $(".videos-item__img").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});
