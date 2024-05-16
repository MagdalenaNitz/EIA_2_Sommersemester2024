namespace duckPond {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
        export let crc2: CanvasRenderingContext2D;
        let golden: number = 0.62;

        let clouds: Cloud[] = [];

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        for (let i: number = 0; i<4; i++) {
            let cloud: Cloud = new Cloud ();
            clouds.push(cloud);
        }

        drawBackground();
        drawSun({ x: 70, y: 70});
        drawMountains();
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green")

        crc2.fillStyle = gradient; 
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 20;
        let r2: number = 120;
        let gradient: CanvasGradient = crc2.createRadialGradient (0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 80%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2* Math.PI);
        crc2.fill();
    }

    function drawMountains(): void {
        console.log("Mountains");
        let color: string = "#aaaaaa";

        crc2.save();
        crc2.beginPath();
        crc2.translate(0,250);
        crc2.fillStyle = color;
        crc2.beginPath();
        crc2.moveTo(-115, 0); 
        crc2.lineTo(390, 0);
        crc2.lineTo(390, -50); 
        crc2.lineTo(300, -80); 
        crc2.lineTo(190, -55);
        crc2.lineTo(130, -80);
        crc2.lineTo(70, -60);
        crc2.lineTo(0, -90);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(0,260);
        crc2.fillStyle = "grey";
        crc2.beginPath();
        crc2.moveTo(-110, 0); 
        crc2.lineTo(390, 0);
        crc2.lineTo(390, -60); 
        crc2.lineTo(330, -30); 
        crc2.lineTo(240, -55);
        crc2.lineTo(170, -35);
        crc2.lineTo(100, -65);
        crc2.lineTo(50, -40);
        crc2.lineTo(0, -60);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }

    export function pseudoRandom(seed: number): () => number {
        let value = seed;
        return function() {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280; 
        };
    }
    
}  

