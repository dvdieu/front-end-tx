
function getLever(lv,tag) {
    var t = new AJAXWRAPPER();
    t.URL="http://localhost:3001/top?lever="+lv;
    t.getDataFromURL(
        function () {
            $("#lever-4").html("");
        },
        function (x) {
            var data = JSON.parse(x);
            if(data.length>0){
                for(var i=0;i<data.length;i++) {
                    var x = String.format('<div class="col-sm-2"  style="padding: 20px;">\n' +
                        '                          <div class="card-header" data-background-color="orange">\n' +
                        '                              <span class="text-center" style="font-size: larger">{0}</span>\n' +
                        '                          </div>\n' +
                        '                        </div>',data[i].index);
                    $("#"+tag).append(x);
                }
            }
        },
        function (data) {
        }
    );
}

$(document).ready(function () {
    getLever(4,"lever-4");
    setInterval(function () {
        getLever(4,"lever-4");
    },30000);

});