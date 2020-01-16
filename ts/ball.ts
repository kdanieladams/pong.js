export class Ball {
    coord_x: number;
    coord_y: number;
    height: number = 20;
    radius: number = this.height / 2;
    start_x: number;
    start_y: number;
    velocity_x: number = 0;
    velocity_y: number = 0;
    width: number = 20;

    constructor(coord_x: number, coord_y: number){
        this.coord_x = coord_x;
        this.coord_y = coord_y;
        this.start_x = this.coord_x;
        this.start_y = this.coord_y;
    }

    draw(ctx: CanvasRenderingContext2D) {
        let maxY = ctx.canvas.height - this.radius,
            minY = 0,
            maxX = ctx.canvas.width,
            minX = 0 - this.radius;

        if(!((this.coord_y >= maxY && this.velocity_y > 0)
            || (this.coord_y <= minY && this.velocity_y < 0)))
        {
            this.coord_y += this.velocity_y;
        }
        else {
            this.velocity_y = this.velocity_y * -1;
        }

        if(!((this.coord_x >= maxX && this.velocity_x > 0)
            || (this.coord_x <= minX && this.velocity_x < 0)))
        {
            this.coord_x += this.velocity_x;
        }
        else {
            this.reset();
        }
        
        ctx.beginPath();
        ctx.arc(this.coord_x, this.coord_y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    reset() {
        this.coord_x = this.start_x;
        this.coord_y = this.start_y;
        this.velocity_x = 0;
        this.velocity_y = 0;
    }
}