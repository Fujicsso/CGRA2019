/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {

  constructor(scene){
    super(scene);
    this.initBuffers();
    this.scene = scene;
    this.trees = [];
    this.distanceX = [];
    this.distanceZ = [];
    for (var i = 0; i < 9; i++){
      this.trees.push(new MyLSPlant(this.scene));
      this.distanceX.push(Math.random());
      this.distanceZ.push(Math.random()*2 - 1);
    }
  }

	initBuffers() {
    this.vertices = [];

    //Counter-clockwise reference of vertices
    this.indices = [];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
  }

  display(){

    for (var i = 0; i < 3; i++){
      for (var j = 0; j < 3; j++){
        var index = i + j;
        this.scene.pushMatrix();

        this.scene.translate((i-1)*(2+this.distanceX[index]), 0, (j-1)*(2+this.distanceZ[index]));
        this.trees[index].display();

        this.scene.popMatrix();
      }
    }
  }
}
