import { Ball } from './ball';
import { Player } from './player';

export class Pong {
    ball: Ball;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    player_1: Player;
    player_2: Player;

    constructor(canvas: HTMLCanvasElement) {
        let ball_x = 0,
            ball_y = 0,
            margin = 15,
            player_width = 20,
            player_height = 100,
            player_y = (canvas.height / 2) - (player_height / 2),
            player_1_x = margin,
            player_2_x = canvas.width - player_width - margin;

        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player_1 = new Player(player_1_x, player_y);
        this.player_2 = new Player(player_2_x, player_y);

        ball_x = this.canvas.width / 2;
        ball_y = this.canvas.height / 2;
        this.ball = new Ball(ball_x, ball_y);
    }

    draw() {
        // draw background
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // draw divider line
        let divider_x = this.canvas.width / 2;
        this.ctx.beginPath();
        this.ctx.setLineDash([20, 5]);
        this.ctx.moveTo(divider_x, 0);
        this.ctx.lineTo(divider_x, this.canvas.height);
        this.ctx.strokeStyle = 'white';
        this.ctx.stroke();

        // draw players
        this.player_1.draw(this.ctx);
        this.player_2.draw(this.ctx);

        // draw ball
        this.ball.draw(this.ctx);

        // TODO: handle scoring

        // handle ball collision with paddle/player
        if(this.ball.coord_x == this.player_1.coord_x + this.player_1.width
            && this.ball.coord_y >= this.player_1.coord_y 
            && this.ball.coord_y <= this.player_1.coord_y + this.player_1.height)
        {
            this.ball.velocity_x = this.ball.velocity_x * -1;
        }
        
        if(this.ball.coord_x == this.player_2.coord_x - this.ball.radius
            && this.ball.coord_y >= this.player_2.coord_y 
            && this.ball.coord_y <= this.player_2.coord_y + this.player_2.height)
        {
            this.ball.velocity_x = this.ball.velocity_x * -1;
        }
    }

    keydownHandler(event: KeyboardEvent) {
        switch(event.code) {
            case "ArrowUp":
                this.player_2.direction = -1;
                break;
            case "ArrowDown":
                this.player_2.direction = 1;
                break;
            case "KeyW":
                this.player_1.direction = -1;
                break;
            case "KeyS":
                this.player_1.direction = 1;
                break;
            case "Space":
                this.start();
                break;
        }
    }

    keyupHandler(event: KeyboardEvent) {
        switch(event.code) {
            case "ArrowUp":
            case "ArrowDown":
                this.player_2.direction = 0;
                break;
            case "KeyW":
            case "KeyS":
                this.player_1.direction = 0;
                break;
        }
    }

    start() {
        if(this.ball.velocity_x == 0) {
            this.ball.velocity_x = Math.random() > 0.5 ? 5 : -5;
            this.ball.velocity_y = Math.random() > 0.5 ? 2 : -2;
        }
    }
}
