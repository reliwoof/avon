$(function () {
    $("#nav").hide();
    $("#konsultantka").hide();
    $(".kafelki").click(function(){
        var content = $(this).attr("data-name");
        $(".kafelki").fadeOut();
        $("#nav").fadeIn(function(){
            $("#"+content).show();
        });
    });
    
});