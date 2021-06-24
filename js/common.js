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
    if ($('body *').is('.coursessl')) {
        $('.coursessl').slick({
            slidesToShow: 3.5,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: false,
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
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        variableWidth: true,
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        variableWidth: true

                    }
                }
            ]
        });
    }

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
    $('.dashboardtabs .dashtable__row').click(function () {
        $(this).find('.droparrowbrn').toggleClass('rotatearrow');
        $(this).next('.dashtable__rowdescr').toggleClass('show');
        $(this).parent().toggleClass('open');
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

    $('.startcourse__sbhead button').click(function () {
        $('.sidebarcol').addClass('hidesidenav');
    });
    $('.startcourse__sidebarburger').click(function () {
        $('.sidebarcol').removeClass('hidesidenav');
    });

    $('.startcourse__sidebarburgermob, .mobsidebarlink').click(function () {
        $('.startcourse__sidebar').addClass('tabletshowsidebar');
        $("<div class='darkoverley'></div>").appendTo($("body"));
    });
    $('.startcourse__sbhead button, .mobtext-closemenu').click(function () {
        $('.startcourse__sidebar').removeClass('tabletshowsidebar');
        $('.darkoverley').remove();
    });
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.startcourse__sidebar').length && !$target.closest('.startcourse__sidebarburgermob').length && !$target.closest('.mobsidebarlink').length) {
            $('.startcourse__sidebar').removeClass('tabletshowsidebar');
            $('.darkoverley').remove();
        }
    });

    // close alert - start-course-wrong.html
    $('.alertclose').click(function () {
        $(this).parent('.alert').fadeOut();
        $(this).parent('.alert').next('.correctans').fadeOut();
    });

    // PAGE TOUR
    $('.tourstart__skip, .tourstart__bottsect button').click(function () {
        $('.darkwrapper.tourwrapper.beforesteps').hide();
    });
    $('#repeattour').click(function () {
        $('.darkwrapper.tourwrapper.aftersteps').removeClass('show');
    });
    $('.closetour').click(function (e) {
        e.preventDefault();
        $('.darkwrapper.tourwrapper.aftersteps').removeClass('show');
    });

    // home page - mobile course popup
    $('.coursessection .courslists__item').attr('data-toggle', '');

    if ($(window).width() < 1200) {
        $('.coursessection .courslists__item').attr('data-toggle', 'modal');
    }

    $(window).resize(function () {
        if ($(window).width() < 1200) {
            $('.coursessection .courslists__item').attr('data-toggle', 'modal');
        } else {
            $('.coursessection .courslists__item').attr('data-toggle', '');
        }
    });

    // start course - remove disabled (start-course2.html)
    $('.answervariant input').change(function () {
        $('.question__submit').removeAttr("disabled");
    });
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

        // const player = new Plyr('#player', { controls });
        const players = Plyr.setup('.video__controls', { controls });

        // Expose
        window.players = players;

        // Bind event listener
        function on(selector, type, callback) {
            document.querySelector(selector).addEventListener(type, callback, false);
        }
    });
    // without controls
    document.addEventListener('DOMContentLoaded', () => {
        // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
        const controls = [
            'play-large', // The large play button in the center
            'play', // Play/pause playback
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

        // const player = new Plyr('#player', { controls });
        const players1 = Plyr.setup('.video__nocontrols', { controls });

        // Expose
        window.players1 = players1;

        // Bind event listener
        function on(selector, type, callback) {
            document.querySelector(selector).addEventListener(type, callback, false);
        }
    });
}

// ========================================================= PHASE 2 =========================================================

