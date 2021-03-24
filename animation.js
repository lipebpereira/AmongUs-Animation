const width = 93;
const height = 122;
var playerFrames = 11;

window.onload = () => {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');

    spritesheet = new Image();
    spritesheet.src = 'spritesheet.png';
    frames = 0;
    playerFrames = 0;
    spritesheet.onload = animate;
}

const animate = () => {
    frames++;
    console.log(frames);
    window.requestAnimationFrame(animate);
}
