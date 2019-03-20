/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene, color) {
		super(scene);
		this.initBuffers(arguments.length > 1 ? arguments[1] : false);
	}
	initBuffers(color) {
		this.vertices = [
			-1, 0, 0,	//0
			1, 0, 0,	//1
			0, 1, 0,	//2
			-1, 0, 0,	//3
			1, 0, 0,	//4
			0, 1, 0	//5
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
				0, 0.5,
				0.25, 0.25,
				0, 0,
				0, 0.5,
				0.25, 0.25
			];
		} else {
			this.texCoords = [
				0.25, 0.75,
				0.75, 0.75,
				0.5, 0.5,
				0.25, 0.75,
				0.75, 0.75,
				0.5, 0.5
			];
		}


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