$(document).ready(function () {
    // Option BTN
    let optionBtn = $('.optdropdown button');

    $(optionBtn).click(function () {
        $(this).toggleClass('rotatearrow');
        $(this).next('ul').slideToggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.optdropdown').length) {
            $(optionBtn).removeClass('rotatearrow');
            $(optionBtn).next('ul').slideUp();
        }
    });

    // departments
    let deplabelMoreBtn = $('.deplabel_more');

    $(deplabelMoreBtn).click(function () {
        $(this).next('.deplabels-morebox').slideToggle();
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.dashtable__body .dashtable__departmants').length) {
            $('.deplabels-morebox').slideUp();
        }
    });

    // drop dashboard course

    $('.dashtab-section_hifiauthor .dashtable__row').click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.dashtable__departmants').length && !$target.closest('.editcourse-btn').length) {
            $(this).find('.extendcourse-btn').toggleClass('rotatearrow');
            $(this).next('.dashtable__rowdescr').toggleClass('show');
            $(this).parents('.dashtable__rowwrap').toggleClass('open');
        }
    });

    // check all - EDITED

    $('.dashtable_curriculum .checkall').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.dashtable__header').siblings('.dashtable__body').find('.dashtable__checkblock input:not(:disabled)').prop('checked', true);

            $(this).parents('.tab-pane').find('.dashaction__labels button').addClass('green');
        } else {
            $(this).parents('.dashtable__header').siblings('.dashtable__body').find('.dashtable__checkblock input:not(:disabled)').prop('checked', false);

            $(this).parents('.tab-pane').find('.dashaction__labels button').removeClass('green');
        }
    });

    // ph2-addcourse-choosetype.html - add checkbox (test)
    let inputAddCourse = $('.courseinpfield input'),
        buttonAddCourse = $('.courseinpfield button'),
        linkAddCourse = $('.addnewcoursetype-btn');

    $(buttonAddCourse).click(function () {
        $("#mydiv").append(`<div class="addcoursesection__checkwrap"><input type="checkbox" id="${inputAddCourse.val()}"><label for="${inputAddCourse.val()}">${inputAddCourse.val()}</label></div >`);
    });

    // clear input
    $(linkAddCourse).click(function () {
        inputAddCourse.val('');
    });

    // choose type - disable btn

    function inputsCheck() {
        if ($('.addcoursesection__radiobox input').is(':checked') && $('.addcoursesection__checkswrap input').is(':checked')) {
            $('.addcoursesection__continue').removeClass('disable');
        } else {
            $('.addcoursesection__continue').addClass('disable');
        }
    }

    $(document).on('change', '.contchoosetype input', function () {
        inputsCheck();
    });

    // upload image
    $('.chooseFile').bind('change', function () {
        var filename = $(this).val();
        $(this).next('.file-upload').find('.noFile').text(filename.replace("C:\\fakepath\\", ""));
    });

    // -----Course Settings / remove green box
    $('.coursesetting-label button').click(function () {
        $(this).parents('.coursesetting-labelwrap').remove();
    });

    // datepicker
    if ($('body *').is('.datepicker')) {
        $('.datepicker').datepicker({
            // format: 'mm/dd/yyyy',
            autoclose: true,
            todayHighlight: true,
            container: '#coursedatepickcontainer',
            orientation: 'bottom'
        });
    }

    // input mask
    if ($('body *').is('.inputmask')) {
        $("#start-hour").inputmask("99:99");
        $("#end-hour").inputmask("99:99");
    }

    const main = document.querySelector('#maininput');
    const start = document.querySelector('#start-hour');
    const end = document.querySelector('#end-hour');

    $(".test").on('keyup change click', function () {
        let valueStart = $(start).val();
        let valueEnd = $(end).val();

        $(main).val(`${valueStart}  -  ${valueEnd}`);

        if ($('.test').val() != '') {
            $(main).addClass('show');
        } else {
            $(main).removeClass('show');
        }
    });

    $(main).click(function () {
        $('.main-input .subinputs').addClass('show');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.main-input').length) {
            $('.main-input .subinputs').removeClass('show');
        }
    });

    $('.switch-control').tooltip({
        container: 'div.addcurric__main'
    });

    // text editor
    if ($('body *').is('#editor')) {
        $("#editor").trumbowyg({
            semantic: false,
            defaultLinkTarget: '_blank',
            minimalLinks: true,
            btns: [
                // all settings
                // ["viewHTML"],
                // ["undo", "redo"], // Only supported in Blink browsers
                // ["formatting"],
                // ["strong", "em", "del"],
                // ["superscript", "subscript"],
                // ["link"],
                // ["insertImage"],
                // ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
                // ["unorderedList", "orderedList"],
                // ["horizontalRule"],
                // // ["removeformat"],
                // ["fullscreen"]

                ['formatting'],
                ['bold', 'italic', 'underline', 'strikethrough'],
                ['link'],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
                ["unorderedList", "orderedList"],
                ['fullscreen'],
            ]

        });
    }

    // view adding
    let tabsContent = $('.addcoursecont__tabcont-wrap .tab-content'),
        addingContent = $('.viewaddings-section'),
        tabLink = $('.addcoursecont__tabnav .nav-link');
    $('.viewadding').click(function (e) {
        e.preventDefault();
        $(tabsContent).hide();
        $(addingContent).show();
    });

    $(tabLink).click(function () {
        $(tabsContent).show();
        $(addingContent).hide();
    });

    // drag & drop
    if ($('body *').is('.viewaddings-section')) {
        var instance = $(".my-container").dad({
            draggable: ".viewaddings-section",
        });
    }

    // view adding - btns
    $('.dragitem__btns .edit').click(function () {
        $(tabsContent).show();
        $(addingContent).hide();
    });

    $('.dragitem__text .edit').click(function (e) {
        $('#myTab a[href="#addtext"]').tab('show');
    });
    $('.dragitem__file .edit').click(function (e) {
        $('#myTab a[href="#addfile"]').tab('show');
    });
    $('.dragitem__material .edit').click(function (e) {
        $('#myTab a[href="#addvmaterial"]').tab('show');
    });
    $('.dragitem__video .edit').click(function (e) {
        $('#myTab a[href="#addvideo"]').tab('show');
    });
    $('.dragitem__quiz .edit').click(function (e) {
        $('#myTab a[href="#addquiz"]').tab('show');
    });

    // remove drug row
    const deleteBtn = $('.dragitem .delete');
    $(deleteBtn).click(function () {
        $(this).parents('.dragitem').remove();
    });

    // back btn - publish page
    $(".acpublish__header .back").click(function (event) {
        event.preventDefault();
        history.back(1);
    });

    // "option" - hover - remove border
    let optionLink = $('.optdropdown ul li');
    $(optionLink).mouseover(function () {
        $(this).prev().addClass('bordernone');
    });
    $(optionLink).mouseleave(function () {
        $(this).prev().removeClass('bordernone');
    });

    // ph2-addcourse-addcurriculum.html - delete row
    let deleteCurrRow = $('.addcurric-currwrap .close-control button');

    $(deleteCurrRow).click(function () {
        $(this).parents('.addcurric-currwrap').remove();
    });

    // ph2-addcourse-addcurriculum-filltabs.html - create/delete new quiz (test)
    const parentQ = $('.quizsection__answers');

    $(document).on('click', '.qwbtns .removeqw', function () {
        $(this).parents('.quizsection__answerrow').remove();
    });

    var i = 0;

    $(document).on('click', '.qwbtns .addqw', function () {
        let nameValue = $(this).parents('.quizsection__answerrow').find('input').attr("name");

        if ($(selectQ).val() == 0) {
            $(parentQ).append(`<div class="quizsection__answerrow">
            <div class="checkblock">
                <input type="checkbox" id="${nameValue + i}" name="${nameValue}">
                <label for="${nameValue + i}"></label>
            </div>
            <div class="qwtext">
                <input type="text" placeholder="Type answer">
            </div>
            <div class="qwbtns">
                <button class="addqw"></button>
                <button class="removeqw"></button>
            </div>
        </div>`);
        } else if ($(selectQ).val() == 1) {
            console.log('2');
            $(parentQ).append(`<div class="quizsection__answerrow">
            <div class="checkblock">
                <input type="radio" id="${nameValue + i}" name="${nameValue}">
                <label for="${nameValue + i}"></label>
            </div>
            <div class="qwtext">
                <input type="text" placeholder="Type answer">
            </div>
            <div class="qwbtns">
                <button class="addqw"></button>
                <button class="removeqw"></button>
            </div>
        </div>`);
        }

        i++;
    });

    // change checkbox to radio
    let selectQ = $('.quizsection__type select');
    $(document).on('change', '.quizsection__type select', function () {
        $('.quizsection__answerrow .checkblock input').prop("checked", false);

        if ($(selectQ).val() == 0) {
            $('.quizsection__answerrow .checkblock input').attr('type', 'checkbox');
        } else if ($(selectQ).val() == 1) {
            $('.quizsection__answerrow .checkblock input').attr('type', 'radio');
        }
    });

});


