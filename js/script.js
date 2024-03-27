// language 메뉴 슬라이드

let isOpen = false;

$(".header .header-side .language>li").click(function(){
    if(isOpen == false){
        $(".header .header-side .subLan").stop().slideDown()
        isOpen = true;
    }else{
        $(".header .header-side .subLan").stop().slideUp()
        isOpen = false;
    }
})

// header / section-selector 스크롤 이벤트

$(window).scroll(function () {
    var height = $(document).scrollTop();
    console.log(height);

    if (height < 800){
        $(".header>h1 img").attr("src", "img/header_logo.png");
        $(".header h2 img").attr("src", "img/menu_blue.png");
        $(".header .header-side ul>li").css('color', '#030303');
        $(".header .header-side .language li img").attr("src", "img/arrow.png");
        $(".section-select-wrap ul li a").css('border-color', '#0066ff')
        $('.section-select-wrap .section-select li a').eq(0).css('background-color', '#0066ff')
        $('.section-select-wrap .section-select li a').eq(1).css('background-color', '')
        $('.section-select-wrap .section-select li a').eq(2).css('background-color', '')
        $('.section-select-wrap .section-select li a').eq(3).css('background-color', '')
    }

    if (height >= 350){
        $(".section-select-wrap ul li a").css('border-color', '#fff')
        $('.section-select-wrap .section-select li a').eq(0).css('background-color', '')
        $('.section-select-wrap .section-select li a').eq(1).css('background-color', '#fff')
        $('.section-select-wrap .section-select li a').eq(2).css('background-color', '')
        $('.section-select-wrap .section-select li a').eq(3).css('background-color', '')
    }

    if (height >= 800){
        $(".header>h1 img").attr("src", "img/foot_logo.png");
        $(".header h2 img").attr("src", "img/menu_white.png");
        $(".header .header-side ul>li").css('color', '#fff');
        $(".header .header-side .language li img").attr("src", "img/arrow_white.png");
    }

    if (height >=1150){
        $('.section-select-wrap .section-select li a').eq(0).css('background-color', '')
        $('.section-select-wrap .section-select li a').eq(1).css('background-color', '')
        $('.section-select-wrap .section-select li a').eq(2).css('background-color', '#fff')
        $('.section-select-wrap .section-select li a').eq(3).css('background-color', '')
    }

    if (height >=2000){
        $('.section-select-wrap .section-select li a').eq(0).css('background-color', '')
        $('.section-select-wrap .section-select li a').eq(1).css('background-color', '')
        $('.section-select-wrap .section-select li a').eq(2).css('background-color', '')
        $('.section-select-wrap .section-select li a').eq(3).css('background-color', '#fff')
    }

    if (height >= 2400){
        $(".header>h1 img").attr("src", "img/header_logo.png");
        $(".header h2 img").attr("src", "img/menu_blue.png");
        $(".header .header-side .language li img").attr("src", "img/arrow.png");
        $(".header .header-side ul>li").css('color', '#030303');
    }
}); 

// ---------- 스크롤 애니메이션 fadeIn

// section 01 - 03 text
$(document).ready(function(){
    $(window).scroll(function(){
        $('.text').each(function(){
            var scrollPosition = $(this).offset().top - $(window).height() + 200;
            var windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > scrollPosition){
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });
});

// section 01 - 03 more-btn
$(document).ready(function(){
    $(window).scroll(function(){
        $('.more-btn').each(function(){
            var scrollPosition = $(this).offset().top - $(window).height() + 200;
            var windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > scrollPosition){
                $(this).css({
                    'opacity': '1',
                });
            }
        });
    });
});

// section 04 text
$(document).ready(function(){
    $(window).scroll(function(){
        $('.text2').each(function(){
            var scrollPosition = $(this).offset().top - $(window).height() + 200;
            var windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > scrollPosition){
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });
});

// section 04 insta-wrap
$(document).ready(function(){
    $(window).scroll(function(){
        $('.insta-wrap').each(function(){
            var scrollPosition = $(this).offset().top - $(window).height() + 200;
            var windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > scrollPosition){
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });
});

// ---------- 스크롤 애니메이션 fadeOut

// 삼다수 물병
$(document).ready(function(){
    $(window).scroll(function(){
        var scrollPosition = $(window).scrollTop();
        var fadeOutPosition = 1800;

        if(scrollPosition >= fadeOutPosition){
            $('.samdasoo-bottle').css('opacity', '0');
        } else {
            $('.samdasoo-bottle').css('opacity', '1');
        }
    });
});

// section 01 - 03 text
$(document).ready(function(){
    $(window).scroll(function(){
        $('.text').each(function(){
            var scrollPosition = $(this).offset().top - $(window).height() + 200;
            var windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > scrollPosition){
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            } else {
                $(this).css({
                    'opacity': '0',
                    'transform': 'translateY(-20px)'
                });
            }
        });
    });
});

// section 01 - 03 more-btn
$(document).ready(function(){
    $(window).scroll(function(){
        $('.more-btn').each(function(){
            var scrollPosition = $(this).offset().top - $(window).height() + 200;
            var windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > scrollPosition){
                $(this).css({
                    'opacity': '1',
                });
            } else {
                $(this).css({
                    'opacity': '0',
                });
            }
        });
    });
});

// section 04 text
$(document).ready(function(){
    $(window).scroll(function(){
        $('.text2').each(function(){
            var scrollPosition = $(this).offset().top - $(window).height() + 200;
            var windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > scrollPosition){
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            } else {
                $(this).css({
                    'opacity': '0',
                    'transform': 'translateY(-20px)'
                });
            }
        });
    });
});

// section 04 insta-wrap
$(document).ready(function(){
    $(window).scroll(function(){
        $('.insta-wrap').each(function(){
            var scrollPosition = $(this).offset().top - $(window).height() + 200;
            var windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > scrollPosition){
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            } else {
                $(this).css({
                    'opacity': '0',
                    'transform': 'translateY(20px)'
                });
            }
        });
    });
});

// section04 이미지 슬라이드 1

let film = document.querySelector(".film");
let pics = film.getElementsByClassName("pic");

let currentIndex = 1;
let picCnt = pics.length;
let time = 2000;
let x = 250;

setInterval(function(){
    let trans = currentIndex * x;
    film.style.transform = "translateX(-"+ trans + "px)";
    currentIndex++;

    if(currentIndex == picCnt){
        currentIndex = 0;
    }
}, time);

// section04 이미지 슬라이드 2

let currentIndex2 = 2;

let film2 = document.querySelector(".film2");
let pic2s = film.getElementsByClassName("pic");

let pic2Cnt = pic2s.length;

setInterval(function(){
    let trans = currentIndex2 * x;
    film2.style.transform = "translateX(-"+ trans + "px)";
    currentIndex2++;

    if(currentIndex2 == pic2Cnt){
        currentIndex2 = 0;
    }
}, time);

// section04 이미지 슬라이드 3

let currentIndex3 = 3;

let film3 = document.querySelector(".film3");
let pic3s = film.getElementsByClassName("pic");

let pic3Cnt = pic3s.length;

setInterval(function(){
    let trans = currentIndex3 * x;
    film3.style.transform = "translateX(-"+ trans + "px)";
    currentIndex3++;

    if(currentIndex3 == pic3Cnt){
        currentIndex3 = 0;
    }
}, time);

