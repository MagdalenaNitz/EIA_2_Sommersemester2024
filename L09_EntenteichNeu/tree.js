"use strict";
var Ententeich;
(function (Ententeich) {
    class Tree {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            Ententeich.crc2.save();
            Ententeich.crc2.translate(this.x, this.y);
            Ententeich.crc2.fillStyle = "brown";
            Ententeich.crc2.fillRect(-10, 0, 20, -60);
            Ententeich.crc2.fillStyle = "darkgreen";
            for (let i = 0; i < 3; i++) {
                Ententeich.crc2.beginPath();
                Ententeich.crc2.arc(0, -60 - (i * 30), 40, 0, Math.PI * 2);
                Ententeich.crc2.fill();
            }
            Ententeich.crc2.restore();
        }
    }
    Ententeich.Tree = Tree;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=tree.js.map