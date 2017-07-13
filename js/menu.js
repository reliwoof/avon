$(function () {
    $("#nav").hide();
    $("#konsultantka, #klient").hide();

    $(".kafelki2").click(function () {
        var content = $(this).attr("data-name");
        $(".kafelki").fadeOut();
        $("#nav div[data-name=" + content + "]").children("span").removeClass("menu").addClass("menu2");
        $("#nav").fadeIn(function () {
            $("#" + content).fadeIn(200);
        });

    });
    $("#nav div").click(function () {
        var content = $(this).attr("data-name");
        if ($("#" + content).css('display') == 'none' && $("#" + content).siblings().css('opacity') == 1) {
            $(this).children("span").toggleClass("menu menu2");
            $("#nav div[data-name!=" + content + "]").children("span").removeClass("menu2").addClass("menu");
            $("#content section[id!=" + content + "]").fadeOut(200, function () {
                $("#" + content).fadeIn(200);
            });
        }
    });
});
