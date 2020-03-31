$(".css-1m9jlih").click(function() {
    $(".css-137s5mo").show();
})

$(".css-n1urd, .css-1a100vq").click(function() {
    $(".css-137s5mo").hide();
});
$('select.css-1g47lih').on('change', function() {
    $('.css-1nmemlz').text($(this).find(":selected").text());
});

$('.css-1l9pstc').on('change', function() {
    if ($(this).is(":checked")) {
        $('.changing_block .css-13azwyo').html('<input type="text" class="css-ilfk8w" name="slug" id="slug" autocomplete="off" spellcheck="false" value="presentation">');
        $('.changing_block .css-1hlzq62').addClass('css-2hpgh1').removeClass('css-1hlzq62');
        $('.valid_text').show();
    } else {
        $('.changing_block .css-13azwyo').html('<input type="text" class="css-17a46ms" name="slug" id="slug" autocomplete="off" spellcheck="false" value="https://view.publitas.com/aas-edqx_l_kvok9/presentation" readonly="">');
        $('.changing_block .css-2hpgh1').addClass('css-1hlzq62').removeClass('css-2hpgh1');
        $('.valid_text').hide();
    }

});