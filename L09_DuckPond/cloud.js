"use strict";
var duckPond;
(function (duckPond) {
    class Cloud {
        position;
        color;
        size;
        constructor() {
            console.log("Cloud Constructor");
        }
        move() {
            console.log("Cloud move");
        }
        draw() {
            console.log("Cloud draw");
            let nParticles = 30;
            let cloudWidth = 120;
            let cloudHeight = 40;
            let xPosition = 40;
            let yPosition = 50;
            let random = duckPond.pseudoRandom(42);
            for (let i = 0; i < nParticles; i++) {
                let x = xPosition + (i * (cloudWidth / nParticles));
                let y = yPosition + (random() * cloudHeight);
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