$(function() {
    var x;
    var b1 = $('[num=1]');
    var b2 = $('[num=2]');
    var b3 = $('[num=3]');
    var b4 = $('[num=4]');
    var container = $('.public-container');
    b1.click(function() {
        x = 1;
        $('[blog=2]').fadeOut('slow');
        $('[blog=3]').fadeOut('slow');
        $('[blog=4]').fadeOut('slow');
        $('.index-info').fadeOut('slow');
        container.css("background-image", "url(image/1.jpg)");
        container.css("background-size", "cover");
        $('[blog=1]').fadeOut('slow');
        $('[body=1]').show(1000);
        $('.public-overflow').hide();
    })
    b2.click(function() {
        x = 2;
        $('[blog=1]').fadeOut('slow');
        $('[blog=3]').fadeOut('slow');
        $('[blog=4]').fadeOut('slow');
        $('.index-info').fadeOut('slow');
        container.css("background-image", "url(image/2.jpg)");
        container.css("background-size", "cover");
        $('[blog=2]').fadeOut('slow');
        $('[body=2]').show(1000);
        $('.public-overflow').hide();
    })
    b3.click(function() {
        x = 3;
        $('[blog=1]').fadeOut('slow');
        $('[blog=2]').fadeOut('slow');
        $('[blog=4]').fadeOut('slow');
        $('.index-info').fadeOut('slow');
        container.css("background-image", "url(image/3.jpg)");
        container.css("background-size", "cover");
        $('[blog=3]').fadeOut('slow');
        $('[body=3]').show(1000);
        $('.public-overflow').hide();
    })
    b4.click(function() {
        x = 4;
        $('[blog=1]').fadeOut('slow');
        $('[blog=2]').fadeOut('slow');
        $('[blog=3]').fadeOut('slow');
        $('.index-info').fadeOut('slow');
        container.css("background-image", "url(image/4.jpg)");
        container.css("background-size", "cover");
        $('[blog=4]').fadeOut('slow');
        $('[body=4]').show(1000);
        $('.public-overflow').hide();
    })
    var back = $('.index-logo')
    back.click(function() {
        $('.public-overflow').show();
        $('[body=' + x + ']').hide(1000);
        container.css("background", "#fff");
        $('[blog=1]').fadeIn('slow');
        $('[blog=2]').fadeIn('slow');
        $('[blog=3]').fadeIn('slow');
        $('[blog=4]').fadeIn('slow');
        $('.index-info').fadeIn('slow');
    })
})