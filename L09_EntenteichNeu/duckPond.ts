namespace Ententeich {
    window.addEventListener("load", handleLoad)

    export let crc2: CanvasRenderingContext2D;
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

    
        for (let i: number = 0; i < 10; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }
        let tree: Tree = new Tree(320, 370);
        tree.draw();
        trees.push(tree);

        let bush: Bush = new Bush(310, 580);
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

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.1, "#2980b9");
        gradient.addColorStop(0.27, "lightblue");
        gradient.addColorStop(0.27, "hsl(120, 60%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);



        drawHills();
        drawPond();

    }
    function drawHills(): void {

        let color: string = "darkgrey";

        crc2.save();
        crc2.beginPath();
        crc2.translate(0, 280);
        crc2.fillStyle = color;
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(390, 0);
        crc2.lineTo(390, -50);
        crc2.lineTo(300, -90);
        crc2.lineTo(190, -50);
        crc2.lineTo(130, -80);
        crc2.lineTo(70, -70);
        crc2.lineTo(0, -55);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(0, 290);
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(390, 0);
        crc2.lineTo(390, -60);
        crc2.lineTo(330, -40);
        crc2.lineTo(240, -35);
        crc2.lineTo(170, -45);
        crc2.lineTo(100, -55);
        crc2.lineTo(50, -50);
        crc2.lineTo(0, -40);
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
    function drawPond(): void {

        let centerX = 220;
        let centerY = 490;
        let radiusX = 290;
        let radiusY = 120;

        crc2.save();
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.restore();
    }
    
}

