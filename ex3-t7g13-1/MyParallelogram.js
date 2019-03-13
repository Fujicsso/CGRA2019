/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram  extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			2, 0, 0,	//1
			3, 1, 0,	//2
			1, 1, 0,	//3
			0, 0, 0,	//4  0
			2, 0, 0,	//5  1
			3, 1, 0,	//6  2
			1, 1, 0,	//7  3
		];

		//Counter-clockwise reference of vertices
		// this.indices = [
		// 	0, 1, 3,
		// 	1, 2, 3
		// ];

		this.indices = [
			3, 1, 0,
			3, 2, 1,
			4, 5, 7,
			5, 6, 7,
		];

		this.normals = [];
		for (var i = (this.vertices.length / 2); i < this.vertices.length; i += 3) {
			this.normals.push(0, 0, 1);
		}
		for (var i = 0; i < (this.vertices.length / 2); i += 3) {
			this.normals.push(0, 0, -1);
		}


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
