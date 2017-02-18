attribute vec3 in_Position;                  // (x,y,z)
//attribute vec3 in_Normal;                  // (x,y,z)     unused in this shader.
//attribute vec4 in_Colour;                    // (r,g,b,a) unused in this shader.
//attribute vec2 in_TextureCoord;              // (u,v)     unused in this shader.

varying vec2 fragCoord;
varying vec2 vUv;
void main()
{
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;

    fragCoord = position.xy;
}
