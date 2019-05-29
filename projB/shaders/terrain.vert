attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;

void main() {

	vTextureCoord = aTextureCoord;

	vec4 color = texture2D(uSampler2, vTextureCoord);

	vec3 offset = vec3(0,0,1.0);

	offset = offset*color.b;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+(offset*10.0), 1.0);

	
}

