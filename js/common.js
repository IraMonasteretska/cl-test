$(document).ready(function () {

    // show password (login page -- login-page.html)
    $(".showpassbtn").click(function () {
        var input = $('#password');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    // show / hide header nav (header)
    $('.loginnedsect__userinfo').click(function () {
        $('.loginnedsect__nav').slideToggle();
    });
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.loginnedsect__nav').length && !$target.closest('.loginnedsect__userinfo').length) {
            $('.loginnedsect__nav').slideUp();
        }
    });

    // Slider (homepage.html)
    if ($('body *').is('.coursessl')) {
        $('.coursessl').slick({
            slidesToShow: 3.5,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: false,
            responsive: [{
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
                breakpoint: 767,
                settings: {
                    variableWidth: true,
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,

                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
            ]
        });
    }

    // top top (homepage.html)
    $(function () {
        $('#up').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 1500);
        });
    });

    // mobile - filter (homepage.html)
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

    // course accordeon (course-detail-start.html and other course pages)
    $('.accordeon-titlebox').click(function () {
        $(this).next('.accordeon-descrbox').slideToggle();
        $(this).toggleClass('rotatearrow');
    });

    // drop dashboard course (dashboard-main.html)
    $('.dashboardtabs .dashtable__row').click(function () {
        $(this).find('.droparrowbrn').toggleClass('rotatearrow');
        $(this).next('.dashtable__rowdescr').toggleClass('show');
        $(this).parent().toggleClass('open');
    });

    // tooltips
    $(function () {
        $('[data-toggle="tooltip1"]').tooltip()
    });

    if ($('*').is('.addcurric__main')) {
        $('body').tooltip({
            selector: '[data-toggle=tooltip]',
            container: 'div.addcurric__main',
        });
    } else {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }

    // copy btn (dashboard-main.html)
    $('.passcodetext').click(function () {
        $("#custom-tooltip").addClass('show');
        setTimeout(function () {
            $("#custom-tooltip").removeClass('show');
        }, 2000);
    });

    // check all (dashboard-main.html)
    $('.checkall').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.dashtable__header').next('.dashtable__body').find('.dashtable__checkblock input:not(:disabled)').prop('checked', true);;
        } else {
            $(this).parents('.dashtable__header').next('.dashtable__body').find('.dashtable__checkblock input:not(:disabled)').prop('checked', false);;
        }
    });

    // action btn - set green color (dashboard-main.html)
    $('.dashtable__checkblock input').change(function () {
        if ($(this).parents('.dashtable').find('.dashtable__checkblock input:not(:disabled)').is(':checked')) {
            $(this).parents('.tab-pane').find('.dashaction__labels button').addClass('green');
        } else {
            $(this).parents('.tab-pane').find('.dashaction__labels button').removeClass('green');
        }
    });

    // course burger - sidebar (start-course.html, start course pages)
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

    // close alert (start-course-wrong.html)
    $('.alertclose').click(function () {
        $(this).parent('.alert').fadeOut();
        $(this).parent('.alert').next('.correctans').fadeOut();
    });

    // PAGE TOUR (homepage.html)
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

    // mobile course popup (homepage.html)
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
    // video (start-course.html)
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
        const players = Plyr.setup('.video__controls', {
            controls
        });

        // Expose
        window.players = players;

        // Bind event listener
        function on(selector, type, callback) {
            document.querySelector(selector).addEventListener(type, callback, false);
        }
    });
    // video (start-course-disable-rewind.html)
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
        const players1 = Plyr.setup('.video__nocontrols', {
            controls
        });

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
    // Option BTN (ph2-hifi-author-main.html)
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

    // departments (ph2-hifi-author-main.html)
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

    // drop dashboard course (ph2-hifi-author-main.html)
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

    // Add checkbox (ph2-addcourse-choosetype.html)
    let inputAddCourse = $('.courseinpfield input'),
        buttonAddCourse = $('.courseinpfield button'),
        linkAddCourse = $('.addnewcoursetype-btn');

    $(document).on('keyup change click', inputAddCourse, function () {
        if ($(inputAddCourse).val() != '') {
            $(buttonAddCourse).prop("disabled", false);
        } else {
            $(buttonAddCourse).prop("disabled", true);
        }
    });

    $(buttonAddCourse).click(function () {
        $("#mydiv").append(`<div class="addcoursesection__checkwrap"><input type="checkbox" id="${inputAddCourse.val()}"><label for="${inputAddCourse.val()}">${inputAddCourse.val()}</label></div >`);
    });

    // clear input
    $(linkAddCourse).click(function () {
        inputAddCourse.val('');
    });

    // choose type - disable btn (ph2-addcourse-choosetype.html)
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

    // Course Settings / remove green box (ph2-addcourse-addinformation.html)
    $('.coursesetting-label button').click(function () {
        $(this).parents('.coursesetting-label').removeClass('show');
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

    // input mask (ph2-addcourse-addinformation-workshop.html)
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

    // text editor (ph2-addcourse-addcurriculum-filltabs.html)
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

    // drag & drop 
    if ($('body *').is('.viewaddings-section')) {
        var instance = $(".my-container").dad({
            draggable: ".viewaddings-section",
        });

    }

    // remove drug row
    const deleteBtn = $('.dragitem .delete');
    $(deleteBtn).click(function () {
        $(this).parents('.dragitem').remove();
    });

    // "option btn" - hover - remove <li> border
    let optionLink = $('.optdropdown ul li');
    $(optionLink).mouseover(function () {
        $(this).prev().addClass('bordernone');
    });
    $(optionLink).mouseleave(function () {
        $(this).prev().removeClass('bordernone');
    });

    // ph2-addcourse-addcurriculum.html - delete row
    $(document).on('click', '.addcurric-currwrap .close-control button', function () {
        $(this).parents('.addcurric-currwrap').remove();
    });
    $(document).on('click', '.addcurric-currwrap .close-controltopic button', function () {
        $(this).parents('.addcurric__sub').remove();
    });

    // ph2-addcourse-addcurriculum-filltabs.html - create/delete new quiz (test)
    $(document).on('click', '.qwbtns .removeqw', function () {
        $(this).parents('.quizsection__answerrow').remove();
    });

    var i = 0;
    $(document).on('click', '.qwbtns .addqw', function () {
        let nameValue = $(this).parents('.quizsection__answerrow').find('input').attr("name");
        // let selectQ = $('.quizsection__type select');
        if ($('.quizsection__type select').val() == 0) {
            $(this).parents('.quizsection__topsect').find('.quizsection__answers').append(`<div class="quizsection__answerrow">
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
        } else if ($('.quizsection__type select').val() == 1) {
            $(this).parents('.quizsection__topsect').find('.quizsection__answers').append(`<div class="quizsection__answerrow">
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

    // change checkbox to radio (ph2-addcourse-addcurriculum-filltabs.html)
    $(document).on('change', '.quizsection__type select', function () {
        $(this).parents('.quizsection__topsect').find('.quizsection__answerrow .checkblock input').prop("checked", false);
        if ($(this).val() == 0) {
            $(this).parents('.quizsection__topsect').find('.quizsection__answerrow .checkblock input').attr('type', 'checkbox');
        } else if ($(this).val() == 1) {
            $(this).parents('.quizsection__topsect').find('.quizsection__answerrow .checkblock input').attr('type', 'radio');
        }
    });

    // ph2-addcourse-addcurriculum.html
    // drag & drop
    if ($('body *').is('.my-containerr')) {
        var instance = $(".my-containerr").dad({
            draggable: ".addcurriculum__body",
        });
        // add new module
        const addNewNodule = $('.addcurriculum__body-addmodule .addlink');
        var i = 0;
        $(addNewNodule).on("click", function (e) {
            e.preventDefault();
            $('.addcurriculum__body .dragwrap').append(`<div class="dragitem">
                <div class="addcurric-currwrap">
                    <div class="addcurric__main">
                        <div class="addcurric__main-title">
                            <p><span>Understanding the Disease</span></p>
                            <a href="#" class="edit"></a>
                        </div>
                        <div class="addcurric__main-controls">
                            <div class="switch-control" data-toggle="tooltip"
                                data-placement="top" title=""
                                data-original-title="Learner can skip this Module">
                                <input type="checkbox" id="${'main' + i}" />
                                <label for="${'main' + i}"></label>
                            </div>
                            <div class="close-control">
                                <button></button>
                            </div>
                        </div>
                    </div>
                    <div class="addcurric__subs">
                        <div class="addcurric__sub">
                            <div class="addcurric__main-title">
                                <p><a href="ph2-addcourse-addcurriculum-filltabs.html">Stages of Parkinson’s</a></p>
                                <a href="#" class="edit"></a>
                            </div>
                            <div class="addcurric__main-controls">
                                <div class="switch-control" data-toggle="tooltip"
                                    data-placement="top" title=""
                                    data-original-title="Learner can skip this Module">
                                    <input type="checkbox" id="${'sub' + i}" />
                                    <label for="${'sub' + i}"></label>
                                </div>
                                <div class="close-controltopic">
                                    <button></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="addcurric__sub">
                        <a class="addnewtopic" href="#">Add new topic</a>
                    </div>
                </div>
            </div>`);
            i++;
        });

        // ADD new topic
        var subTopicId = 0;
        $(document).on('click', '.addnewtopic', function (e) {
            e.preventDefault();
            $(this).parent().siblings('.addcurric__subs').append(
                `<div class="addcurric__sub">
                    <div class="addcurric__main-title">
                        <p><a href="ph2-addcourse-addcurriculum-filltabs.html">Stages of Parkinson’s</a></p>
                        <a href="#" class="edit"></a>
                    </div>
                    <div class="addcurric__main-controls">
                        <div class="switch-control" data-toggle="tooltip"
                            data-placement="top" title=""
                            data-original-title="Learner can skip this Module">
                            <input type="checkbox" id="${'subtopic' + subTopicId}" />
                            <label for="${'subtopic' + subTopicId}"></label>
                        </div>
                        <div class="close-controltopic">
                            <button></button>
                        </div>
                    </div>
                </div>`
            );
            subTopicId++;
        });
    }

    // edit text (ph2-addcourse-addcurriculum.html)
    $.fn.focusEnd = function () {
        $(this).focus();
        var tmp = $('<a />').appendTo($(this)),
            node = tmp.get(0),
            range = null,
            sel = null;

        if (document.selection) {
            range = document.body.createTextRange();
            range.moveToElementText(node);
            range.select();
        } else if (window.getSelection) {
            range = document.createRange();
            range.selectNode(node);
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
        tmp.remove();
        return this;
    }

    $(document).on('click', '.addcurric__subs .addcurric__main-title .edit', function (e) {
        e.preventDefault();
        $('.addcurric__subs .addcurric__main-title p a').attr('contenteditable', false);
        $(this).parents('.addcurric__subs .addcurric__main-title').find('a').attr('contenteditable', true);
        $(this).prev().find('a').focusEnd();
    });

    // exam
    $(document).on('click', '.dragwrapfinexam .addcurric__main-title .edit', function (e) {
        e.preventDefault();
        $('.dragwrapfinexam .addcurric__main-title p a').attr('contenteditable', false);
        $(this).parents('.dragwrapfinexam .addcurric__main-title').find('a').attr('contenteditable', true);
        $(this).prev().find('a').focusEnd();
    });
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.dragwrapfinexam .addcurric__main-title p').length && !$target.closest('.dragwrapfinexam .addcurric__main-title a').length) {
            $('.dragwrapfinexam .addcurric__main-title p a').attr('contenteditable', false);
        }
    });
    // ----



    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.addcurric__subs .addcurric__main-title p').length && !$target.closest('.addcurric__subs .addcurric__main-title a').length) {
            $('.addcurric__subs .addcurric__main-title p a').attr('contenteditable', false);
        }
    });

    $(document).on("paste", ".addcurric__subs .addcurric__main-title p a", function (e) {
        e.preventDefault();
        var text = e.originalEvent.clipboardData.getData("text/plain");
        document.execCommand("insertHTML", false, text);
    });









    $.fn.focusEnd1 = function () {
        $(this).focus();
        var tmp = $('<span />').appendTo($(this)),
            node = tmp.get(0),
            range = null,
            sel = null;

        if (document.selection) {
            range = document.body.createTextRange();
            range.moveToElementText(node);
            range.select();
        } else if (window.getSelection) {
            range = document.createRange();
            range.selectNode(node);
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
        tmp.remove();
        return this;
    }

    $(document).on('click', '.addcurric__main .addcurric__main-title .edit', function (e) {
        e.preventDefault();
        $('.addcurric__main .addcurric__main-title p span').attr('contenteditable', false);
        $(this).parents('.addcurric__main-title').find('span').attr('contenteditable', true);
        $(this).prev().find('span').focusEnd1();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.addcurric__main .addcurric__main-title a').length && !$target.closest('.addcurric__main .addcurric__main-title p').length) {
            $('.addcurric__main-title p span').attr('contenteditable', false);
        }
    });

    $(document).on("paste", ".addcurric__main .addcurric__main-title p span", function (e) {
        e.preventDefault();
        var text = e.originalEvent.clipboardData.getData("text/plain");
        document.execCommand("insertHTML", false, text);
    });



    // Add curriculum - edit topic name (ph2-addcourse-addcurriculum-filltabs.html)
    $('.sect-breadcrumbs__editbtn').click(function (e) {
        e.preventDefault();
        $(this).parents('.sect-breadcrumbs').find('.topicname').attr('contenteditable', true);
        $(this).prev().find('.topicname').focusEnd();
    });
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.topicname').length && !$target.closest('.sect-breadcrumbs__editbtn').length) {
            $('.sect-breadcrumbs .topicname').attr('contenteditable', false);
        }
    });

    // course settings - select (ph2-addcourse-addinformation.html)
    $(document).on('change', '.addcourse__select', function (e) {
        $('.coursesetting-label').addClass('show');
        var e = $(".addcourse__select :selected").text();
        $('.coursesetting-label span').text(e)
    });

    // links on tab links (ph2-addcourse-addcurriculum-viewadding-workshop.html)
    (function ($) {
        $(function () {
            var hash = window.location.hash;
            $('.nav-tabs a[href="' + hash + '"]').tab('show');
        });
        let tabLink = $('.addcoursecont-body .nav-link').attr("href");
        $(".extra-tab").click(function (event) {
            $(`.nav-tabs a[href=${tabLink}]`).tab('show');
            document.location.href = $(this).attr('href');
            return false;
        });
    })(jQuery)

    // delete row button 
    function checkCountRow() {
        if ($('.addcurric-currwrap').length > 1) {
            $('.addcurric__main-controls .close-control').addClass('removedis');
        } else {
            $('.addcurric__main-controls .close-control').removeClass('removedis');
        }
    }

    $(document).on('click', '.addlink.add-child', function () {
        checkCountRow()
    });
    $(document).on('click', '.addcurric__main-controls .close-control', function () {
        checkCountRow()
    });






    // 26.07 update

    // start quiz (ph2-addcourse-addcurriculum-filltabs.html)
    $('.startquizbtn').click(function (e) {
        e.preventDefault();
        $(this).addClass('hide');
        $('.quizsection__wrapp').addClass('show');
    });



    // VISUAL - NOT FOR FUNCTIONALITY

    // add question - ph2-addcourse-addcurriculum-filltabs.html
    const addQuestion = $('.quizsection__bottsect .darkbluebtn');

    var i = 1;
    $(addQuestion).on("click", function (e) {
        e.preventDefault();
        $('.quizsection__topsectwrap').append(`<div class="quizsection__topsect">
        <div class="quizsection__qw">
            <div class="quizsection__num">
                q${i + 1}
            </div>
            <div class="quizsection__text">
                <input type="text" placeholder="Type question">
            </div>
            <div class="quizsection__type">
                <select class="selectpicker">
                    <option value="0">Checkboxes</option>
                    <option value="1">Mutiple Choices</option>
                </select>
            </div>
        </div>
        <div class="quizsection__answers">
            <div class="quizsection__answerrow">
                <div class="checkblock">
                    <input type="checkbox" id="${'answ1' + i}" name="${'q1' + i}">
                    <label for="${'answ1' + i}"></label>
                </div>
                <div class="qwtext">
                    <input type="text" placeholder="Type answer">
                </div>
                <div class="qwbtns">
                    <button class="addqw"></button>
                    <button class="removeqw"></button>
                </div>
            </div>
            <div class="quizsection__answerrow">
                <div class="checkblock">
                    <input type="checkbox" id="${'answ2' + i}" name="${'q1' + i}">
                    <label for="${'answ2' + i}"></label>
                </div>
                <div class="qwtext">
                    <input type="text" placeholder="Type answer">
                </div>
                <div class="qwbtns">
                    <button class="addqw"></button>
                    <button class="removeqw"></button>
                </div>
            </div>
            <div class="quizsection__answerrow">
                <div class="checkblock">
                    <input type="checkbox" id="${'answ3' + i}" name="${'q1' + i}">
                    <label for="${'answ3' + i}"></label>
                </div>
                <div class="qwtext">
                    <input type="text" placeholder="Type answer">
                </div>
                <div class="qwbtns">
                    <button class="addqw"></button>
                    <button class="removeqw"></button>
                </div>
            </div>
        </div>
        <div class="quizsection__sett">
            <div class="quizsection__sett-switchbox">
                <div class="addvideo__switchwrap">
                    <div class="switch-control">
                        <input type="checkbox" id="${'switchsett1' + i}" />
                        <label for="${'switchsett1' + i}"></label>
                    </div>
                    <div class="addvideo__switchwrap-descr">
                        <label for="${'switchsett1' + i}">Show currect
                            answer</label>
                    </div>
                </div>
                <div class="addvideo__switchwrap">
                    <div class="switch-control">
                        <input type="checkbox" id="${'switchsett2' + i}" />
                        <label for="${'switchsett2' + i}"></label>
                    </div>
                    <div class="addvideo__switchwrap-descr">
                        <label for="${'switchsett2' + i}">Shuffle answer</label>
                    </div>
                </div>
            </div>
            <div class="quizsection__sett-btns">
                <a href="#" class="delete">Delete</a>
            </div>
        </div>
    </div>`);
        i++;

        // reinit select
        $('select').selectpicker();
    });

    $(document).on('click', '.quizsection__sett-btns a.delete', function (e) {
        e.preventDefault();

        if ($('.quizsection__topsect').length > 1) {
            $(this).parents('.quizsection__topsect').remove();
        }
    });

    $(document).on('click', '.quizsection__sett-btns a.delete', function (e) {
        for (var i = 0; i < $('.quizsection__topsect').length; i++) {
            $($('.quizsection__topsect')[i]).find('.quizsection__num').text('Q' + (i + 1));
        }
    });

    $('.quizsection__bottsect .darkbluebtn').click(function () {
        for (var i = 0; i < $('.quizsection__topsect').length; i++) {
            $($('.quizsection__topsect')[i]).find('.quizsection__num').text('Q' + (i + 1));
        }
    });



    // Final Exam (add new button) / drag&drop - ph2-add-final-topic-step1.htm

    const addExamBtn = $('.addnewexam-btnsect .addnewexbtn');

    var i = 1;
    $(addExamBtn).on("click", function (e) {
        e.preventDefault();
        $('.dragwrapfinexam').append(`
            <div class="dragitem">
                <div class="addcurric-currwrapsect">
                    <div class="addcurric__main">
                        <div class="addcurric__main-title">
                            <p><a href="ph2-addcourse-addcurriculum-filltabs.html">Exam Part ${i + 1}</a></p>
                            <a href="#" class="edit"></a>
                        </div>
                        <div class="addcurric__main-controls">
                            <div class="close-control">
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
        i++;
    });


    // drag&drop
    if ($('body *').is('.finalexam')) {
        var instance = $(".dragwrapfinexam").dad({
            draggable: ".finalexam",
        });
    }

    $(document).on('click', '.finalexam .close-control', function () {
        $(this).parents('.dragitem').remove();
    });


    const addQuestionEx = $('.finalexam__addbtn');

    var i = 1;
    $(addQuestionEx).on("click", function (e) {
        e.preventDefault();
        $('.quizsection__topsectwrap').append(`<div class="quizsection__topsect">
        <div class="quizsection__qw">
            <div class="quizsection__num">
                q${i + 1}
            </div>
            <div class="quizsection__text">
                <input type="text" placeholder="Type question">
            </div>
            <div class="quizsection__type">
                <select class="selectpicker">
                    <option value="0">Mutiple Choices</option>
                    <option value="1">Radioboxes</option>
                </select>
            </div>
        </div>
        <div class="quizsection__answers">
            <div class="quizsection__answerrow">
                <div class="checkblock">
                    <input type="checkbox" id="${'answ1' + i}" name="${'q1' + i}">
                    <label for="${'answ1' + i}"></label>
                </div>
                <div class="qwtext">
                    <input type="text" placeholder="Type answer">
                </div>
                <div class="qwbtns">
                    <button class="addqw"></button>
                    <button class="removeqw"></button>
                </div>
            </div>
            <div class="quizsection__answerrow">
                <div class="checkblock">
                    <input type="checkbox" id="${'answ2' + i}" name="${'q1' + i}">
                    <label for="${'answ2' + i}"></label>
                </div>
                <div class="qwtext">
                    <input type="text" placeholder="Type answer">
                </div>
                <div class="qwbtns">
                    <button class="addqw"></button>
                    <button class="removeqw"></button>
                </div>
            </div>
            <div class="quizsection__answerrow">
                <div class="checkblock">
                    <input type="checkbox" id="${'answ3' + i}" name="${'q1' + i}">
                    <label for="${'answ3' + i}"></label>
                </div>
                <div class="qwtext">
                    <input type="text" placeholder="Type answer">
                </div>
                <div class="qwbtns">
                    <button class="addqw"></button>
                    <button class="removeqw"></button>
                </div>
            </div>
        </div>
    </div>`);
        i++;

        // reinit select
        $('select').selectpicker();
    });




























});




