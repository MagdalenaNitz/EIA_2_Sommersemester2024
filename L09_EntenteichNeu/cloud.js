"use strict";
var Ententeich;
(function (Ententeich) {
    class Cloud {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            this.x += 1;
            if (this.x > Ententeich.crc2.canvas.width) {
                this.x = -100;
            }
        }
        draw() {
            Ententeich.crc2.save();
            Ententeich.crc2.translate(this.x, this.y);
            Ententeich.crc2.beginPath();
            Ententeich.crc2.moveTo(150, 0);
            Ententeich.crc2.lineTo(0, 0);
            Ententeich.crc2.ellipse(50, 0, 40, 30, 0, Math.PI, 0, false);
            Ententeich.crc2.ellipse(100, 0, 60, 60, 0, Math.PI, 0, false);
            Ententeich.crc2.ellipse(170, 0, 50, 30, 0, Math.PI, 0, false);
            Ententeich.crc2.closePath();
            let cloudColor = "white";
            Ententeich.crc2.fillStyle = cloudColor;
            Ententeich.crc2.fill();
            Ententeich.crc2.restore();
        }
    }
    Ententeich.Cloud = Cloud;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=cloud.js.map