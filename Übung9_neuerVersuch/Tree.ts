namespace EntenteichClasses {
    export class Tree{
        x:number;
        y:number;
    
        constructor (_x:number, _y:number){
            //console.log("Tree Constructor");
            this.x = _x;
            this.y = _y;
        }
        draw():void{
            //console.log("Tree draw");

            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.fillStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-60,0); 
            crc2.lineTo(-48,-20);
            crc2.lineTo(-45,-50);
            crc2.lineTo(-40,-100);
            crc2.lineTo(-90,-120);
            crc2.lineTo(-100,-130);
            crc2.lineTo(-90,-125);
            crc2.lineTo(-50,-120);
            crc2.lineTo(-60,-150);
            crc2.lineTo(-100,-170);
            crc2.lineTo(-140,-170);
            crc2.lineTo(-100,-180);
            crc2.lineTo(-140,-190);
            crc2.lineTo(-90,-185);
            crc2.lineTo(-55,-170);
            crc2.lineTo(-30,-140);
            crc2.lineTo(-30,-180);
            crc2.lineTo(-70,-200);
            crc2.lineTo(-90,-220);
            crc2.lineTo(-30,-190);
            crc2.lineTo(0,-230);
            crc2.lineTo(0,-200);
            crc2.lineTo(-5,-150);
            crc2.lineTo(0,-160);
            crc2.lineTo(0,-130);
            crc2.lineTo(-5,-100);
            crc2.fill();
            crc2.restore();
        }
    
    }
}