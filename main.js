// スクロールの値
window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
});

let waveSphereShader;
let waveSphereGraphics;

let repeatRectShader;
let repeatRectGraphics;

let moveRectShader;
let moveRectGraphics;

let randomCrossShader;
let randomCrossGraphics;

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   // canvasSetup;
// }

function preload() {
  waveSphereShader = loadShader("../waveShader/waveShader.vert", "../waveShader/waveShader.frag");
  repeatRectShader = loadShader("../repeatRectShader/repeatRectShader.vert", "../repeatRectShader/repeatRectShader.frag");
  moveRectShader = loadShader("../moveRectShader/moveRectShader.vert", "../moveRectShader/moveRectShader.frag");
  randomCrossShader = loadShader("../randomCrossShader/randomCrossShader.vert", "../randomCrossShader/randomCrossShader.frag");
}

function setup() {
  canvas = createCanvas(windowHeight, windowHeight, WEBGL);
  canvas.style('z-index', '-1');
  pixelDensity(1);

  waveSphereGraphics = createGraphics(windowHeight / 2, windowHeight / 2, WEBGL);
  repeatRectGraphics = createGraphics(windowHeight / 2, windowHeight / 2, WEBGL);
  moveRectGraphics = createGraphics(windowHeight / 2, windowHeight / 2, WEBGL);
  randomCrossGraphics = createGraphics(windowHeight / 2, windowHeight / 2, WEBGL);
}

function draw() {
  background(0, 200);

  waveSphereShader.setUniform('u_resolution', [width, height]);
  waveSphereShader.setUniform('u_time', frameCount * 0.01);
  waveSphereShader.setUniform('u_scroll', window.pageYOffset * 0.005);
  waveSphereGraphics.background(0);
  waveSphereGraphics.shader(waveSphereShader);
  waveSphereGraphics.rect(windowHeight / 2, windowHeight / 2, 100, 100);
  image(waveSphereGraphics, -windowHeight / 2, -windowHeight / 2, windowHeight / 2, windowHeight / 2);


  repeatRectShader.setUniform('u_resolution', [width, height]);
  repeatRectShader.setUniform('u_time', frameCount * 0.01);
  repeatRectShader.setUniform('u_scroll', window.pageYOffset * 0.003);
  repeatRectGraphics.background(0);
  repeatRectGraphics.shader(repeatRectShader);
  repeatRectGraphics.rect(windowHeight / 2, windowHeight / 2, 100, 100);
  image(repeatRectGraphics, 0, 0, windowHeight / 2, windowHeight / 2);


  moveRectShader.setUniform('u_resolution', [width, height]);
  moveRectShader.setUniform('u_time', frameCount * 0.01);
  moveRectShader.setUniform('u_scroll', window.pageYOffset * 0.001);
  moveRectGraphics.background(0);
  moveRectGraphics.shader(moveRectShader);
  moveRectGraphics.rect(windowHeight / 2, windowHeight / 2, 100, 100);
  image(moveRectGraphics, -windowHeight / 2, 0, windowHeight / 2, windowHeight / 2);


  randomCrossShader.setUniform('u_resolution', [width, height]);
  randomCrossShader.setUniform('u_time', frameCount * 0.01);
  randomCrossShader.setUniform('u_scroll', window.pageYOffset * 0.001);
  randomCrossGraphics.background(0);
  randomCrossGraphics.shader(randomCrossShader);
  randomCrossGraphics.rect(windowHeight / 2, windowHeight / 2, 100, 100);
  image(randomCrossGraphics, 0, -windowHeight / 2, windowHeight / 2, windowHeight / 2);
}