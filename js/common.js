$(document).ready(function () {

    // show password (login popup)
    $(".showpassbtn").click(function () {
        var input = $('#password');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    // show / hide header nav

    $('.loginnedsect__userinfo').click(function () {
        $('.loginnedsect__nav').slideToggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.loginnedsect__nav').length && !$target.closest('.loginnedsect__userinfo').length) {
            $('.loginnedsect__nav').slideUp();
        }
    });


    // Courses slider

    $('.coursessl').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    slidesToShow: 4.5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    variableWidth: true,

                }
            }
        ]
    });

    // top top
    $(function () {
        $('#up').click(function () {
            $('body, html').animate({ scrollTop: 0 }, 1500);
        });
    });

    $(document).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $('.totop button').addClass('show');
        } else {
            $('.totop button').removeClass('show');
        }
    });

    // mobile - filter
    $('.showfilter').click(function () {
        $(this).toggleClass('rotatepic');
        $('.filtboxeswrapp').toggleClass('show');
    });

    $('.phone-leftbox span').click(function () {
        $('.phone-leftbox span').removeClass('active');
        $(this).addClass('active');
        $('.coursfilter__filtbox').hide();
    });

    $('.btn-filtbox1').click(function () {
        $('.filtbox1').show();
    });
    $('.btn-filtbox2').click(function () {
        $('.filtbox2').show();
    });
    $('.btn-filtbox3').click(function () {
        $('.filtbox3').show();
    });

    // tablet+mobile dashboard popup
    if ($(window).width() < 1025) {
        $('.dashboardlink').attr('data-toggle', 'modal');
        $('.dashboardlink').attr('data-target', '#dashboard-mobpop');
    }

    // course accordeon
    $('.accordeon-titlebox').click(function () {
        $(this).next('.accordeon-descrbox').slideToggle();
        $(this).toggleClass('rotatearrow');
    });

    // drop dashboard course
    $('.droparrowbrn').not('.disabled .droparrowbrn').click(function () {
        $(this).toggleClass('rotatearrow');
        $(this).parents('.dashtable__row').next('.dashtable__rowdescr').toggleClass('show');
        $(this).parents('.dashtable__rowwrap').toggleClass('open');
    });


    // tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // copy btn
    $('.passcodetext').click(function () {
        $("#custom-tooltip").addClass('show');
        setTimeout(function () {
            $("#custom-tooltip").removeClass('show');
        }, 2000);
    });


    // check all
    $('.checkall').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.dashtable__header').next('.dashtable__body').find('.dashtable__checkblock input:not(:disabled)').prop('checked', true);;
        } else {
            $(this).parents('.dashtable__header').next('.dashtable__body').find('.dashtable__checkblock input:not(:disabled)').prop('checked', false);;
        }

    });


    // action btn - set green color

    $('.dashtable__checkblock input').change(function () {
        if ($(this).parents('.dashtable').find('.dashtable__checkblock input:not(:disabled)').is(':checked')) {
            $(this).parents('.tab-pane').find('.dashaction__labels button').addClass('green');
        } else {
            $(this).parents('.tab-pane').find('.dashaction__labels button').removeClass('green');
        }
    });


    // course burger - sidebar
    $('.startcourse__sbgroup .title').click(function () {
        $(this).toggleClass('rotatearrow');
        $(this).next('.startcourse__sblist').slideToggle();
    });

    if ($(window).width() > 1024) {
        $('.startcourse__sbhead button').click(function () {
            $('.sidebarcol').addClass('hidesidenav');
        });

        $('.startcourse__sidebarburger').click(function () {
            $('.sidebarcol').removeClass('hidesidenav');
        });
    }

    if ($(window).width() < 1025) {
        $('.startcourse__sidebarburger, .mobsidebarlink').click(function () {
            $('.startcourse__sidebar').addClass('tabletshowsidebar');
            $("<div class='darkoverley'></div>").appendTo($("body"));
        });

        $('.startcourse__sbhead button, .mobtext-closemenu').click(function () {
            $('.startcourse__sidebar').removeClass('tabletshowsidebar');
            $('.darkoverley').remove();
        });




        $(document).click(function (event) {
            let $target = $(event.target);
            if (!$target.closest('.startcourse__sidebar').length && !$target.closest('.startcourse__sidebarburger').length && !$target.closest('.mobsidebarlink').length) {
                $('.startcourse__sidebar').removeClass('tabletshowsidebar');
                $('.darkoverley').remove();
            }
        });
    }






});


if ($('*').is('video')) {

    document.addEventListener('DOMContentLoaded', () => {
        // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
        const controls = [
            'play-large', // The large play button in the center
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'fullscreen' // Toggle fullscreen
        ];

        const player = new Plyr('#player', { controls });

        // Expose
        window.player = player;


        // Bind event listener
        function on(selector, type, callback) {
            document.querySelector(selector).addEventListener(type, callback, false);
        }


        // // Play
        // on('.js-play', 'click', () => {
        //     player.play();
        // });

        // // Pause
        // on('.js-pause', 'click', () => {
        //     player.pause();
        // });

        // // Stop
        // on('.js-stop', 'click', () => {
        //     player.stop();
        // });

        // // Rewind
        // on('.js-rewind', 'click', () => {
        //     player.rewind();
        // });

        // // Forward
        // on('.js-forward', 'click', () => {
        //     player.forward();
        // });
    });

    $(document).ready(() => {

        $('.player-src').on('click', function () {

            src = $(this).data("src");
            type = 'video/' + $(this).data("type");
            poster = $(this).data("poster") || "";

            player.source = {
                type: 'video',
                title: 'Example title',
                sources: [
                    {
                        src: src,
                        type: type,
                        size: 720
                    }
                ],
                poster: poster
            };

            player.play();

        });
    })

}