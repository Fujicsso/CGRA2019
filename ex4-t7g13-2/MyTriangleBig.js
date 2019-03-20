/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene, color) {
		super(scene);
		this.initBuffers(arguments.length > 1 ? arguments[1] : false);
	}
	initBuffers(color) {
		this.vertices = [
			-2, 0, 0,	//0
			2, 0, 0,	//1
			0, 2, 0,	//2
			-2, 0, 0,	//3
			2, 0, 0,	//4
			0, 2, 0	//5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			5, 4, 3
		];

		this.normals = [];
		for (var i = 0; i < (this.vertices.length / 2); i += 3) {
			this.normals.push(0, 0, 1);
		}
		for (var i = (this.vertices.length / 2); i < this.vertices.length; i += 3) {
			this.normals.push(0, 0, -1);
		}

		if (color){
			this.texCoords = [
				0, 0,
				1, 0,
				0.5, 0.5,
				0, 0,
				1, 0,
				0.5, 0.5
			];
		} else {
			this.texCoords = [
				1, 0,
				1, 1,
				0.5, 0.5,
				1, 0,
				1, 1,
				0.5, 0.5
			];
		}


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
