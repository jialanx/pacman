const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');
console.log(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
    constructor({ position }) {
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        context.fillStyle = 'blue';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
}

const map = [
    ['-','-','-','-','-','-'],
    [' ',' ',' ','-',' ','-'],
    [' ',' ',' ','-',' ','-']
]

const boundaries = [];

map.forEach((row, i) => {
    row.forEach((block, j) => {
        switch (block) {
            case '-':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j*40,
                            y: i*40
                        }
                    })
                )
                break;
        }
    })
});

boundaries.forEach( (block) => {
    block.draw();
})