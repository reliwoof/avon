$(function () {
    $("#nav").hide();
    $("#konsultantka, #klient").hide();

    $(".kafelki").click(function(){
        var content = $(this).attr("data-name");
        $(".kafelki").fadeOut();
        $("#nav").fadeIn(function(){
            $("#"+content).show();
        });
    });
    $("#nav span").click(function(){
      $("#konsultantka, #klient").hide();
      $("#nav").fadeOut();
      $(".kafelki").fadeIn();
    });
});
