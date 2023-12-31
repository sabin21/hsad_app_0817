uniform float time;
uniform float distanceFromCenter;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float PI = 3.141592653589793238;
void main() {
  // vUv = (uv-vec2(0.5))*(0.8 - 0.2*distanceFromCenter*(2. - distanceFromCenter)) + vec2(0.5);
  vUv = (uv-vec2(0.5))+ vec2(0.5);
  vec3 pos = position;
  pos.z += sin(PI*uv.x)*0.02;

  pos.y += sin(time*0.3)*0.02;
  vUv.y -= sin(time*0.3)*0.02;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}