/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {

  constructor(scene, level){
    super(scene);
		this.initBuffers();
    this.scene = scene;
    this.level = level;
    this.cube = new MyUnitCubeQuad(scene);
  }

	initBuffers() {
    this.vertices = [];

    //Counter-clockwise reference of vertices
    this.indices = [];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

  display(){

    for (var i = 0; i < this.level; i++){
      var delta = i;
      for (var x = -delta; x <= delta; x+= 1){
        this.scene.pushMatrix();
        this.scene.translate(x, this.level - i, -delta);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(x, this.level - i, +delta);
        this.cube.display();
        this.scene.popMatrix();
      }
      for (var z = -delta+1; z < delta; z+= 1){
        this.scene.pushMatrix();
        this.scene.translate(-delta, this.level - i, z);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(+delta, this.level - i, z);
        this.cube.display();
        this.scene.popMatrix();
      }
    }
  }
}
