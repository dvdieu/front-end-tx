var TIMESPAN = function(data) {
    this.day = moment(0);
    if (lang === "vn") {
        this.day = moment.locale("vi");
    } else {
        this.day = moment.locale("en");
    }
    try {
        this.day = new moment(parseInt(data));
    } catch (E) {
        this.day = moment(0);
        console.log("Lỗi dữ liệu thời gian")
    }
};
TIMESPAN.prototype.getdatestring = function() {
    if (lang === "vn") {
        return this.day.format("DD/MM/YYYY HH:mm").toString();
    } else {
        return this.day.format("MM/DD/YYYY HH:mm").toString();
    }
}
;
var MANAGERAJAX = function() {
    this.request = [];
};
MANAGERAJAX.prototype.cancelRequest = function() {
    for (var i = 0; i < this.request.length; i++) {
        this.request[i].abort();
    }
}
;
function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ  |ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
    str = str.replace(/-+-/g, "-");
    str = str.replace(/^\-+|\-+$/g, "");
    return str;
}
(function(window) {
        $type = String;
        $type.__typeName = 'String';
        $type.__class = true;
        $prototype = $type.prototype;
        $prototype.endsWith = function String$endsWith(suffix) {
            return (this.substr(this.length - suffix.length) === suffix);
        }
        $prototype.startsWith = function String$startsWith(prefix) {
            return (this.substr(0, prefix.length) === prefix);
        }
        $prototype.trim = function String$trim() {
            return this.replace(/^\s+|\s+$/g, '');
        }
        $prototype.trimEnd = function String$trimEnd() {
            return this.replace(/\s+$/, '');
        }
        $prototype.trimStart = function String$trimStart() {
            return this.replace(/^\s+/, '');
        }
        $type.format = function String$format(format, args) {
            return String._toFormattedString(false, arguments);
        }
        $type._toFormattedString = function String$_toFormattedString(useLocale, args) {
            var result = '';
            var format = args[0];
            for (var i = 0; ; ) {
                var open = format.indexOf('{', i);
                var close = format.indexOf('}', i);
                if ((open < 0) && (close < 0)) {
                    result += format.slice(i);
                    break;
                }
                if ((close > 0) && ((close < open) || (open < 0))) {
                    if (format.charAt(close + 1) !== '}') {
                        throw new Error('format stringFormatBraceMismatch');
                    }
                    result += format.slice(i, close + 1);
                    i = close + 2;
                    continue;
                }
                result += format.slice(i, open);
                i = open + 1;
                if (format.charAt(i) === '{') {
                    result += '{';
                    i++;
                    continue;
                }
                if (close < 0)
                    throw new Error('format stringFormatBraceMismatch');
                var brace = format.substring(i, close);
                var colonIndex = brace.indexOf(':');
                var argNumber = parseInt((colonIndex < 0) ? brace : brace.substring(0, colonIndex), 10) + 1;
                if (isNaN(argNumber))
                    throw new Error('format stringFormatInvalid');
                var argFormat = (colonIndex < 0) ? '' : brace.substring(colonIndex + 1);
                var arg = args[argNumber];
                if (typeof (arg) === "undefined" || arg === null) {
                    arg = '';
                }
                if (arg.toFormattedString) {
                    result += arg.toFormattedString(argFormat);
                } else if (useLocale && arg.localeFormat) {
                    result += arg.localeFormat(argFormat);
                } else if (arg.format) {
                    result += arg.format(argFormat);
                } else
                    result += arg.toString();
                i = close + 1;
            }
            return result;
        }
        ;
        $type.b64EncodeUnicode = function(str) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
        }
        ;
        $type.b64DecodeUnicode = function(str) {
            return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        }
        ;
        $type.change_alias = function(str) {
            var str = alias;
            str = str.toLowerCase();
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ  |ợ|ở|ỡ/g, "o");
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            str = str.replace(/đ/g, "d");
            str = str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
            str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
            str = str.replace(/-+-/g, "-");
            str = str.replace(/^\-+|\-+$/g, "");
            return str;
        }
        ;
    }
)(window);
function imgError(image) {
    image.onerror = "";
    image.src = urlimg + "/bug-56.png";
    return true;
}
