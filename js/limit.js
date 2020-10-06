$(function () {
    changeTitle("極限法 | method of limit (" + getTrialInfo() + ")");

    var ascending = initLightness();

    if (ascending) {
        $('#light-down').hide();
        var result = $("#verb").text().replace("adjusting", "increasing");
        $("#verb").text(result);
    } else {
        $('#light-up').hide();
        var result = $("#verb").text().replace("adjusting", "decreasing");
        $("#verb").text(result);
    }

    /** lightness control by arrow keys **/
    $("body").on("keydown", function (e) {
        switch (e.which) {
            case 37: // left key
                console.log("left");
                if (!ascending) lightDown();
                break;
            case 39: // right key
                console.log("right");
                if (ascending) lightUp();
                break;
            case 13: // enter key
                goNext();
                break;
            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
    $("#light-down").click(function () {
        if (!ascending) lightDown();
    });
    $("#light-up").click(function () {
        if (ascending) lightUp();
    });

    /** Record answer **/
    $("#next").click(function () {
        goNext();
    });
    function goNext() {
        recordAnswer(getLightness());
        goNextTrial("limit.html");
    }

    function initLightness() {
        var trial_count = String($.cookie("trial_count"));
        console.log("condition-" + trial_count);
        var lightness = $.cookie("condition-" + trial_count);
        updateLightness(lightness);
        console.log(lightness);

        return lightness == 0;
    }
});
