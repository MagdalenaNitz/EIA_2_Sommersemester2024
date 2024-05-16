"use strict";
var duckPond;
(function (duckPond) {
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        duckPond.crc2 = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: 70, y: 70 });
        drawCloud({ x: 120, y: 45 }, { x: 200, y: 70 });
        drawMountains();
        drawLake();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = duckPond.crc2.createLinearGradient(0, 0, 0, duckPond.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green");
        duckPond.crc2.fillStyle = gradient;
        duckPond.crc2.fillRect(0, 0, duckPond.crc2.canvas.width, duckPond.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 20;
        let r2 = 120;
        let gradient = duckPond.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 80%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        duckPond.crc2.save();
        duckPond.crc2.translate(_position.x, _position.y);
        duckPond.crc2.fillStyle = gradient;
        duckPond.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        duckPond.crc2.fill();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 35; //Anzahl der Partikel
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
    function drawMountains() {
        console.log("Mountains");
        let color = "#aaaaaa";
        duckPond.crc2.save();
        duckPond.crc2.beginPath();
        duckPond.crc2.translate(0, 220);
        duckPond.crc2.fillStyle = color;
        duckPond.crc2.beginPath();
        duckPond.crc2.moveTo(-250, 0);
        duckPond.crc2.lineTo(390, 0);
        duckPond.crc2.lineTo(390, -50);
        duckPond.crc2.lineTo(300, -80);
        duckPond.crc2.lineTo(190, -55);
        duckPond.crc2.lineTo(130, -80);
        duckPond.crc2.lineTo(70, -60);
        duckPond.crc2.lineTo(-50, -110);
        duckPond.crc2.closePath();
        duckPond.crc2.fill();
        duckPond.crc2.restore();
        duckPond.crc2.save();
        duckPond.crc2.beginPath();
        duckPond.crc2.translate(0, 230);
        duckPond.crc2.fillStyle = "grey";
        duckPond.crc2.beginPath();
        duckPond.crc2.moveTo(-250, 0);
        duckPond.crc2.lineTo(390, 0);
        duckPond.crc2.lineTo(390, -60);
        duckPond.crc2.lineTo(310, -50);
        duckPond.crc2.lineTo(220, -40);
        duckPond.crc2.lineTo(170, -35);
        duckPond.crc2.lineTo(100, -65);
        duckPond.crc2.lineTo(50, -40);
        duckPond.crc2.lineTo(-50, -60);
        duckPond.crc2.closePath();
        duckPond.crc2.fill();
        duckPond.crc2.restore();
    }
    function drawLake() {
        let centerX = 150;
        let centerY = 350;
        let radiusX = 190;
        let radiusY = 80;
        duckPond.crc2.save();
        duckPond.crc2.beginPath();
        duckPond.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        duckPond.crc2.closePath();
        duckPond.crc2.fillStyle = "darkblue";
        duckPond.crc2.fill();
        duckPond.crc2.restore();
    }
})(duckPond || (duckPond = {}));
//# sourceMappingURL=duckPond.js.map