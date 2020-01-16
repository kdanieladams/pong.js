import { Pong } from './pong';

// config
let canvasId = 'pong_canvas',
    fps = 30;

// start
window.addEventListener('load', function(event){
    let canvas: HTMLCanvasElement = document.getElementById(canvasId) as HTMLCanvasElement;
    let pong = new Pong(canvas);

    document.addEventListener('keydown', (event) => { pong.keydownHandler(event); });
    document.addEventListener('keyup', (event) => { pong.keyupHandler(event); });

    this.setInterval(function(){
        pong.draw();
    }, 1000 / fps);
});