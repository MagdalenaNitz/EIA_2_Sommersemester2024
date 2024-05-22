"use strict";
var duckPond;
(function (duckPond) {
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    let clouds = [];
    let ducks = [];
    let bushes = [];
    let bees = [];
    let birds = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        duckPond.crc2 = canvas.getContext("2d");
        for (let i = 0; i < 4; i++) {
            let cloud = new duckPond.Cloud(Math.random() * 200, Math.random() * 150);
            clouds.push(cloud);
        }
        for (let i = 0; i < 6; i++) {
            let x = 100 + Math.random() * 200;
            let y = 340 + Math.random() * 70;
            let xTail = 70 + Math.random() * 70;
            let yTail = 350 + Math.random() * 100;
            let xStanding = 200 + Math.random() * 300;
            let yStanding = 450 + Math.random() * 80;
            let duck = new duckPond.Duck(x, y, xStanding, yStanding, xTail, yTail, "lightbrown");
            ducks.push(duck);
        }
        for (let i = 0; i < 4; i++) {
            let randomX = Math.random() * 2 - 1;
            let randomY = 450 + Math.random() * 200;
            let xFlying = 70 + Math.random() * 200;
            let yFlying = 350 + Math.random() * 100;
            let bird = new duckPond.Bird(Math.random() * 200, randomY, xFlying, yFlying, 0.5, new duckPond.Vector(randomX, 0));
            if (randomY >= 400 && randomY <= 600) {
                birds.push(bird);
            }
        }
        let bush = new duckPond.Bush(310, 220);
        console.log(bush);
        bush.draw();
        bushes.push(bush);
        for (let i = 0; i < 7; i++) {
            let randomX = Math.random() * 2 - 1;
            let randomY = Math.random() * 2 - 1;
            let bee = new duckPond.Bee(10, 600, "yellow");
            bees.push(bee);
        }
        drawBackground();
        setInterval(animate, 40);
    }
    function animate() {
        console.log("animate");
        drawBackground();
        for (let i = 0; i < 4; i++) {
            clouds[i].move();
            clouds[i].draw(new duckPond.Vector(120, 45), new duckPond.Vector(200, 70));
        }
        for (let i = 0; i < 6; i++) {
            ducks[i].move();
            ducks[i].draw();
            ducks[i].drawStanding();
            ducks[i].drawTail();
        }
        for (let i = 0; i < 1; i++) {
            bushes[i].draw();
        }
        for (let i = 0; i < bees.length; i++) {
            bees[i].move;
            bees[i].draw();
        }
        for (let i = 0; i < birds.length; i++) {
            birds[i].move();
            birds[i].draw();
            birds[i].drawFlying();
        }
    }
    function drawBackground() {
        //console.log("Background");
        let gradient = duckPond.crc2.createLinearGradient(0, 0, 0, duckPond.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green");
        duckPond.crc2.fillStyle = gradient;
        duckPond.crc2.fillRect(0, 0, duckPond.crc2.canvas.width, duckPond.crc2.canvas.height);
        drawSun();
        drawMountains();
        drawTree(new duckPond.Vector(170, 265), 70, 20, 40);
        drawLake();
        drawHouse();
    }
    function drawSun() {
        //console.log("Sun");
        let r1 = 50;
        let r2 = 150;
        let gradient = duckPond.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 80%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        duckPond.crc2.save();
        duckPond.crc2.translate(70, 70);
        duckPond.crc2.fillStyle = gradient;
        duckPond.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        duckPond.crc2.fill();
    }
    function drawMountains() {
        //console.log("Mountains");
        let color = "#aaaaaa";
        //Berg 1 zeichnen
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
        //Berg 2 zeichnen
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
    function drawTree(position, trunkHeight, trunkWidth, crownRadius) {
        // Stamm zeichnen
        duckPond.crc2.fillStyle = "brown";
        duckPond.crc2.fillRect(position.x - trunkWidth / 2, position.y, trunkWidth, -trunkHeight);
        // Krone zeichnen
        duckPond.crc2.fillStyle = "green";
        duckPond.crc2.beginPath();
        duckPond.crc2.arc(position.x, position.y - trunkHeight, crownRadius, 0, Math.PI * 2);
        duckPond.crc2.fill();
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
    function drawHouse() {
        duckPond.crc2.save();
        duckPond.crc2.translate(-180, 20); // Position des Hauses festlegen
        duckPond.crc2.fillStyle = "brown"; // Farbe für das Haus festlegen
        duckPond.crc2.beginPath();
        duckPond.crc2.moveTo(0, 0); // Startpunkt des Hauses
        // Linien für das Haus zeichnen
        duckPond.crc2.lineTo(0, -60);
        duckPond.crc2.lineTo(40, -100);
        duckPond.crc2.lineTo(80, -60);
        duckPond.crc2.lineTo(80, 0);
        duckPond.crc2.closePath();
        duckPond.crc2.fill(); // Fülle das Haus mit Farbe
        duckPond.crc2.restore();
    }
})(duckPond || (duckPond = {}));
//# sourceMappingURL=duckPond.js.map