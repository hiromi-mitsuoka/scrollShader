#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_scroll;

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution.xy;
  vec3 color=vec3(0.);
  
  st*=2.;
  
  vec2 bl=smoothstep(st,vec2(0.+.5*abs(sin(u_scroll))),vec2(.1+.1*abs(cos(u_scroll*.6))));
  vec2 tr=smoothstep(1.-st,vec2(0.+.5*abs(sin(u_scroll*.8))),vec2(.1+.1*abs(cos(u_scroll*.4))));
  
  bl+=u_scroll*.01;
  tr-=u_scroll*.01;
  
  color=vec3(bl.x*bl.y*tr.x*tr.y);
  
  gl_FragColor=vec4(color,1.);
}