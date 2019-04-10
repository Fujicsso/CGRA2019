/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {

  constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture){
    super(scene);
		this.initBuffers();
    this.scene = scene;
    this.trunkHeight = trunkHeight;
    this.trunkRadius = trunkRadius;
    this.treeTopHeight = treeTopHeight;
    this.treeTopRadius = treeTopRadius;
    this.trunkTexture = trunkTexture;
    this.treeTopTexture = treeTopTexture;

    this.cylinder = new MyCylinder(this.scene, 10);
    this.cone = new MyCone(this.scene, 10, 10);
  }

	initBuffers() {
    this.vertices = [];

    //Counter-clockwise reference of vertices
    this.indices = [];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

  display(){

    this.scene.pushMatrix();

    this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
    this.cylinder.display();

    this.scene.popMatrix();


    this.scene.pushMatrix();

    this.scene.translate(0, this.trunkHeight, 0);
    this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
    this.cone.display();

    this.scene.popMatrix();

  }
}
