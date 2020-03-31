$(".paddle_forward").click(
    function(e) {
        e.preventDefault();
        $(".paddle_back").removeClass("hidden");
        tab_width = Math.round($(".tab_navigation_tabs").innerWidth());
        scroll_left = $(".tab_navigation_tabs").scrollLeft();
        $(".tab_navigation_tabs").animate({ scrollLeft: '+=' + tab_width, easing: "smoothstep" }, 1000);

        if ((scroll_left - tab_width) == 0) {
            $(this).addClass("hidden");
        }

    }
)
$(".paddle_back").click(
    function(e) {
        e.preventDefault();
        $(".paddle_forward").removeClass("hidden");
        tab_width = Math.round($(".tab_navigation_tabs").innerWidth());
        scroll_left = $(".tab_navigation_tabs").scrollLeft();
        $(".tab_navigation_tabs").animate({ scrollLeft: '-=' + tab_width, easing: "smoothstep" }, 1000);
        if ((scroll_left - tab_width) == 0 || (scroll_left - tab_width) < 0) {
            $(this).addClass("hidden");
        }
    }
)

$(".carousel_next").click(
    function(e) {
        e.preventDefault();
        cols = $(this).parents('.carousel_outer').find(".object_cell").length;
        col_width = $(this).parents('.carousel_outer').find(".object_cell").innerWidth();
        total_width = cols * col_width;
        $(this).parents('.carousel_outer').find(".carousel_prev").removeClass("hidden");
        tab_width = Math.round($(this).parents('.carousel_outer').find(".carousel_scrolling").innerWidth());
        scroll_left = $(this).parents('.carousel_outer').find(".carousel_scrolling").scrollLeft();
        $(this).parents('.carousel_outer').find(".carousel_scrolling").animate({ scrollLeft: '+=' + (tab_width + 4), easing: "smoothstep" }, 1000);
        if ((total_width - scroll_left) == 0 || (total_width - scroll_left) < tab_width * 2) {
            $(this).addClass("hidden");
        }

    }
)

$(".carousel_prev").click(
    function(e) {
        e.preventDefault();
        $(this).parents('.carousel_outer').find(".carousel_next").removeClass("hidden");
        tab_width = Math.round($(this).parents('.carousel_outer').find(".carousel_scrolling").innerWidth());
        scroll_left = $(this).parents('.carousel_outer').find(".carousel_scrolling").scrollLeft();
        $(this).parents('.carousel_outer').find(".carousel_scrolling").animate({ scrollLeft: '-=' + tab_width, easing: "smoothstep" }, 1000);
        if ((scroll_left - tab_width) == 0 || (scroll_left - tab_width) < 0) {
            $(this).addClass("hidden");
        }
    }
)
$(function() {
    $('.book_link').mouseover(function(e) {
        data_time = $(this).data('date');
        data_titles = $(this).data('titles');
        data_href = $(this).attr('href');
        data_author = $(this).data('author');
        data_format = $(this).data('format');
        data_category = $(this).data('category');
        data_isbn_13 = $(this).data('isbn-13');
        data_isbn_10 = $(this).data('isbn-10');
        data_publisher = $(this).data('publisher');
        data_publication_date = $(this).data('publication-date');
        data_language = $(this).data('language');
        data_pages = $(this).data('pages');
        data_html =
            '<div id="quick-view-box">' +
            '<div class="regular text-midnight-lighter quick-view-box--top--26Tmi">' +
            '<span class="dib a11 mt10 mb10 quick-view-box--published-above--1JvM3" >' +
            '<span> Последнее обновление: </span>' + data_time +
            '</span>' +
            '<a href="' + data_href + '" class="a10 bold text-midnight-light quick-view-box--title--3SbSa" >' +
            '<span>' + data_titles + '</span>' +
            '</a>' +
            '<div class="authors">By <span class="authors_all">' + data_author + '</span></div>' +
            '<div class="badge-with-context">' +
            '<span class="course-badge--course-badge--1AN7r course-badge--with-context--2v79N">' +
            '<span data-purpose="badge" class = "badge badge-accented yellow" >' +
            '<span class="badge-text">' + data_format + '</span>' +
            '</span>' +
            '</span>' +
            '<span class="context-info" data-purpose="context-info">' +
            '<span>in "<a href="#">' + data_category + '</a>"</span>' +
            '</span> ' +
            '</div>' +
            '</div>' +
            '<div class="oh fx-dc quick-view-box--bottom--RmaIC">' +
            '<div class="a11 mt15 df quick-view-box--objectives-container--1N2yT"><div class="cat_details">' + data_format + ' details</div>' +
            '<table class="quick-view-box-table">' +
            '<tr><td>ISBN-13: </td><td>' + data_isbn_13 + '</td></tr>' +
            '<tr><td>ISBN-13: </td><td>' + data_isbn_10 + '</td></tr>' +
            '<tr><td>Publisher: </td><td>' + data_publisher + '</td></tr>' +
            '<tr><td>Publication date: </td><td>' + data_publication_date + '</td></tr>' +
            '<tr><td>Language: </td><td>' + data_language + '</td></tr>' +
            '<tr><td>Format: </td><td>' + data_format + '</td></tr>' +
            '<tr><td>Pages: </td><td>' + data_pages + ' pages</td></tr>' +
            '</table >' +
            '</div>' +
            '<div class="popover_footer"><div class="pop_title">Limits on printing and copying</div>' +
            '<div class="pop_desc">The contents of the site, such as text, graphics, images and other materials are informational purposes only. All products and services are designed' +
            'for educational purposes only and must not be used for illegal purposes.</div>' +
            '</div></div>' +
            '</div>';

        $(this).popover({
            trigger: "manual",
            html: true,
            content: data_html
        });



    }).on("mouseenter", function() {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function() {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function() {
        var _this = this;
        if (!$(".popover:hover").length) {
            $(_this).popover("hide");
        }
    });
})