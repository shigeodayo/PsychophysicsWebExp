$(function () {
    $("#download").click(function () {
        download();
    });

    // https://into-the-program.com/javascript-download-csv/
    function download() {
        const filename = getFilename();

        var data = getResult();
        const bom = new Uint8Array([0xef, 0xbb, 0xbf]);  // add BOM to prevend character corruption
        const blob = new Blob([bom, data], { type: "text/ csv" });

        if (window.navigator.msSaveBlob) {  // for IE10/11
            window.navigator.msSaveBlob(blob, filename);
        } else {
            const url = (window.URL || window.webkitURL).createObjectURL(blob);  // Create URL from Blob
            const download = document.createElement("a");  // Create a link for download
            download.href = url;  // Specify URL
            download.download = filename;  // Slecify filename
            download.click();  // Execute download
            (window.URL || window.webkitURL).revokeObjectURL(url);
        }
    }

    function getFilename() {
        var userId = $.cookie("name");
        if ($.cookie("experiment") == "adjustment")    return "result-adj_" + userId + ".csv";
        else if ($.cookie("experiment") == "limit")    return "result-limit_" + userId + ".csv";
        else if ($.cookie("experiment") == "constant") return "result-const_" + userId + ".csv";
    }

    function getResult() {
        if ($.cookie("experiment") == "adjustment") return fetchResult("adjustment");
        else if ($.cookie("experiment") == "limit") return fetchResult("limit");
        else if ($.cookie("experiment") == "constant") return fetchResult("constant");
    }

    function fetchResult(methodName) {
        var userId = $.cookie("name");
        var elapsedTime = Date.now() - $.cookie("start");
        var data = methodName + "," + userId + "," + elapsedTime + "\n";

        if (methodName == "limit") {
            for (var i = 1; i <= $.cookie("trial_max"); i++) {
                var cond = $.cookie("condition-" + String(i));
                if (cond == 0) data += "up,"
                else data += "down,"
            }
        } else {
            for (var i = 1; i <= $.cookie("trial_max"); i++) {
                data += $.cookie("condition-" + String(i)) + ",";
            }
        }
        data = data.slice(0, -1);  // eliminate last char (',')
        data += '\n';

        for (var i = 1; i <= $.cookie("trial_max"); i++) {
            data += $.cookie("ans-" + String(i)) + ",";
        }
        data = data.slice(0, -1);  // eliminate last char (',')

        return data;
    }
});
