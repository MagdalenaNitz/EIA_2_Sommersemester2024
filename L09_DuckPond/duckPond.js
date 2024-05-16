"use strict";
var duckPond;
(function (duckPond) {
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    let clouds = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        duckPond.crc2 = canvas.getContext("2d");
        for (let i = 0; i < 4; i++) {
            let cloud = new duckPond.Cloud(100, 200);
            cloud.draw;
            clouds.push(cloud);
        }
        drawBackground();
        drawSun({ x: 70, y: 70 });
        drawMountains();
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
    function drawMountains() {
        console.log("Mountains");
        let color = "#aaaaaa";
        duckPond.crc2.save();
        duckPond.crc2.beginPath();
        duckPond.crc2.translate(0, 250);
        duckPond.crc2.fillStyle = color;
        duckPond.crc2.beginPath();
        duckPond.crc2.moveTo(-115, 0);
        duckPond.crc2.lineTo(390, 0);
        duckPond.crc2.lineTo(390, -50);
        duckPond.crc2.lineTo(300, -80);
        duckPond.crc2.lineTo(190, -55);
        duckPond.crc2.lineTo(130, -80);
        duckPond.crc2.lineTo(70, -60);
        duckPond.crc2.lineTo(0, -90);
        duckPond.crc2.closePath();
        duckPond.crc2.fill();
        duckPond.crc2.restore();
        duckPond.crc2.save();
        duckPond.crc2.beginPath();
        duckPond.crc2.translate(0, 260);
        duckPond.crc2.fillStyle = "grey";
        duckPond.crc2.beginPath();
        duckPond.crc2.moveTo(-110, 0);
        duckPond.crc2.lineTo(390, 0);
        duckPond.crc2.lineTo(390, -60);
        duckPond.crc2.lineTo(330, -30);
        duckPond.crc2.lineTo(240, -55);
        duckPond.crc2.lineTo(170, -35);
        duckPond.crc2.lineTo(100, -65);
        duckPond.crc2.lineTo(50, -40);
        duckPond.crc2.lineTo(0, -60);
        duckPond.crc2.closePath();
        duckPond.crc2.fill();
        duckPond.crc2.restore();
    }
    function pseudoRandom(seed) {
        let value = seed;
        return function () {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }
    duckPond.pseudoRandom = pseudoRandom;
})(duckPond || (duckPond = {}));
//# sourceMappingURL=duckPond.js.map