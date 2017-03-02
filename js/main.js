$(document).ready(function() {
    $("#compare-panel-btn").click(function() {
        $("#compare-panel").show(200);
        $("#compare-panel-btn").hide();
    });
    
    $("#suggest-submit").click(function () {
        var input = $("#suggest").val();
        if (input.length == 0) {
            $("#suggest-result").addClass("alert-danger");
            $("#suggest-result").removeClass("alert-success");
            $("#suggest-result").html("No input entered, please try again.");
            $("#suggest-result").show();
        }
        else {
            $("#suggest-result").addClass("alert-success");
            $("#suggest-result").removeClass("alert-danger");
            $("#suggest-result").html("Success!");
            $("#suggest-result").show();
        }
    })
});