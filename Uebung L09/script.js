"use strict";
var UebungL09;
(function (UebungL09) {
    class Vector {
        x;
        y;
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x *= _addend.x;
            this.y *= _addend.y;
        }
    }
    let v1 = new Vector();
    v1.scale(2);
    console.log(v1);
})(UebungL09 || (UebungL09 = {}));
//# sourceMappingURL=script.js.map