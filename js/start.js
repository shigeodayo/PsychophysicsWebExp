$(function () {
    const REPETITION = 4;

    $.cookie("check_cookie", true);
    if (!$.cookie("check_cookie")) {
        alert("Please enable cookie before starting the experiment.");
    }

    /** Start the experiment **/
    $("#start_adjustment").click(function () {
        initialize();
        initAdjustment();
        window.location.href = "adjustment.html";
    });
    $("#start_limit").click(function () {
        initialize();
        initLimit();
        window.location.href = "limit.html";
    });
    $("#start_constant").click(function () {
        initialize();
        initConstant();
        window.location.href = "constant.html";
    });
    function initialize() {
        // alert("Start the experiment.");

        start = Date.now();
        id = "sy_" + generateStringRandomly();
        $.cookie("start", start);
        $.cookie("name", id);
        $.cookie("trial_count", 1);
        console.log(id);
        console.log(start);
    }
    function initLimit() {
        var condition = shuffleArray([0, 0, 100, 100]);  // todo
        // alert(condition);
        for (var i = 0; i < REPETITION; i++) {
            $.cookie("condition-" + String((i + 1)), condition[i]);
        }

        $.cookie("trial_max", REPETITION);
        $.cookie("experiment", "limit");
    }
    function initAdjustment() {
        var condition = shuffleArray([randInt(0, 75), randInt(0, 75),
                                      randInt(75, 100), randInt(75, 100)]);  // todo
        // alert(condition);
        for (var i = 0; i < REPETITION; i++) {
            $.cookie("condition-" + String((i + 1)), condition[i]);
        }

        $.cookie("trial_max", REPETITION);
        $.cookie("experiment", "adjustment");
    }

    function initConstant() {
        //   var sample = [10, 30, 50, 70, 90]; // todo
        var sample = [10, 20, 30, 40, 50, 60, 70, 80, 90]; // todo
        var condition = [];

        for (var i = 0; i < REPETITION; i++) {
            condition = condition.concat(shuffleArray(sample));
        }
        // alert(condition);

        for (var i = 0; i < REPETITION * sample.length; i++) {
            $.cookie("condition-" + String(i + 1), condition[i]);
        }

        $.cookie("trial_max", REPETITION * sample.length);
        $.cookie("experiment", "constant");
    }

    function generateStringRandomly() {
        var l = 6;
        // 生成する文字列に含める文字セット
        var c = "abcdefghijklmnopqrstuvwxyz0123456789";
        var cl = c.length;
        var r = "";
        for (var i = 0; i < l; i++) {
            r += c[Math.floor(Math.random() * cl)];
        }
        return r;
    }

    // https://murashun.jp/blog/20191110-24.html
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            [array[i], array[rand]] = [array[rand], array[i]];
        }
        return array;
    }

    function randInt(start, end) {
        return start + Math.floor(Math.random() * (end - start + 1));
    }
});
