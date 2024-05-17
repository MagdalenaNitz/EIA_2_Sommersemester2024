namespace duckPond {
    
    export class Cloud {
        x: number;
        y: number;

    constructor (_x: number, _y: number){
        console.log ("Cloud Constructor")
        this.x = _x;
        this.y = _y;
    }

    move(): void {
        console.log("cloud move");
        this.x +=1;

        if (this.x > crc2.canvas.width) {
            this.x = -50;
        }
    }

    draw(_position: Vector, _size: Vector): void{
            console.log("Cloud", _position, _size);
    
            let nParticles: number = 35;        //Anzahl der Partikel
            let radiusParticle: number = 40;   //Radius einzelner Partikel
    
            //Pfad erstellen
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient (0, 0, 0, 0, 0, radiusParticle);
    
            particle.arc(0,0, radiusParticle, 0, 2*Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
    
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
    
            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x; //Koordinatensystem verschieben - Zufallszahl zwischen -0.5 und 0.5
                let y: number = (Math.random() * _size.y); //Zufallszahl zwischen 0 und 1
                crc2.translate(x, y);   //Koordinatensystem an richtige Stelle schieben
                crc2.fill(particle); 
                crc2.restore();
                
            }
        }
    }
}