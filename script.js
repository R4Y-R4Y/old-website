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
})