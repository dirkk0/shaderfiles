

uniform float iGlobalTime;
uniform vec2 iResolution;


varying vec2 vUv;
varying vec2 fragCoord;

void main( void ) {

    float time = iGlobalTime;
    vec2 resolution = iResolution;

    vec2 position = -1.0 + 2.0 * vUv;

    float red = abs( sin( position.x * position.y + time / 5.0 ) );
    float green = abs( sin( position.x * position.y + time / 4.0 ) );
    float blue = abs( sin( position.x * position.y + time / 3.0 ) );
    gl_FragColor = vec4( red, green, blue, 1.0 );

}
