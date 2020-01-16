export class Ball {
    coord_x: number;
    coord_y: number;
    height: number = 20;
    velocity_x: number = 0;
    velocity_y: number = 0;
    width: number = 20;

    constructor(coord_x: number, coord_y: number){
        this.coord_x = coord_x - (this.width / 2);
        this.coord_y = coord_y - (this.height / 2);
    }

    draw(ctx: CanvasRenderingContext2D) {
        let maxY = ctx.canvas.height - this.height,
            minY = 0,
            maxX = ctx.canvas.width - this.width,
            minX = 0;

        if(!(this.coord_y >= maxY && this.velocity_y > 0)
            || (this.coord_y <= minY && this.velocity_y < 0)) 
        {
            this.coord_y += this.velocity_y;
        }

        if(!(this.coord_x >= maxX && this.velocity_x > 0)
            || (this.coord_x <= minX && this.velocity_x < 0)) 
        {
            this.coord_x += this.velocity_x;
        }
        
        ctx.fillStyle = 'white';
        ctx.fillRect(this.coord_x, this.coord_y, this.width, this.height);
    }
}