/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyQuad extends CGFobject {
	constructor(scene, scaleX, scaleZ) {
		super(scene);
		this.initBuffers();
		if (scaleX != undefined && scaleZ != undefined)
			this.updateTexCoords(scaleX, scaleZ);
	}
	
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0,	//0
			0.5, -0.5, 0,	//1
			-0.5, 0.5, 0,	//2
			0.5, 0.5, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2
		];

		//Facing Z positive
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];
		
		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(scaleX, scaleZ) {
		this.texCoords = [
			0, scaleZ,
			scaleX, scaleZ,
			0, 0,
			scaleX, 0
		];
		this.updateTexCoordsGLBuffers();
	}
}

