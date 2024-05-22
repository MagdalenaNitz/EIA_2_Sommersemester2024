namespace Ententeich {
    export class Tree{
        x:number;
        y:number;
    
        constructor (_x:number, _y:number){
            this.x = _x;
            this.y = _y;
        }

        draw() {
            crc2.save();
            crc2.translate(this.x, this.y);

         
            crc2.fillStyle = "brown";
            crc2.fillRect(-10, 0, 20, -60);

           
            crc2.fillStyle = "darkgreen";
            for (let i = 0; i < 3; i++) {
                crc2.beginPath();
                crc2.arc(0, -60 - (i * 30), 40, 0, Math.PI * 2);
                crc2.fill();
            }

            crc2.restore();
        }
    }
}