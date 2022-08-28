$('#home .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,   
    autoplay:true,
    autoplayTimeout:3000,
    dotsEach: true, 
    URLhashListener:true, 
    center: true,
    startPosition: 'URLHash',
     responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
}) 
$('#menu .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,   
     responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
}) 
