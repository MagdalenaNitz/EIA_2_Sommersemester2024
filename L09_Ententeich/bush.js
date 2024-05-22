"use strict";
var duckPond;
(function (duckPond) {
    class Bush {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            duckPond.crc2.save();
            duckPond.crc2.beginPath();
            duckPond.crc2.translate(0, 270);
            duckPond.crc2.fillStyle = "green";
            duckPond.crc2.beginPath();
            duckPond.crc2.moveTo(0, 0);
            duckPond.crc2.lineTo(10, -20);
            duckPond.crc2.lineTo(40, -35);
            duckPond.crc2.lineTo(60, -45);
            duckPond.crc2.lineTo(80, -40);
            duckPond.crc2.lineTo(100, -30);
            duckPond.crc2.lineTo(110, -5);
            duckPond.crc2.lineTo(100, 0);
            duckPond.crc2.lineTo(80, 5);
            duckPond.crc2.lineTo(60, 5);
            duckPond.crc2.lineTo(40, 5);
            duckPond.crc2.lineTo(10, 5);
            duckPond.crc2.lineTo(0, 0);
            duckPond.crc2.closePath();
            duckPond.crc2.fill();
            duckPond.crc2.restore;
        }
    }
    duckPond.Bush = Bush;
})(duckPond || (duckPond = {}));
//# sourceMappingURL=Bush.js.map