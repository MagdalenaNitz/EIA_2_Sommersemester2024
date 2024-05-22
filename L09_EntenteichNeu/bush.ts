namespace Ententeich {
    export class Bush {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            let numberOfParticles: number = 50;
            let cloudWidth: number = 80;
            let cloudHeight: number = 70;
            let xPosition: number = 310;
            let yPosition: number = 590;
            let random = pseudoRandom(42)

            for (let i = 0; i < numberOfParticles; i++) {
                let x = xPosition + (i * (cloudWidth / numberOfParticles));
                let y = yPosition + (random() * cloudHeight);
                this.drawBushParticle(x, y);
            }
        }

        drawBushParticle(x: number, y: number): void {

            crc2.save();
            crc2.beginPath();
            crc2.arc(x, y, 15, 0, Math.PI * 2);
            crc2.fillStyle = "#006400";
            crc2.fill();
            crc2.restore();
        }
    }

}