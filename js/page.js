$(".submenu").click(function() {
    hrf = "#" + $(this).data('href');
    event.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).toggleClass("active");
    $(hrf).siblings().removeClass("show");
    $(hrf).toggleClass("show");

    $("#panel").toggleClass("open");
})


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

    // open in fullscreen
    $('a[name="toggle_fullscreen"]').click(function() {
        event.preventDefault();
        $('html').fullscreen();
        return false;
    });
    // exit fullscreen

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
    } ===
    ===
    = >>>
    >>>
    >
    e46ea407612abeddf9ddd6e4e115bd5dac8e87a5
});