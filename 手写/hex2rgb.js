;!function (str) {
    str.HEXtoRGB = function () {
        var col = this.slice(1).split('');
        if (/^[0-9A-Fa-f]{6}$/.test(col.join('')) || /^[0-9A-Fa-f]{3}$/.test(col.join(''))) {
            (col.length === 3) && !function () {
                for (i = -3; i < 0; i++) {
                    col.splice(i, 0, '' + col.slice(i)[0])
                }
            } ();
            return "rgb(" + parseInt(col.slice(0, 2).join(''), 16) + "," + parseInt(col.slice(2, 4).join(''), 16) + "," + parseInt(col.slice(4, 6).join(''), 16) + ")";
        } else { return "rgb(0,0,0)" };
    };
    str.RGBtoHEX = function () {
        var col = this.toUpperCase();
        col = col.replace(/^RGB\((\d{1,3}?)\,(\d{1,3}?)\,(\d{1,3}?)\)$/, function (core, $1, $2, $3) {
            var a = +$1, b = +$2, c = +$3, cache = "";
            (a < 256 && b < 256 && c < 256) ? cache = '#' + a.toString(16) + b.toString(16) + c.toString(16) : cache = "#000";
            return cache;
        })
        return col;
    }
}(String.prototype)