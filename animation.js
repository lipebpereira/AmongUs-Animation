const width = 93;
const height = 122;
const playerFrames = 11;

window.onload = () => {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');

    spritesheet = new Image();
    spritesheet.src = 'spritesheet.png';
    frames = 0;
    playerFrame = 0;
    spritesheet.onload = animate;
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        spritesheet,
        width * playerFrame, 0,
        width, height,
        0, 0,
        width, height
    )
    frames++;
    console.log(frames);
    window.requestAnimationFrame(animate);
}
