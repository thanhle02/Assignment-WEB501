$(".wrapper__slider-say").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    asNavFor: ".wrapper__slider-say-people, .wrapper__slider-who",
});

$(".wrapper__slider-say-people").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    asNavFor: ".wrapper__slider-say, .wrapper__slider-who",
});

$(".wrapper__slider-who").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    asNavFor: ".wrapper__slider-say, .wrapper__slider-say-people",
});

$(".wrapper__slider-say-people").on(
    "afterChange",
    function(slick, currentSlide, nextSlide) {
        $(".slick-active").each(function(i, obj) {
            console.log(slick);
            console.log(currentSlide);
            console.log(nextSlide);

            $(obj).removeClass("out");
            $(obj).removeClass("midle");

            if (i == 2 || i == 4) {
                $(obj).addClass("midle");
            }

            if (i == 1 || i == 5) {
                $(obj).addClass("out");
            }
        });
    }
);

AOS.init({
    once: true,
});

$(window).scroll(startCounter);

function startCounter() {
    let scrollY =
        (window.pageYOffset || document.documentElement.scrollTop) +
        window.innerHeight;
    let divPos = document.querySelector(".top-conunt").offsetTop;

    if (scrollY > divPos) {
        $(window).off("scroll", startCounter);

        $(".count").each(function() {
            var $this = $(this);
            jQuery({
                Counter: 0,
            }).animate({
                Counter: $this.text().replace(/,/g, ""),
            }, {
                duration: 1000,
                easing: "swing",
                step: function() {
                    $this.text(commaSeparateNumber(Math.floor(this.Counter)));
                },
                complete: function() {
                    $this.text(commaSeparateNumber(this.Counter));
                    //alert('finished');
                },
            });
        });

        function commaSeparateNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}

// $(".wrapper__slider-say-people").on(
//   "afterChange",
//   function (slick, currentSlide, nextSlide) {
//     $(".slick-active").each(function (i, obj) {
//       if (i == 1 || i == 5) {
//         $(obj).addClass("out");
//       }
//     });
//   }
// );