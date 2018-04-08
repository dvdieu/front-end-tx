var source = "gowin";
var url = "http://125.212.254.131:3001";

function getLever(lv, tag, color) {
    var t = new AJAXWRAPPER();
    t.URL = url + "/top/" + source + "?lever=" + lv;
    t.getDataFromURL(
        function () {
            $("#lever-" + lv).html("");
        },
        function (x) {
            var data = JSON.parse(x);
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    let thumb = "thumb_up";
                    if (data[i].label === "X" || data[i].label === "x") {
                        thumb = "thumb_down";
                    }
                    var x = String.format('<div class="col-sm-2"  style="padding: 20px;">\n' +
                        '                          <div class="card-header" data-background-color={0}>\n' +
                        '                              <span href="#" class="text-center">\n' +
                        '                                      {1}\n' +
                        '                                      <i class="material-icons" style="\n' +
                        '                                      position: absolute;bottom: 20px;\n' +
                        '                                      right: 20px;">{2}</i>\n' +
                        '                                    </span>\n' +
                        '                          </div>\n' +
                        '                        </div>', color, data[i].index, thumb);

                    $("#" + tag).append(x);
                }
            }
        },
        function (data) {
        }
    );
}

$(document).ready(function () {
    getLever(4, "lever-4", "blue");
    setInterval(function () {
        getLever(4, "lever-4", "blue");
    }, 30000);
    getLever(5, "lever-5", "green");
    setInterval(function () {
        getLever(5, "lever-5", "green");
    }, 30000);
    getLever(6, "lever-6", "orange");
    setInterval(function () {
        getLever(6, "lever-6", "orange");
    }, 30000);
    getLever(7, "lever-7", "orange");
    setInterval(function () {
        getLever(7, "lever-7", "orange");
    }, 30000);
    getLever(8, "lever-8", "orange");
    setInterval(function () {
        getLever(8, "lever-8", "orange");
    }, 30000);
    getLever(9, "lever-9", "orange");
    setInterval(function () {
        getLever(9, "lever-9", "orange");
    }, 30000);
    getLever(10, "lever-10", "orange");
    setInterval(function () {
        getLever(10, "lever-10", "orange");
    }, 30000);
    getLever(11, "lever-11", "orange");
    setInterval(function () {
        getLever(11, "lever-11", "orange");
    }, 30000);
    getLever(12, "lever-12", "orange");
    setInterval(function () {
        getLever(12, "lever-12", "orange");
    }, 30000);
    getLever(13, "lever-13", "orange");
    setInterval(function () {
        getLever(13, "lever-13", "orange");
    }, 30000);
    getLever(14, "lever-14", "orange");
    setInterval(function () {
        getLever(14, "lever-14", "orange");
    }, 30000);
    getLever(15, "lever-15", "orange");
    setInterval(function () {
        getLever(15, "lever-15", "orange");
    }, 30000);
});

$(document).on("click", ".top-game", function (self) {
    source = $(this).data('source');
    $("#lever-4").html("");
    getLever(4, "lever-4", "blue");
    $("#lever-5").html("");
    getLever(5, "lever-5", "green");
    $("#lever-6").html("");
    getLever(6, "lever-6", "orange");
    $("#lever-7").html("");
    getLever(7, "lever-7", "orange");
    $("#lever-8").html("");
    getLever(8, "lever-8", "orange");
    $("#lever-9").html("");
    getLever(9, "lever-9", "orange");
    $("#lever-10").html("");
    getLever(10, "lever-10", "orange");
    $("#lever-11").html("");
    getLever(11, "lever-11", "orange");
    $("#lever-12").html("");
    getLever(12, "lever-12", "orange");
    $("#lever-13").html("");
    getLever(13, "lever-13", "orange");
    $("#lever-14").html("");
    getLever(14, "lever-14", "orange");
    $("#lever-45").html("");
    getLever(15, "lever-15", "orange");
});