$('#home .gallery .owl-carousel.owl-carousel--gallery').owlCarousel({  
    loop: true,
    autoplay: true,  
    autoplayTimeout:6000,
     responsive:{
        0:{
            items:2
        },
        740:{
            items:3
        },
        1024:{
            items:5
        }
    }
})  
$('#home .drink-list .owl-carousel').owlCarousel({  
    loop: true,
    autoplay: false,  
    autoplayTimeout:6000,
    responsive:{
        0:{
            items:2
        },
        740:{
            items:2
        },
        1024:{
            items:4
        }
    }
}) 
$('#home .category .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,   
    autoplay:true,
    autoplayTimeout:6000,
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
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})  

