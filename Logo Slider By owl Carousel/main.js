$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    dots:false,
    autoplay:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      700:{
          items:3
      },
      900: {
          items:3
      },
      1000:{
        items:5
      }
    }
  })