namespace duckPond {
    export class Bush{
        x: number;
        y: number;

        constructor (_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(0,270)
            crc2.fillStyle = "green";
            crc2.beginPath();
            crc2.moveTo(0,0);
            crc2.lineTo(10,-20);
            crc2.lineTo(40,-35);
            crc2.lineTo(60, -45);
            crc2.lineTo(80, -40);
            crc2.lineTo(100, -30)
            crc2.lineTo(110,-5);
            crc2.lineTo(100, 0);
            crc2.lineTo(80, 5);
            crc2.lineTo(60, 5);
            crc2.lineTo(40, 5);
            crc2.lineTo(10, 5);
            crc2.lineTo(0, 0);
            crc2.closePath();
            crc2.fill();
            crc2.restore;
        }
    }
}
