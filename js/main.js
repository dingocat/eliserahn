$(document).ready(function() {
    $("#image1").fadeIn("slow");
    $("#image2").fadeOut("fast");
    $("#image3").fadeOut("fast");

    $("#thumb1").click(function() {
        $("#image1").fadeIn("slow");
        $("#image2").fadeOut("fast");
        $("#image3").fadeOut("fast");
    });
    $("#thumb2").click(function() {
        $("#image1").fadeOut("fast");
        $("#image2").fadeIn("slow");
        $("#image3").fadeOut("fast");
    });
    $("#thumb3").click(function() {
        $("#image1").fadeOut("fast");
        $("#image2").fadeOut("fast");
        $("#image3").fadeIn("slow");
    });
});