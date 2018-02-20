var source="gameduathu";
function getLever(lv,tag,color) {
    var t = new AJAXWRAPPER();
    t.URL="//125.212.254.131:3001/top/"+source+"?lever="+lv;
    t.getDataFromURL(
        function () {
            $("#lever-"+lv).html("");
        },
        function (x) {
            var data = JSON.parse(x);
            if(data.length>0){
                for(var i=0;i<data.length;i++) {
                    let thumb = "thumb_up";
                    if(data[i].label==="X" || data[i].label==="x"){
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
                        '                        </div>',color,data[i].index,thumb);

                    $("#"+tag).append(x);
                }
            }
        },
        function (data) {
        }
    );
}

$(document).ready(function () {
    getLever(4,"lever-4","blue");
    setInterval(function () {
        getLever(4,"lever-4","blue");
    },30000);
    getLever(5,"lever-5","green");
    setInterval(function () {
        getLever(5,"lever-5","green");
    },30000);
    getLever(6,"lever-6","orange");
    setInterval(function () {
        getLever(6,"lever-6","orange");
    },30000);
});

$(document).on("click",".top-game",function(self) {
    source = $(this).data('source');
    $("#lever-4").html("");
    getLever(4,"lever-4","blue");
    $("#lever-5").html("");
    getLever(5,"lever-5","green");
    $("#lever-6").html("");
    getLever(6,"lever-6","orange");
});