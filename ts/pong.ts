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
            coord_y = (canvas.width / 2) - 50,
            coord_x_1 = 15,
            coord_x_2 = canvas.width - 35;

        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player_1 = new Player(coord_x_1, coord_y);
        this.player_2 = new Player(coord_x_2, coord_y);

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
            this.ball.velocity_x = 5;
            this.ball.velocity_y = 2;
        }
    }
}
