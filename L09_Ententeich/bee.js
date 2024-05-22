"use strict";
var duckPond;
(function (duckPond) {
    class Bee {
        x;
        y;
        color;
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.draw();
        }
        move() {
            this.x += 1;
            this.y -= 1;
            if (this.x > duckPond.crc2.canvas.width) {
                this.x = 0;
            }
        }
        draw() {
            duckPond.crc2.save();
            duckPond.crc2.beginPath();
            duckPond.crc2.translate(this.x, this.y);
            duckPond.crc2.fillStyle = this.color;
            duckPond.crc2.ellipse(35, 35, 10, 5, 0, 0, 2 * Math.PI);
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            duckPond.crc2.restore();
        }
    }
    duckPond.Bee = Bee;
})(duckPond || (duckPond = {}));
//# sourceMappingURL=Bee.js.map