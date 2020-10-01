$(function () {
    initLightness();

    /** Record answer **/
    $("#reference").click(function () {
        recordAnswer("reference");
        goNextTrial("constant.html");
    });
    $("#sample").click(function () {
        recordAnswer("sample");
        goNextTrial("constant.html");
    });
});
