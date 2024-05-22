"use strict";
var Ententeich;
(function (Ententeich) {
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
            if (this.x > Ententeich.crc2.canvas.width) {
                this.x = 0;
            }
        }
        draw() {
            Ententeich.crc2.save();
            Ententeich.crc2.beginPath();
            Ententeich.crc2.translate(this.x, this.y);
            Ententeich.crc2.fillStyle = this.color;
            Ententeich.crc2.ellipse(35, 35, 10, 5, 0, 0, 2 * Math.PI);
            Ententeich.crc2.fill();
            Ententeich.crc2.closePath();
            Ententeich.crc2.restore();
        }
    }
    Ententeich.Bee = Bee;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=bee.js.map