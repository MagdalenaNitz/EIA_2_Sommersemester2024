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

    draw(): void {
        console.log("Cloud draw");

        let nParticles: number = 30;
        let cloudWidth: number = 120;
        let cloudHeight: number = 40;
        let random = this.pseudoRandom(42)

        crc2.save();
        crc2.translate(this.x, this.y);
        crc2.restore();

        for (let i = 0; i < nParticles; i++) {
            let x = this.x + (i * (cloudWidth / nParticles));
            let y = this.y + (random()* cloudHeight);
            this.drawCloudParticle(x, y);
        }
    }
    
    drawCloudParticle(x: number, y: number): void {
        let gradient = crc2.createRadialGradient (x, y, 0, x,  y, 15);
        
        gradient.addColorStop(0,"HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)")
    
        crc2.save();
        crc2.beginPath();
        crc2.arc(x, y, 15, 0, 2 * Math.PI)
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    pseudoRandom(seed: number): () => number {
        let value = seed;
        return function() {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }
}}