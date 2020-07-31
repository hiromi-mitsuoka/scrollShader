// スクロールの値
window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
});

let waveSphereShader;
let waveSphereGraphics;

let moveRectShader;
let moveRectGraphics;

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   // canvasSetup;
// }

function preload() {
  waveSphereShader = loadShader("../waveShader/waveShader.vert", "../waveShader/waveShader.frag");
  moveRectShader = loadShader("../moveRectShader/moveRectShader.vert", "../moveRectShader/moveRectShader.frag");
}

function setup() {
  canvas = createCanvas(600, 600, WEBGL);
  canvas.style('z-index', '-1');
  pixelDensity(1);

  waveSphereGraphics = createGraphics(300, 300, WEBGL);
  moveRectGraphics = createGraphics(300, 300, WEBGL);
}

function draw() {
  background(0, 200);

  waveSphereShader.setUniform('u_resolution', [width, height]);
  waveSphereShader.setUniform('u_time', frameCount * 0.01);
  waveSphereShader.setUniform('u_scroll', window.pageYOffset * 0.01);
  waveSphereGraphics.background(0);
  waveSphereGraphics.shader(waveSphereShader);
  waveSphereGraphics.rect(300, 300, 100, 100);
  image(waveSphereGraphics, -300, -300, 300, 300);

  moveRectShader.setUniform('u_resolution', [width, height]);
  moveRectShader.setUniform('u_time', frameCount * 0.01);
  moveRectShader.setUniform('u_scroll', window.pageYOffset * 0.01);
  moveRectGraphics.background(0);
  moveRectGraphics.shader(moveRectShader);
  moveRectGraphics.rect(300, 300, 100, 100);
  image(moveRectGraphics, 0, -300, 300, 300);
}