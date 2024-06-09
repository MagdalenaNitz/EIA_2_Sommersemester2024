namespace Ententeich {
    export class Bird extends Moveable {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, "grey")
        }

        move() {
            this.x += 2; // Geschwindigkeit des Vogels
            this.y += Math.sin(this.x * 0.05) * 2; // sanfte Auf- und Abbewegung
            if (this.x > crc2.canvas.width) {
                this.x = 0;
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

            // Körper
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.ellipse(0, 0, 11, 8, 0, 0, 2 * Math.PI); // schlankere Form
            crc2.fill();
            crc2.closePath();

            // Kopf
            crc2.beginPath();
            crc2.arc(13, -3, 4, 0, 2 * Math.PI); // kleinerer Kopf
            crc2.fill();
            crc2.closePath();

            // Schnabel
            crc2.beginPath();
            crc2.fillStyle = "orange";
            crc2.moveTo(12, -3);
            crc2.lineTo(15, -5);
            crc2.lineTo(12, -7);
            crc2.fill();
            crc2.closePath();

            // Flügel
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(-7, 0);
            crc2.lineTo(-17, -9); // längere Flügel
            crc2.lineTo(-9, -4); // veränderte Positionierung
            crc2.lineTo(-17, 0);
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }
    }
}