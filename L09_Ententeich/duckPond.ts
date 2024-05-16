namespace duckPond {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
        export let crc2: CanvasRenderingContext2D;
        let golden: number = 0.62;


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawSun({ x: 70, y: 70});
        drawCloud({x: 120, y: 45}, {x:200, y:70});
        drawMountains();
        drawTree(new Vector(170, 265), 70, 20, 40);
        drawLake();
        drawBush();
        drawHouse();
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

    function drawCloud(_position: Vector, _size: Vector): void{
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
            
        }}

    function drawMountains(): void {
        console.log("Mountains");
        let color: string = "#aaaaaa";

        crc2.save();
        crc2.beginPath();
        crc2.translate(0,220);
        crc2.fillStyle = color;
        crc2.beginPath();
        crc2.moveTo(-250, 0); 
        crc2.lineTo(390, 0);
        crc2.lineTo(390, -50); 
        crc2.lineTo(300, -80); 
        crc2.lineTo(190, -55);
        crc2.lineTo(130, -80);
        crc2.lineTo(70, -60);
        crc2.lineTo(-50, -110);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(0,230);
        crc2.fillStyle = "grey";
        crc2.beginPath();
        crc2.moveTo(-250, 0); 
        crc2.lineTo(390, 0);
        crc2.lineTo(390, -60); 
        crc2.lineTo(310, -50); 
        crc2.lineTo(220, -40);
        crc2.lineTo(170, -35);
        crc2.lineTo(100, -65);
        crc2.lineTo(50, -40);
        crc2.lineTo(-50, -60);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }

    function drawTree(position: Vector, trunkHeight: number, trunkWidth: number, crownRadius: number): void {
    // Stamm zeichnen
        crc2.fillStyle = "brown";
        crc2.fillRect(position.x - trunkWidth / 2, position.y, trunkWidth, -trunkHeight);
            
    // Krone zeichnen
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.arc(position.x, position.y - trunkHeight, crownRadius, 0, Math.PI * 2);
        crc2.fill();
    }
    
    function drawLake(): void {

        let centerX = 150;
        let centerY = 350;
        let radiusX = 190;
        let radiusY = 80;

        crc2.save();
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2* Math.PI);
        crc2.closePath();
        crc2.fillStyle = "darkblue";
        crc2.fill();
        crc2.restore();
    }
    function drawBush(): void {

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

    function drawHouse(): void{
        crc2.save();
        crc2.translate(-180, 20); // Position des Hauses festlegen

        crc2.fillStyle = "brown"; // Farbe für das Haus festlegen
        crc2.beginPath();
        crc2.moveTo(0, 0); // Startpunkt des Hauses

        // Linien für das Haus zeichnen
        crc2.lineTo(0, -60);
        crc2.lineTo(40, -100);
        crc2.lineTo(80, -60);
        crc2.lineTo(80, 0);
        crc2.closePath();

        crc2.fill(); // Fülle das Haus mit Farbe
        crc2.restore();
    }
}

