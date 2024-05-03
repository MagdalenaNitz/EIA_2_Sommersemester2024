namespace GenerativeKunst {
        //Interface für Vector erstellen
        interface Vector {
            x:number
            y:number
        }
    
        //Eventlistener für handleLoad Funktion
        window.addEventListener("load", handleLoad);
        //Definiton der crc2 Variable als HTML Canvas
        let crc2: CanvasRenderingContext2D;
        //Definition goldener Schnitt
        let golden: number = 0.62; 
    
        //Fuktion die beim Laden aufgerufen wird
        function handleLoad(_event: Event): void{
            //query selector, um auf den canvas zuzugreifen und um zu überprüfen, ob da
            let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
            if (!canvas)
                return;
            crc2= <CanvasRenderingContext2D>canvas.getContext("2d");
        
        //Aufrufe aller Funktionen
            drawBackground();
            drawBubbles({x:100, y: 75});
            drawCloud({x:400, y: 280}, {x: 250, y: 75});                
            drawEllipse({x: 400, y: -150});
            drawCurvedLines(canvas.width, canvas.height, 100, 100);
            drawRandomShapes (canvas.width, canvas.height);
        }

        // Erstellen des Hintergrunds 
        function drawBackground(): void{
            console.log("Background");  

            let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0, crc2.canvas.height); //Farbverlauf von oben nach unten
            gradient.addColorStop(0,"yellow");
            gradient.addColorStop(golden, "violet");
            gradient.addColorStop(1, "lightblue");

            crc2.fillStyle = gradient;  //Anweisung, dass o.g. Farben benutzt werden sollen
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        //Erstellen eines Kreises 
        function drawBubbles(_position: Vector): void{
            console.log("Blubbles", _position);

            let radiusX: number = 150;
            let radiusY: number = 100;
            let color = "red";

            //Schleife
            for (let i = 0; i < 4; i++){
                let randomAngle = Math.random()*Math.PI *2;

                drawSingleBubble(_position, color, radiusX, radiusY, randomAngle);
            }
        }
        
        function drawSingleBubble(_position: Vector, color: string, radiusX: number, radiusY: number, rotation: number): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.strokeStyle = color;
            crc2.beginPath();
            crc2.rotate(rotation);
            crc2.arc(0,0, radiusX, radiusY, 2* Math.PI);
            crc2.lineWidth = 3; // Breite der Linie
            crc2.stroke();
            crc2.restore();
        }

        //Erstellen einer Wolke
        function drawCloud(_position: Vector, _size: Vector): void{
            console.log("Cloud", _position, _size);

            let nParticles: number = 45;        //Anzahl der Partikel
            let radiusParticle: number = 40;   //Radius einzelner Partikel

            //Pfad erstellen
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient (0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0,0, radiusParticle, 0, 2*Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 70%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 70%, 0)");

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
         //Erstellen einer Ellipse
         function drawEllipse(_position: Vector): void {
            console.log("Ellipse", _position);
            
            let radiusX: number = 170;
            let radiusY: number = 120;
            let color = "green";

            //Schleife um alle drei Ellipsen zu zeichnen und sie in einem random winkel zu positionieren
            for (let i = 0; i < 3; i++) {
            let randomAngle = Math.random() * Math.PI * 2; 

            //Funktions aufruf um die einzelnen Elippsen zu zeichnen
            drawSingleEllipse(_position, color, radiusX, radiusY, randomAngle);
            }
        }

         //Funktion zum Zeichnen einer Ellipse
         function drawSingleEllipse(_position: Vector, color: string, radiusX: number, radiusY: number, rotation: number): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.strokeStyle = color;
            crc2.beginPath();
            crc2.rotate(rotation);
            crc2.ellipse(0, 0, radiusX, radiusY, 0, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.restore();
        }

        // Erstellen von geschwungener Linien mit zufälliger Position
        function drawCurvedLines(canvasWidth: number, canvasHeight: number, _frequency: number, _amplitude: number): void {
            console.log("Curved Lines");

            // Zufällige Position für den Startpunkt der Linie
            let startX: number = Math.random() * (canvasWidth * 0.2); //Startpunkt auf linke Hälfte begrenzt
            let startY: number = Math.random() * canvasHeight;

            crc2.save();
            crc2.beginPath();
            crc2.moveTo(startX, startY);

            // Zufällige Position für den Endpunkt der Linie
            let endX: number = Math.random() * canvasWidth;

            // Berechnung der Schrittweite basierend auf der Anzahl der Wellen
            let dx: number = (endX - startX) / _frequency;

            for (let i: number = 0; i <= _frequency; i++) {
                let x: number = startX + i * dx;
                let y: number = startY + Math.sin((i / _frequency) * Math.PI * 2) * _amplitude; // Berechnung der Y-Position basierend auf Sinus-Funktion
                crc2.lineTo(x, y);
            }

            crc2.strokeStyle = "darkviolet"; // Farbe der Linie
            crc2.lineWidth = 4; // Breite der Linie
            crc2.stroke();
            crc2.restore();
        }

        //Funktion zum Zeichnen von Kreisen und Vierecken in random größen und Farben
        function drawRandomShapes(canvasWidth: number, canvasHeight:number ): void {
            let numShapes: number = 15; // Anzahl der Formen
            let maxLeftOffset: number = 400; 

            for (let i = 0; i < numShapes; i++) {
                let shapeSize = Math.random() * 30 + 25; 
                let color = getRandomColor();
                let x = Math.random() * (canvasWidth - maxLeftOffset) - maxLeftOffset; // zufällige x-Position im Canvas
                let y = Math.random() * (canvasHeight - shapeSize); // zufällige y-Position im Canvas

                // zufallberechnung ob Kreis oder Rechteck gezeichnet wird
                let shapeType = Math.random() < 0.5 ? "circle" : "rectangle";

                // Aufruf der Funktionen, welche die Formen malen mit Abfrage, ob es sich um Kreis oder Rechteck handelt
                if (shapeType === "circle") {
                    drawCircle({ x, y }, shapeSize / 2, color);
                } else {
                    drawRectangle({ x, y }, shapeSize, shapeSize, color);
                }
            }
        }

        // Funktion zum Zeichnen eines Kreises
        function drawCircle(position: Vector, radius: number, color: string): void {
            crc2.fillStyle = color;
            crc2.beginPath();
            crc2.arc(position.x, position.y, radius, 0, Math.PI * 2);
            crc2.fill();
        }

        // Funktion zum Zeichnen eines Rechtecks
        function drawRectangle(position: Vector, width: number, height: number, color: string): void {
            crc2.fillStyle = color;
            crc2.fillRect(position.x - width / 2, position.y - height / 2, width, height);
        }

        // Funktion zum Generieren einer zufälligen Farbe
        function getRandomColor(): string {
            // Random HEX Farvbe wird generiert
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
}