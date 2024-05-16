"use strict";
var duckPond;
(function (duckPond) {
    class Cloud {
        x;
        y;
        constructor(_x, _y) {
            console.log("Cloud Constructor");
            this.x = _x;
            this.y = _y;
        }
        move() {
            console.log("cloud move");
            this.x += 1;
            if (this.x > duckPond.crc2.canvas.width) {
                this.x = -50;
            }
        }
        draw() {
            console.log("Cloud draw");
            let nParticles = 30;
            let cloudWidth = 120;
            let cloudHeight = 40;
            let random = this.pseudoRandom(42);
            duckPond.crc2.save();
            duckPond.crc2.translate(this.x, this.y);
            duckPond.crc2.restore();
            for (let i = 0; i < nParticles; i++) {
                let x = this.x + (i * (cloudWidth / nParticles));
                let y = this.y + (random() * cloudHeight);
                this.drawCloudParticle(x, y);
            }
        }
        drawCloudParticle(x, y) {
            let gradient = duckPond.crc2.createRadialGradient(x, y, 0, x, y, 15);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            duckPond.crc2.save();
            duckPond.crc2.beginPath();
            duckPond.crc2.arc(x, y, 15, 0, 2 * Math.PI);
            duckPond.crc2.fillStyle = gradient;
            duckPond.crc2.fill();
            duckPond.crc2.restore();
        }
        pseudoRandom(seed) {
            let value = seed;
            return function () {
                value = (value * 9301 + 49297) % 233280;
                return value / 233280;
            };
        }
    }
    duckPond.Cloud = Cloud;
})(duckPond || (duckPond = {}));
//# sourceMappingURL=Cloud.js.map