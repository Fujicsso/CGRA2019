/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {

  constructor(scene){
    super(scene);
    this.initBuffers();
    this.initMaterials();
    this.scene = scene;
    this.trees = [];
    this.distanceX = [];
    this.distanceZ = [];
    this.rotationX = [];
    this.rotationZ = [];
    for (var i = 0; i < 6; i++){
      this.trees.push(new MyTree(this.scene, 2.5 + Math.random(), 0.75 + Math.random()/2, 3.5 + Math.random(), 1.5 + Math.random()/2, this.materialTrunk, this.materialTop));
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
  
  initMaterials() {

    this.materialTop = new CGFappearance(this.scene);
    this.materialTop.setAmbient(0.2, 0.2, 0.2, 1);
    this.materialTop.setDiffuse(0.6, 0.6, 0.6, 1);
    this.materialTop.setSpecular(0, 0, 0, 1);
    this.materialTop.setShininess(0);
    this.materialTop.loadTexture('images/TreeTop.jpg');
    this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

    this.materialTrunk = new CGFappearance(this.scene);
    this.materialTrunk.setAmbient(0.2, 0.2, 0.2, 1);
    this.materialTrunk.setDiffuse(0.6, 0.6, 0.6, 1);
    this.materialTrunk.setSpecular(0, 0, 0, 1);
    this.materialTrunk.setShininess(0);
    this.materialTrunk.loadTexture('images/TreeTrunk.jpg');
    this.materialTrunk.setTextureWrap('REPEAT', 'REPEAT');

  }

  display(){

    for (var i = 0; i < 6; i++){
      this.scene.pushMatrix();

      this.scene.translate((i-2.5)*(4+this.distanceX[i]), 0, this.distanceZ[i]);
      this.scene.rotate(Math.PI/24*this.rotationX[i], 1, 0, 0);
      this.scene.rotate(Math.PI/24*this.rotationZ[i], 0, 0, 1);
      this.trees[i].display();

      this.scene.popMatrix();
    }
  }
}
