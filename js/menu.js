$(function () {
    $("#nav").hide();
    $("#fzgloszeniowy").hide();
    $("#fkontakt").hide();
    $("#fzamowienie").hide();
    $("#fkontakt2").hide();
    $("#konsultantka, #klient").hide();

    $(".kafelki2").click(function () {
        var content = $(this).attr("data-name");
        $(".kafelki").fadeOut();
        $("#nav div[data-name=" + content + "]").children("span")
                .removeClass("menu").addClass("menu2");
        $("#nav").fadeIn(function () {
            $("#" + content).fadeIn(200);
        });

    });
    $("#nav div").click(function () {
        var content = $(this).attr("data-name");
        if ($("#" + content).css('display') == 'none' && $("#" + content).siblings().css('opacity') == 1) {
            $(this).children("span").toggleClass("menu menu2");
            $("#nav div[data-name!=" + content + "]").children("span")
                    .removeClass("menu2").addClass("menu");
            $("#content section[id!=" + content + "]").fadeOut(200, function () {
                $("#" + content).fadeIn(200);
            });
        }
    });
    $(".klik").css({"color":"rgb(213,68,181)"});
    $("#klik").click(function(){
        $(this).siblings("div").removeClass("clicked");
        $("#fkontakt").hide();
        $("#fzgloszeniowy").stop().fadeToggle();
        $(this).toggleClass("clicked");
    });
    $("#klik1").click(function(){
        $(this).siblings("div").removeClass("clicked");
        $("#fzgloszeniowy").hide();
        $("#fkontakt").stop().fadeToggle();
        $(this).toggleClass("clicked");
    });
    
    $("#klik2").click(function(){
        $(this).siblings("div").removeClass("clicked");
        $("#fkontakt2").hide();
        $("#fzamowienie").stop().fadeToggle();
        $(this).toggleClass("clicked");
    });
    $("#klik22").click(function(){
        $(this).siblings("div").removeClass("clicked");
        $("#fzamowienie").hide();
        $("#fkontakt2").stop().fadeToggle();
        $(this).toggleClass("clicked");
    });
    
});
