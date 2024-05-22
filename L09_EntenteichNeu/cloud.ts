namespace Ententeich {
    export class Cloud {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        move() {
            this.x += 1
            if (this.x > crc2.canvas.width) {
                this.x = -100;
            }

        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y)

            crc2.beginPath();
            crc2.moveTo(150, 0);
            crc2.lineTo(0, 0);
            crc2.ellipse(50, 0, 40, 30, 0, Math.PI, 0, false);
            crc2.ellipse(100, 0, 60, 60, 0, Math.PI, 0, false);
            crc2.ellipse(170, 0, 50, 30, 0, Math.PI, 0, false);
            crc2.closePath();

            let cloudColor: string = "white";
            crc2.fillStyle = cloudColor;
            crc2.fill();

            crc2.restore();
        }
    }
}
