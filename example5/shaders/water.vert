attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;

void main() {

	vec4 color = texture2D(uSampler2, vTextureCoord);

	vec3 offset = vec3(0.0,0.0,10.0);

	offset = offset*sin(timeFactor)*color.b;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);

	vTextureCoord = aTextureCoord;
}

