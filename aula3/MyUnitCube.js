/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            -0.5, -0.5, -0.5, 
            -0.5, -0.5, -0.5,
            -0.5, -0.5, -0.5,

            0.5, -0.5, -0.5,  
            0.5, -0.5, -0.5,
            0.5, -0.5, -0.5,

            -0.5, 0.5, -0.5,  
            -0.5, 0.5, -0.5,
            -0.5, 0.5, -0.5,

            0.5, 0.5, -0.5,  
            0.5, 0.5, -0.5,
            0.5, 0.5, -0.5,
            
            -0.5, -0.5, 0.5,
            -0.5, -0.5, 0.5,
            -0.5, -0.5, 0.5,

            0.5, -0.5, 0.5,
            0.5, -0.5, 0.5,
            0.5, -0.5, 0.5,

            -0.5, 0.5, 0.5,
            -0.5, 0.5, 0.5,
            -0.5, 0.5, 0.5,

            0.5, 0.5, 0.5,
            0.5, 0.5, 0.5,
            0.5, 0.5, 0.5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 6, 3, // definem a face
            6, 9, 3, // virada para baixo

            12, 15, 18, // definem a face
            15, 21, 18, // virada para cima

            1, 4, 16, // definem a face
            1, 16, 13, // perpendicular ao eixo do y, no lado negativo

            7, 22, 10, // definem a face
            7, 19, 22, // perpendicular ao eixo do y, no lado positivo

            11, 17, 5, // definem a face
            17, 11, 23, // perpendicular ao eixo do x, no lado positivo

            2, 14, 20, // definem a face
            8, 2, 20, // perpendicular ao eixo do x, no lado negativo
		];

		this.normals = [
                  0, 0, -1,
                  0, -1, 0,
                  -1, 0, 0, // 2

                  0, 0, -1,
                  0, -1, 0,
                  1, 0, 0, // 5

                  0, 0, -1,
                  0, 1, 0,
                  -1, 0, 0, // 8

                  0, 0, -1,
                  0, 1, 0,
                  1, 0, 0, // 11

                  0, 0, 1,
                  0, -1, 0,
                  -1, 0, 0, // 14

                  0, 0, 1,
                  0, -1, 0,
                  1, 0, 0, // 17

                  0, 0, 1,
                  0, 1, 0,
                  -1, 0, 0, // 20

                  0, 0, 1,
                  0, 1, 0,
                  1, 0, 0, // 23
		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
