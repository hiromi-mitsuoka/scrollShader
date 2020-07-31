#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

//連続輪の四角版の実装

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution.xy;
  vec3 color=vec3(0.);
  
  st*=2.;
  
  float pct=0.;
  pct=distance(st.x,.5);
  pct+=distance(st.y,.5);
  // pct*=3.;
  pct*=3.+u_time*10.;
  // pct*=u_time*10.;
  pct=floor(pct);
  pct=abs(sin(pct-u_time*3.));
  pct=step(pct,.5);
  
  color=vec3(pct);
  
  gl_FragColor=vec4(color,1.);
}