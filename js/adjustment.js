$(function () {
    changeTitle("調整法 | method of adjustment (" + getTrialInfo() + ")");

    initLightness();

    /** lightness control by arrow keys **/
    $("body").on("keydown", function (e) {
        switch (e.which) {
            case 37: // left key
                console.log("left");
                lightDown();
                break;
            case 39: // right key
                console.log("right");
                lightUp();
                break;
            case 13: // enter key
                goNext();
                break;
            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
    $("#light-down").click(function () {
        lightDown();
    });
    $("#light-up").click(function () {
        lightUp();
    });

    /** Record answer **/
    $("#next").click(function () {
        goNext();
    });
    function goNext() {
        recordAnswer(getLightness());
        goNextTrial("adjustment.html");
    }
});
