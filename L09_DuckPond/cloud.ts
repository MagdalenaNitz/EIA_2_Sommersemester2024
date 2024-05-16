namespace duckPond {
    
    export class Cloud {
     position: number;
     color: string;
     size: number;

    constructor (){
        console.log ("Cloud Constructor")
    }

    move(): void {
        console.log("Cloud move")
    }

    draw(): void {
        console.log("Cloud draw");

        let nParticles: number = 30;
        let cloudWidth: number = 120;
        let cloudHeight: number = 40;
        let xPosition: number = 40;
        let yPosition: number = 50;
        let random = pseudoRandom(42)

        for (let i = 0; i < nParticles; i++) {
            let x = xPosition + (i * (cloudWidth / nParticles));
            let y = yPosition + (random()* cloudHeight);
            this.drawCloudParticle(x, y);
        }
    }
    
    drawCloudParticle(x: number, y: number): void {
        let gradient = crc2.createRadialGradient (x, y, 0, x,  y, 15);
        
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)")
    
        crc2.save();
        crc2.beginPath();
        crc2.arc(x, y, 15, 0,2 * Math.PI)
        crc2.fillStyle = gradient;
        crc2.restore();
    }
    pseudoRandom(seed: number): () => number {
        let value = seed;
        return function() {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        }
    }
}}