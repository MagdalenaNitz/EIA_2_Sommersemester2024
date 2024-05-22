"use strict";
var duckPond;
(function (duckPond) {
    class Cloud {
        x;
        y;
        constructor(_x, _y) {
            //console.log ("Cloud Constructor")
            this.x = _x;
            this.y = _y;
        }
        move() {
            // console.log("cloud move");
            this.x += 1;
            if (this.x > duckPond.crc2.canvas.width) {
                this.x = -50;
            }
        }
        draw(_position, _size) {
            console.log("Cloud", _position, _size);
            let nParticles = 30; //Anzahl der Partikel
            let radiusParticle = 40; //Radius einzelner Partikel
            //Pfad erstellen
            let particle = new Path2D();
            let gradient = duckPond.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            duckPond.crc2.save();
            duckPond.crc2.translate(_position.x, _position.y);
            duckPond.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                duckPond.crc2.save();
                let x = (Math.random() - 0.5) * _size.x; //Koordinatensystem verschieben - Zufallszahl zwischen -0.5 und 0.5
                let y = (Math.random() * _size.y); //Zufallszahl zwischen 0 und 1
                duckPond.crc2.translate(x, y); //Koordinatensystem an richtige Stelle schieben
                duckPond.crc2.fill(particle);
                duckPond.crc2.restore();
            }
        }
    }
    duckPond.Cloud = Cloud;
})(duckPond || (duckPond = {}));
//# sourceMappingURL=Cloud.js.map