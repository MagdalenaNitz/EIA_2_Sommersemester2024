"use strict";
var duckPond;
(function (duckPond) {
    class Bird {
        x;
        y;
        xFlying;
        yFlying;
        direction;
        size;
        constructor(_x, _y, _xFlying, _yFlying, _size, _direction) {
            //console.log("Bird Constructor")
            this.x = _x;
            this.y = _y;
            this.xFlying = _xFlying;
            this.yFlying = _yFlying;
            this.size = _size;
            this.direction = _direction;
        }
        move() {
            let randomX = (Math.random() * 10 - 1) * 10;
            if (randomX < 0) {
                randomX *= -1; // Umdrehen der X-Komponente, um sicherzustellen, dass sie positiv ist
            }
            // Bewegung basierend auf der Richtung
            this.xFlying -= this.direction.x;
            this.yFlying -= this.direction.y;
            this.x += this.direction.x;
            this.y += this.direction.y;
            // Wenn der Vogel den Canvas verlässt, erscheint er auf der gegenüberliegenden Seite
            if (this.x > duckPond.crc2.canvas.width) {
                this.x = 0;
            }
            else if (this.x < 0) {
                this.x = duckPond.crc2.canvas.width;
            }
            if (this.xFlying >= 300 || this.xFlying <= 50) {
                this.direction.x *= -1;
            }
        }
        draw() {
            duckPond.crc2.save();
            duckPond.crc2.translate(this.x, this.y);
            duckPond.crc2.scale(this.size, this.size);
            if (this.direction.x > 0) {
                duckPond.crc2.scale(-1, 1); // Spiegeln in der x-Richtung
            }
            // Körper zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.ellipse(0, 0, 50, 15, 0.3 * Math.PI, 0, 2 * Math.PI);
            duckPond.crc2.fillStyle = 'white';
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            // Hals zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.moveTo(-26, -40);
            duckPond.crc2.lineTo(-26, -70);
            duckPond.crc2.lineTo(-16, -70);
            duckPond.crc2.lineTo(-16, -40);
            duckPond.crc2.fillStyle = 'white';
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            // Kopf zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.arc(-26, -80, 14, 0, 2 * Math.PI);
            duckPond.crc2.fillStyle = 'white';
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            // Auge zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.arc(-30, -85, 3, 0, 2 * Math.PI);
            duckPond.crc2.fillStyle = 'white';
            duckPond.crc2.fill();
            duckPond.crc2.strokeStyle = "black";
            duckPond.crc2.stroke();
            duckPond.crc2.closePath();
            duckPond.crc2.beginPath();
            duckPond.crc2.arc(-30, -85, 2, 0, 2 * Math.PI);
            duckPond.crc2.fillStyle = 'black';
            duckPond.crc2.fill();
            duckPond.crc2.stroke();
            duckPond.crc2.closePath();
            // Schnabel zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.moveTo(-38, -85);
            duckPond.crc2.lineTo(-60, -80);
            duckPond.crc2.lineTo(-38, -75);
            duckPond.crc2.fillStyle = 'orange';
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            // Beine zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.moveTo(-10, 10); // Adjust the y-coordinate to start higher up
            duckPond.crc2.lineTo(-10, 60);
            duckPond.crc2.lineTo(-20, 60);
            duckPond.crc2.moveTo(0, 8); // Adjust the y-coordinate to start higher up
            duckPond.crc2.lineTo(0, 60);
            duckPond.crc2.lineTo(-10, 60);
            duckPond.crc2.strokeStyle = 'orange';
            duckPond.crc2.stroke();
            duckPond.crc2.closePath();
            // Flügel zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.ellipse(10, 0, 50, 10, 0.9, 0, Math.PI * 2);
            duckPond.crc2.fillStyle = "grey";
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            duckPond.crc2.restore();
        }
        drawFlying() {
            duckPond.crc2.save();
            duckPond.crc2.translate(this.xFlying, this.yFlying);
            duckPond.crc2.scale(this.size, this.size);
            if (this.direction.x < 0) {
                duckPond.crc2.scale(-1, 1); // Spiegeln in der x-Richtung
            }
            // Körper zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.ellipse(20, -45, 50, 15, 0 * Math.PI, 0, 2 * Math.PI);
            duckPond.crc2.fillStyle = 'white';
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            // Hals zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.moveTo(-26, -40);
            duckPond.crc2.lineTo(-26, -70);
            duckPond.crc2.lineTo(-16, -70);
            duckPond.crc2.lineTo(-16, -40);
            duckPond.crc2.fillStyle = 'white';
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            // Kopf zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.arc(-26, -80, 14, 0, 2 * Math.PI);
            duckPond.crc2.fillStyle = 'white';
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            // Auge zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.arc(-30, -85, 3, 0, 2 * Math.PI);
            duckPond.crc2.fillStyle = 'white';
            duckPond.crc2.fill();
            duckPond.crc2.strokeStyle = "black";
            duckPond.crc2.stroke();
            duckPond.crc2.closePath();
            duckPond.crc2.beginPath();
            duckPond.crc2.arc(-30, -85, 2, 0, 2 * Math.PI);
            duckPond.crc2.fillStyle = 'black';
            duckPond.crc2.fill();
            duckPond.crc2.stroke();
            duckPond.crc2.closePath();
            // Schnabel zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.moveTo(-38, -85);
            duckPond.crc2.lineTo(-60, -80);
            duckPond.crc2.lineTo(-38, -75);
            duckPond.crc2.fillStyle = 'orange';
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            // Flügel zeichnen
            duckPond.crc2.beginPath();
            duckPond.crc2.ellipse(25, -50, 50, 13, 0, 0, Math.PI * 2);
            duckPond.crc2.fillStyle = "grey";
            duckPond.crc2.fill();
            duckPond.crc2.closePath();
            duckPond.crc2.restore();
        }
    }
    duckPond.Bird = Bird;
})(duckPond || (duckPond = {}));
//# sourceMappingURL=Bird.js.map