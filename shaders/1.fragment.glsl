uniform float iGlobalTime;
uniform vec2 iResolution;
void main() {
    float x = mod(iGlobalTime + gl_FragCoord.x, 20.) < 10. ? 1. : 0.;
    float y = mod(iGlobalTime + gl_FragCoord.y, 20.) < 10. ? 1. : 0.;
    gl_FragColor = vec4(vec3(min(x, y)), 1.);
}
