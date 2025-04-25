$(function () {
    const MBS = new Swiper('.main_business_slide', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        loop: true,
        autoplay: true,
    })
})


$(function () {
    $('.wheel').on('click', function () {
        $('html, body').animate({ scrollbottom: 0 }, 500)
    })
});

$(function () {

    //스크롤이 됐을 떄 header에 on을 붙인다.
    //스크롤이 0이면 header에서 on을 땐다.
    //event : click, scroll, wheel, mouseenter, mouseleave, change

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


});


$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })
});
