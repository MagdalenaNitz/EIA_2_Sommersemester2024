namespace UebungL09 {
    class Vector {
        x: number;
        y: number;

        constructor() {
            console.log ("Constructor called");
            this.x = 0;
            this.y = 0; 
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x *= _addend.x;
            this.y *= _addend.y;
        }

        set(_x:number, _y: number): void {
            this.x *= _x; 
            this.y *= _y;
        }
    }

    let v1: Vector = new Vector();
        v1.scale(2);
        console.log(v1);
}