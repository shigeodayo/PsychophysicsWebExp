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
        if ($.cookie("experiment") == "adjustment")    return "result-adj.csv";
        else if ($.cookie("experiment") == "limit")    return "result-limit.csv";
        else if ($.cookie("experiment") == "constant") return "result-const.csv";
    }

    function getResult() {
        if ($.cookie("experiment") == "adjustment")    return fetchResult("adjustment");
        else if ($.cookie("experiment") == "limit")    return fetchLimitResult();
        else if ($.cookie("experiment") == "constant") return fetchResult("constant");
    }

    function fetchResult(methodName) {
        var data = methodName + ",0,75,75" + "\n";
        for (var i = 1; i <= $.cookie("trial_max"); i++) {
            data += $.cookie("condition-" + String(i)) + ",";
        }
        data = data.slice(0, -1);  // eliminate last char (',')
        data += '\n';

        for (var i = 1; i <= $.cookie("trial_max"); i++) {
            data += $.cookie("ans-" + String(i)) + ",";
        }
        data = data.slice(0, -1);  // eliminate last char (',')

        return data;
    }

    function fetchLimitResult() {
        var data = "limit,0,75,75" + "\n";

        for (var i = 1; i <= $.cookie("trial_max"); i++) {
            var cond = $.cookie("condition-" + String(i));
            if (cond == 0) data += "up,"
            else data += "down,"
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
