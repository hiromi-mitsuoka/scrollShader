#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
// uniform float u_mouse;

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution;
  
  st*=2.;
  
  st.x+=sin(st.y*20.+u_time*2.)*.05;
  
  float pct=0.;
  
  pct=distance(st,vec2(.5));
  
  pct*=3.;
  
  pct=pow(pct,10.);
  
  vec3 color=vec3(pct);
  
  gl_FragColor=vec4(1.-color,1.);
}