#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_scroll;

float rand(vec2 st){
  return fract(sin(dot(st,vec2(12.9898,78.233)))*43758.5453);
}

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution.xy;
  vec3 color=vec3(0.);
  
  st*=2.;
  
  float n=5.+floor(u_scroll*.1);
  
  st=fract(st*n);
  st=(floor(st*n)+.5)/n;
  
  float offs=rand(st);
  
  float pct=distance(st,vec2(.5));
  pct=step(pct,.2);
  
  pct=1.+sin(pct*40.-u_scroll*2.+offs);
  // pct=1.*sin(pct*3.-u_time*3.);
  
  color=vec3(pct);
  
  gl_FragColor=vec4(1.-color,1.);
}