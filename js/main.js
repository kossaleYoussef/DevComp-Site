$(document).ready(function () {
    // Code for Services Section
    new WOW().init();

    // Code for Work Section
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Code for Team Section
    $("#team-members").owlCarousel({
        responsive : {
            0 : {
                items :1
            },
            480 : {
                items :2
            },
            768 : {
                items : 3
            }
        }
    });

    

    // Code for Testimonials Section
    $("#customers-testimonials").owlCarousel({
        items: 1
    });

    // Code For Stats
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // NavBar Code
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            document.querySelector('.mynav').style.backgroundColor = "rgba(0, 0, 0, 0.24)";
            document.querySelector('.mynav').style.padding = "10px 20px 0";
        } else {
            document.querySelector('.mynav').style.backgroundColor = "rgba(0, 0, 0, 0.84)";
            document.querySelector('.mynav').style.padding = "0";
        }
    });

    //Smooth Scrolling Code 
    $("a.smooth-scroll,.MyHomebtn,.Myaboutbtn").click(function (event) {
        event.preventDefault();

        let section = $(this).attr("href");

        $("html,body").animate({
            scrollTop: $(section).offset().top - 55
        }, 1100);
    });

    $(".navbar-collapse ul li a").on('click touch',function(){
        $(".navbar-toggle").click();
    });

});