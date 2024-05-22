namespace Ententeich {
    window.addEventListener("load", handleLoad)

    export let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    let clouds: Cloud[] = [];
    let bushes: Bush[] = [];
    let trees: Tree[] = [];
    let ducks: Duck[] = [];
    let bees: Bee[] = [];
    
    
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    
        for (let i: number = 0; i < 7; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 200, Math.random() * 150);
            clouds.push(cloud);
        }

        let tree: Tree = new Tree(320, 370);
        tree.draw();
        trees.push(tree);

        let bush: Bush = new Bush(300, 580);
        bush.draw();
        bushes.push(bush);
        
        drawBackground();
        setInterval(animate, 40);

        let duck: Duck = new Duck(10, 405, "yellow");
        duck.draw();
        ducks.push(duck);

        let duck2: Duck = new Duck(100, 440, "orange");
        duck.draw();
        ducks.push(duck2);

        let duck3: Duck = new Duck (150, 470, "yellow");
        duck.draw();
        ducks.push(duck3);

        let bee: Bee = new Bee(10, 600, "yellow");
        bee.draw();
        bees.push(bee);

        let bee2: Bee = new Bee(0, 500, "yellow");
        bee.draw();
        bees.push(bee2);
    }

    function animate(): void {
        drawBackground();
        for (let i: number = 0; i < 4; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
        for (let i: number = 0; i < 1; i++) {
            trees[i].draw();
        }
        for (let i: number = 0; i < 1; i++) {
            bushes[i].draw();
        }
        ducks[0].draw();
        ducks[1].draw();
        ducks[0].move();
        ducks[1].move();

        bees[0].draw();
        bees[0].move();
        bees[1].draw();
        bees[1].move();
    }

        
    function drawBackground(): void {
    //console.log("Background");
    
        let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green")
    
        crc2.fillStyle = gradient; 
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    
        drawMountains();
        drawLake();

    }
    function drawMountains(): void {
        //console.log("Mountains");
        let color: string = "#aaaaaa";
        //Berg 1 zeichnen
        crc2.save();
        crc2.beginPath();
        crc2.translate(0,220);
        crc2.fillStyle = "darkgrey";
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
        //Berg 2 zeichnen
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

    export function pseudoRandom(seed: number): () => number {
        let value = seed;
        return function () {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
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
    
}

