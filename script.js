$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY>20)  {
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");            
        }
    })
    $('.menu-but').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menu-but i').toggleClass('fas fa-bars fas fa-times')
    });

    $('.carousel').owlCarousel({
        margin: 40,
        loop: true,
        autoplay:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
        
    })
})
function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}