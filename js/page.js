$(".submenu").click(function() {
    hrf = "#" + $(this).data('href');
    event.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).toggleClass("active");
    $(hrf).siblings().removeClass("show");
    $(hrf).toggleClass("show");

    $("#panel").toggleClass("open");
})

<<<<<<< HEAD

$(function() {
    function zoom_in() {
        $('#publication').removeClass('zoomed');
        $('#flipper').css({
            'visibility': 'visible'
        })
        $('#zoom_slider').css({
            'visibility': 'hidden',
            'z-index': '0'
        });

        $('#zoom_slider .content').removeClass('zoomable-out').addClass('zoomable-in').css({
            'transform-origin': '0px 0px',
            'width': '1756px',
            'height': '1140px',
            'transform': 'scale(1) translate3d(0, 0, 0px)',
            'transition': 'none 0s ease 0s',
        });
    }

    function zoom_out(x, y) {
        topx = $("#flipper").offset().left;
        topy = $("#flipper").offset().top;
        m_y = Math.round(y - topy) * 1.35;
        m_x = Math.round(x - topx) * 1.5;
        $('#publication').addClass('zoomed');
        $('#zoom_slider').css({
            'visibility': 'visible',
            'z-index': '0'
        });
        $('#flipper').css({
            'visibility': 'hidden'
        })
        $('#zoom_slider .content').removeClass('zoomable-in').addClass('zoomable-out').css({
            'transform-origin': '0px 0px',
            'width': '1756px',
            'height': '1140px',
            'transform': 'scale(1) translate3d(-' + m_x + 'px, -' + m_y + 'px, 0px)',
            'transition': 'none 0s ease 0s',
        });

    }
=======
$(function() {
    var $mybook = $('#slider');
    var $bttn_next = $('#next_slide');
    var $bttn_prev = $('#prev_slide');
    var $loading = $('#loading');
    var $mybook_images = $mybook.find('img');
    var cnt_images = $mybook_images.length;
    var loaded = 0;
    //preload all the images in the book,
    //and then call the booklet plugin

    $mybook_images.each(function() {
        var $img = $(this);
        var $cont_width = ($("#content").outerWidth() - 100);
        var $img_width = $img.outerWidth();
        var $img_height = $img.outerHeight();
        var $cont_height = $cont_width * $img_height / $img_width;
        var source = $img.attr('src');
        $('<img/>').load(function() {
            ++loaded;
            if (loaded == cnt_images) {
                $loading.hide();
                $bttn_next.show();
                $bttn_prev.show();
                $mybook.show().booklet({
                    name: null, // name of the booklet to display in the document title bar
                    width: $cont_width, // container width
                    height: $cont_height / 2, // container height
                    speed: 600, // speed of the transition between pages
                    direction: 'LTR', // direction of the overall content organization, default LTR, left to right, can be RTL for languages which read right to left
                    startingPage: 0, // index of the first page to be displayed
                    easing: 'easeInOutQuad', // easing method for complete transition
                    easeIn: 'easeInQuad', // easing method for first half of transition
                    easeOut: 'easeOutQuad', // easing method for second half of transition

                    closed: true, // start with the book "closed", will add empty pages to beginning and end of book
                    closedFrontTitle: null, // used with "closed", "menu" and "pageSelector", determines title of blank starting page
                    closedFrontChapter: null, // used with "closed", "menu" and "chapterSelector", determines chapter name of blank starting page
                    closedBackTitle: null, // used with "closed", "menu" and "pageSelector", determines chapter name of blank ending page
                    closedBackChapter: null, // used with "closed", "menu" and "chapterSelector", determines chapter name of blank ending page
                    covers: false, // used with  "closed", makes first and last pages into covers, without page numbers (if enabled)

                    pagePadding: 0, // padding for each page wrapper
                    pageNumbers: false, // display page numbers on each page

                    hovers: false, // enables preview pageturn hover animation, shows a small preview of previous or next page on hover
                    overlays: false, // enables navigation using a page sized overlay, when enabled links inside the content will not be clickable
                    tabs: false, // adds tabs along the top of the pages
                    tabWidth: 60, // set the width of the tabs
                    tabHeight: 20, // set the height of the tabs
                    arrows: false, // adds arrows overlayed over the book edges
                    cursor: 'pointer', // cursor css setting for side bar areas

                    hash: false, // enables navigation using a hash string, ex: #/page/1 for page 1, will affect all booklets with 'hash' enabled
                    keyboard: true, // enables navigation with arrow keys (left: previous, right: next)
                    next: $bttn_next, // selector for element to use as click trigger for next page
                    prev: $bttn_prev, // selector for element to use as click trigger for previous page

                    menu: null, // selector for element to use as the menu area, required for 'pageSelector'
                    pageSelector: false, // enables navigation with a dropdown menu of pages, requires 'menu'
                    chapterSelector: false, // enables navigation with a dropdown menu of chapters, determined by the "rel" attribute, requires 'menu'

                    shadows: true, // display shadows on page animations
                    shadowTopFwdWidth: 166, // shadow width for top forward anim
                    shadowTopBackWidth: 166, // shadow width for top back anim
                    shadowBtmWidth: 50, // shadow width for bottom shadow

                    before: function() {}, // callback invoked before each page turn animation
                    after: function() {} // callback invoked after each page turn animation
                });

            }
        }).attr('src', source);
    });

});

$(function() {
>>>>>>> e46ea407612abeddf9ddd6e4e115bd5dac8e87a5

    // open in fullscreen
    $('a[name="toggle_fullscreen"]').click(function() {
        event.preventDefault();
        $('html').fullscreen();
        return false;
    });
    // exit fullscreen

<<<<<<< HEAD
    $('a[name="toggle_zoom"]').click(function() {
        event.preventDefault();

        if ($('#zoom_slider .content').hasClass('zoomable-in')) {
            zoom_out();
        } else {
            zoom_in();
        }


    });
    $("#zoom_slider .content").draggable({
        scroll: true,
        snapTolerance: 30,
        stack: "#content"
    });
    $("#zoom_slider .content").click(function() {
        zoom_in();
    });
    $("#flipper").click(function(event) {

        zoom_out(event.pageX, event.pageY);
    });



});



$(window).load(function() {
    var win = $(this); //this = window
    var win_height = win.outerHeight();
    var win_width = win.outerWidth();
    var img = $(".flippingPage img");

    var img_width = img.attr("width");
    var img_height = img.attr("height");
    var proportion = img_height / img_width;

    $("#publication_wrapper").css({
        height: win_height - 40,
        width: ((win_height - 40) / proportion) * 2,
        left: (win_width - win_height / proportion * 2) / 2
    })
})

$(window).resize(function() {
    var win = $(this); //this = window
    var win_height = win.outerHeight();
    var win_width = win.outerWidth();
    var img = $(".flippingPage img");

    var img_width = img.attr("width");
    var img_height = img.attr("height");
    var proportion = img_height / img_width;
    var proportion = img_height / img_width;
    if (44 < (win_width - win_height / proportion * 2) / 2) {
        $("#publication_wrapper").css({
            height: win_height - 40,
            width: ((win_height - 40) / proportion) * 2,
            left: (win_width - win_height / proportion * 2) / 2
        });
    } else {
        $("#publication_wrapper").css({
            width: (win_width - 144),
            height: (win_width - 144) / proportion,
            left: 44
        });
    }
=======
>>>>>>> e46ea407612abeddf9ddd6e4e115bd5dac8e87a5
});