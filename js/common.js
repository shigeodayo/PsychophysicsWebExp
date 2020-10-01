function recordAnswer(answer) {
    var trialCount = $.cookie("trial_count");
    $.cookie("ans-" + String(trialCount), answer);
    // alert("ans-" + String(trialCount));
    // alert(answer);
}

function goNextTrial(url) {
    var trialCount = $.cookie("trial_count");
    if (trialCount == $.cookie("trial_max")) {
        window.location.href = "download.html";
        return;
    }
    $.cookie("trial_count", ++trialCount);
    window.location.href = url;
}

/** lightness **/
function initLightness() {
    var trialCount = String($.cookie("trial_count"));
    console.log("condition-" + trialCount);
    var lightness = $.cookie("condition-" + trialCount);
    updateLightness(lightness);
    console.log(lightness);
}
function lightDown() {
    var newLightness = Math.max(0, getLightness() - 1);
    updateLightness(newLightness);
}
function lightUp() {
    var newLightness = Math.min(100, getLightness() + 1);
    updateLightness(newLightness);
}
function getLightness() {
    var bgColor = $('#box_sample').css('background-color');
    var rgb = bgColor.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    return Math.round(rgb2hsl(rgb[1], rgb[2], rgb[3])[2] * 100);
}
function updateLightness(lightness) {
    var hslText = "hsl(180,75%," + lightness + "%)";
    console.log(hslText);
    $("#box_sample").css({ "background-color": hslText });
}
function rgb2hsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var diff = max - min;

    var h = 0;
    var l = (max + min) / 2;
    var s = diff / (1 - (Math.abs(max + min - 1)));

    switch (min) {
        case max:
            h = 0;
            break;
        case r:
            h = (60 * ((b - g) / diff)) + 180;
            break;
        case g:
            h = (60 * ((r - b) / diff)) + 300;
            break;
        case b:
            h = (60 * ((g - r) / diff)) + 60;
            break;
    }
    return [h, s, l];
}
