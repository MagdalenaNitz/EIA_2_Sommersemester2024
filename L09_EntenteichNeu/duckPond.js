"use strict";
var Ententeich;
(function (Ententeich) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let bushes = [];
    let trees = [];
    let ducks = [];
    let bees = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Ententeich.crc2 = canvas.getContext("2d");
        for (let i = 0; i < 10; i++) {
            let cloud = new Ententeich.Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }
        let tree = new Ententeich.Tree(320, 370);
        tree.draw();
        trees.push(tree);
        let bush = new Ententeich.Bush(310, 580);
        bush.draw();
        bushes.push(bush);
        drawBackground();
        setInterval(animate, 40);
        let duck = new Ententeich.Duck(10, 405, "yellow");
        duck.draw();
        ducks.push(duck);
        let duck2 = new Ententeich.Duck(100, 440, "orange");
        duck.draw();
        ducks.push(duck2);
        let bee = new Ententeich.Bee(10, 600, "yellow");
        bee.draw();
        bees.push(bee);
        let bee2 = new Ententeich.Bee(0, 500, "yellow");
        bee.draw();
        bees.push(bee2);
    }
    function animate() {
        drawBackground();
        for (let i = 0; i < 4; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
        for (let i = 0; i < 1; i++) {
            trees[i].draw();
        }
        for (let i = 0; i < 1; i++) {
            bushes[i].draw();
        }
        ducks[0].draw();
        ducks[1].draw();
        ducks[0].move();
        ducks[1].move();
        bees[0].draw();
        bees[0].move();
        bees[1].draw();
        bees[1].move();
    }
    function drawBackground() {
        let gradient = Ententeich.crc2.createLinearGradient(0, 0, 0, Ententeich.crc2.canvas.height);
        gradient.addColorStop(0.1, "#2980b9");
        gradient.addColorStop(0.27, "lightblue");
        gradient.addColorStop(0.27, "hsl(120, 60%, 30%)");
        Ententeich.crc2.fillStyle = gradient;
        Ententeich.crc2.fillRect(0, 0, Ententeich.crc2.canvas.width, Ententeich.crc2.canvas.height);
        drawHills();
        drawPond();
    }
    function drawHills() {
        let color = "darkgrey";
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.translate(0, 280);
        Ententeich.crc2.fillStyle = color;
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(0, 0);
        Ententeich.crc2.lineTo(390, 0);
        Ententeich.crc2.lineTo(390, -50);
        Ententeich.crc2.lineTo(300, -90);
        Ententeich.crc2.lineTo(190, -50);
        Ententeich.crc2.lineTo(130, -80);
        Ententeich.crc2.lineTo(70, -70);
        Ententeich.crc2.lineTo(0, -55);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.translate(0, 290);
        Ententeich.crc2.fillStyle = "green";
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(0, 0);
        Ententeich.crc2.lineTo(390, 0);
        Ententeich.crc2.lineTo(390, -60);
        Ententeich.crc2.lineTo(330, -40);
        Ententeich.crc2.lineTo(240, -35);
        Ententeich.crc2.lineTo(170, -45);
        Ententeich.crc2.lineTo(100, -55);
        Ententeich.crc2.lineTo(50, -50);
        Ententeich.crc2.lineTo(0, -40);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function pseudoRandom(seed) {
        let value = seed;
        return function () {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }
    Ententeich.pseudoRandom = pseudoRandom;
    function drawPond() {
        let centerX = 220;
        let centerY = 490;
        let radiusX = 290;
        let radiusY = 120;
        Ententeich.crc2.save();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fillStyle = "blue";
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=duckPond.js.map