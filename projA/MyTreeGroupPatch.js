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
    this.rotationX = [];
    this.rotationZ = [];
    for (var i = 0; i < 9; i++){
      this.trees.push(new MyTree(this.scene, 2.5 + Math.random(), 0.75 + Math.random()/2, 3.5 + Math.random(), 1.5 + Math.random()/2, null, null));
      this.distanceX.push(Math.random());
      this.distanceZ.push(Math.random()*2 - 1);
      this.rotationX.push(Math.random()*2 - 1);
      this.rotationZ.push(Math.random()*2 - 1);
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

        this.scene.translate((i-1)*(5+this.distanceX[index]), 0, (j-1)*(5+this.distanceZ[index]));
        this.scene.rotate(Math.PI/24*this.rotationX[index], 1, 0, 0);
        this.scene.rotate(Math.PI/24*this.rotationZ[index], 0, 0, 1);
        this.trees[index].display();

        this.scene.popMatrix();
      }
    }
  }
}
