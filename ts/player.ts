export class Player {
    coord_x: number;
    coord_y: number;
    direction: number = 0;
    height: number = 100;
    score: number;
    speed: number = 10;
    width: number = 20;

    constructor(coord_x: number, coord_y: number) {
        this.coord_x = coord_x;
        this.coord_y = coord_y;   
    }

    draw(ctx: CanvasRenderingContext2D) {
        let maxY: number = ctx.canvas.height - this.height,
            minY: number = 0;

        if(!((this.coord_y >= maxY && this.direction == 1)
            || (this.coord_y <= minY && this.direction == -1)))
        {
            this.coord_y += this.direction * this.speed;  
        } 

        ctx.fillStyle = 'white';
        ctx.fillRect(this.coord_x, this.coord_y, this.width, this.height);
    }
}