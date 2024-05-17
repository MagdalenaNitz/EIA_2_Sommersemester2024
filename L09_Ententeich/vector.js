"use strict";
var duckPond;
(function (duckPond) {
    class Vector {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        add(vector) {
            this.x += vector.x;
            this.y += vector.y;
        }
        scale(scalar) {
            this.x *= scalar;
            this.y *= scalar;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    duckPond.Vector = Vector;
})(duckPond || (duckPond = {}));
//# sourceMappingURL=vector.js.map