"use strict";
var EntenteichClasses;
(function (EntenteichClasses) {
    class Duck {
        x;
        y;
        xStanding;
        yStanding;
        xTail;
        yTail;
        direction;
        standingDirection;
        color;
        size;
        constructor(_x, _y, _xStanding, _yStanding, _xTail, _yTail, _color) {
            //console.log("Duck Constructor")
            this.x = _x;
            this.y = _y;
            this.xStanding = _xStanding;
            this.yStanding = _yStanding;
            this.xTail = _xTail;
            this.yTail = _yTail;
            this.direction = this.getRandomDirection();
            this.standingDirection = this.getRandomDirection();
            this.color = _color;
            if (_color === "yellow" || _color === "gold") {
                this.color = _color;
            }
            else {
                this.color = "brown"; // Wenn nicht, ist die Ente braun
            }
        }
        move() {
            //console.log("Duck move")
            this.x += this.direction;
            this.xStanding -= this.standingDirection;
            this.xTail -= this.direction * 0.5;
            ;
            if (this.x >= 300 || this.x <= 50) {
                this.direction *= -1;
            }
            if (this.xTail >= 300 || this.xTail <= 50) {
                this.direction *= -1;
            }
            if (this.xStanding >= 400) {
                this.xStanding = 0; // Ente erscheint auf der linken Seite
            }
            else if (this.xStanding <= 0) {
                this.xStanding = 400; // Ente erscheint auf der rechten Seite
            }
        }
        getRandomDirection() {
            let rand = Math.random();
            if (rand < 0.33) {
                return -1; // Links
            }
            else if (rand < 0.66) {
                return 1; // Rechts
            }
            else {
                return 0; // Keine Bewegung
            }
        }
        draw() {
            //console.log("Duck draw")
            EntenteichClasses.crc2.save();
            // Verschieben des Ursprungs des Koordinatensystems zur Position der Ente
            EntenteichClasses.crc2.translate(this.x, this.y);
            EntenteichClasses.crc2.scale(this.direction, 1);
            // Körper der Ente als Ellipse
            let bodyRadiusX = 15; // Horizontaler Radius des Körpers
            let bodyRadiusY = 10; // Vertikaler Radius des Körpers
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.ellipse(0, 0, bodyRadiusX, bodyRadiusY, 0, 0, Math.PI * 2); // Körper als Ellipse
            if (this.color === "brown") {
                EntenteichClasses.crc2.fillStyle = "brown";
            }
            else {
                EntenteichClasses.crc2.fillStyle = "yellow";
            }
            EntenteichClasses.crc2.fill();
            EntenteichClasses.crc2.closePath();
            // Kopf der Ente als Kreis
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.arc(20, -5, 5, 0, Math.PI * 2); // Kopf als Kreis
            if (this.color === "brown") {
                EntenteichClasses.crc2.fillStyle = "brown";
            }
            else {
                EntenteichClasses.crc2.fillStyle = "yellow";
            }
            EntenteichClasses.crc2.fill();
            EntenteichClasses.crc2.closePath();
            // Auge der Ente als Kreis
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.arc(22, -5, 2, 0, Math.PI * 2); // Auge als Kreis
            EntenteichClasses.crc2.fillStyle = "black"; // Schwarze Farbe für das Auge
            EntenteichClasses.crc2.fill();
            EntenteichClasses.crc2.closePath();
            // Schnabel der Ente
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.moveTo(25, -5);
            EntenteichClasses.crc2.lineTo(30, -3);
            EntenteichClasses.crc2.lineTo(25, -1);
            EntenteichClasses.crc2.strokeStyle = "orange"; // Orangefarbener Schnabel
            EntenteichClasses.crc2.stroke();
            EntenteichClasses.crc2.closePath();
            // Linker Flügel der Ente als schmale Ellipse
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.ellipse(-4, -2, 15, 7, -0.2, 0, Math.PI * 2); // Linker Flügel als Ellipse
            if (this.color === "brown") {
                EntenteichClasses.crc2.fillStyle = "lightblue";
            }
            else {
                EntenteichClasses.crc2.fillStyle = "brown";
            }
            EntenteichClasses.crc2.fill();
            EntenteichClasses.crc2.closePath();
            // Wiederherstellen des ursprünglichen Zustands des Canvas
            EntenteichClasses.crc2.restore();
        }
        drawStanding() {
            EntenteichClasses.crc2.save();
            // Verschieben des Ursprungs des Koordinatensystems zur Position der Ente
            EntenteichClasses.crc2.translate(this.xStanding, this.yStanding);
            EntenteichClasses.crc2.scale(-this.standingDirection, 1);
            // Körper der Ente als Ellipse
            let bodyRadiusX = 15; // Horizontaler Radius des Körpers
            let bodyRadiusY = 10; // Vertikaler Radius des Körpers
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.ellipse(0, 0, bodyRadiusX, bodyRadiusY, 0, 0, Math.PI * 2); // Körper als Ellipse
            EntenteichClasses.crc2.fillStyle = "yellow"; // Gelbe Farbe für den Körper
            EntenteichClasses.crc2.fill();
            EntenteichClasses.crc2.closePath();
            // Kopf der Ente als Kreis mit variabler Rotation
            EntenteichClasses.crc2.rotate(0); // Rotation des Kopfes
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.arc(20, -5, 5, 0, Math.PI * 2); // Kopf als Kreis
            EntenteichClasses.crc2.fillStyle = "yellow"; // Gelbe Farbe für den Kopf
            EntenteichClasses.crc2.fill();
            EntenteichClasses.crc2.closePath();
            // Auge der Ente als Kreis
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.arc(22, -5, 2, 0, Math.PI * 2); // Auge als Kreis
            EntenteichClasses.crc2.fillStyle = "black"; // Schwarze Farbe für das Auge
            EntenteichClasses.crc2.fill();
            EntenteichClasses.crc2.closePath();
            // Schnabel der Ente
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.moveTo(25, -5);
            EntenteichClasses.crc2.lineTo(30, -3);
            EntenteichClasses.crc2.lineTo(25, -1);
            EntenteichClasses.crc2.strokeStyle = "orange"; // Orangefarbener Schnabel
            EntenteichClasses.crc2.stroke();
            EntenteichClasses.crc2.closePath();
            // Rechter Flügel der Ente als schmale Ellipse
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.ellipse(-4, -2, 15, 7, -0.2, 0, Math.PI * 2); // Rechter Flügel als Ellipse
            EntenteichClasses.crc2.fillStyle = "brown"; // Braune Farbe für den Flügel
            EntenteichClasses.crc2.fill();
            EntenteichClasses.crc2.closePath();
            // Beine der Ente 
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.moveTo(0, 7); // Startpunkt des Beins
            EntenteichClasses.crc2.lineTo(0, 15); // Obere Linie des Beins
            EntenteichClasses.crc2.lineTo(-3, 15); // Schräge Linie des Beins
            EntenteichClasses.crc2.lineTo(-3, 7); // Untere Linie des Beins
            EntenteichClasses.crc2.strokeStyle = "brown"; // Braune Farbe für die Beine
            EntenteichClasses.crc2.stroke();
            EntenteichClasses.crc2.closePath();
            // Wiederherstellen des ursprünglichen Zustands des Canvas
            EntenteichClasses.crc2.restore();
        }
        drawTail() {
            EntenteichClasses.crc2.save();
            // Verschieben des Ursprungs des Koordinatensystems zur Position des Entenschwanzes
            EntenteichClasses.crc2.translate(this.xTail, this.yTail);
            EntenteichClasses.crc2.scale(this.direction, 1);
            // Körper der Ente als halbe Ellipse
            let bodyRadiusX = 7; // Horizontaler Radius des Körpers
            let bodyRadiusY = 10; // Vertikaler Radius des Körpers
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.ellipse(0, 0, bodyRadiusX, bodyRadiusY, Math.PI, 0, Math.PI); // Körper als halbe Ellipse
            EntenteichClasses.crc2.fillStyle = "yellow";
            EntenteichClasses.crc2.fill();
            EntenteichClasses.crc2.closePath();
            // Linker Flügel der Ente als halbe Ellipse
            EntenteichClasses.crc2.beginPath();
            EntenteichClasses.crc2.ellipse(-3, 0, 6, 14, 0, Math.PI, 0); // Linker Flügel als halbe Ellipse
            EntenteichClasses.crc2.fillStyle = "brown"; // Braune Farbe für den Flügel
            EntenteichClasses.crc2.fill();
            EntenteichClasses.crc2.closePath();
            // Wiederherstellen des ursprünglichen Zustands des Canvas
            EntenteichClasses.crc2.restore();
        }
    }
    EntenteichClasses.Duck = Duck;
})(EntenteichClasses || (EntenteichClasses = {}));
//# sourceMappingURL=Duck.js.map