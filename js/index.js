$(document).ready(function() {
    $(".css-1m9jlih").click(function() {
        $(this).removeClass("css-1m9jlih").addClass("css-3456oa");
        $(this).parents(".css-1yv5pu4").find(".css-jj2p7w").show();
    });
});
$(document).ready(function() {
    $(".css-o4uon6").click(function() {
        $(this).removeClass("css-o4uon6").addClass("css-105acoa");
        $(this).parents(".css-1yv5pu4").find(".css-jj2p7w").show();
    });
});
//Close function of Zayavka Button
jQuery(function($) {
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".css-130kksu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.parents(".css-jj2p7w").hide();
            div.parents(".css-1yv5pu4").find(".css-3456oa").addClass("css-1m9jlih").removeClass("css-3456oa");
        }
    });
});