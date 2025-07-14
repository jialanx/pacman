const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');
console.log(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
    static width = 40;
    static height = 40;
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

class Player {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 15;
    }

    draw() {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        context.fillStyle = 'yellow';
        context.fill();
        context.closePath();
    }
}

const map = [
    ['-','-','-','-','-','-'],
    ['-',' ',' ',' ',' ','-'],
    ['-',' ','-','-',' ','-'],
    ['-',' ',' ',' ',' ','-'],
    ['-','-','-','-','-','-']
]

const boundaries = [];
const player = new Player({
    position: {
        x: Boundary.width * 1.5,
        y: Boundary.height * 1.5
    },
    velocity: {
        x: 0,
        y: 0
    }
});

map.forEach((row, i) => {
    row.forEach((block, j) => {
        switch (block) {
            case '-':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j*Boundary.width,
                            y: i*Boundary.height
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

player.draw();

