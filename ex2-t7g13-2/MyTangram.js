/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {

	constructor(scene) {
		super(scene);
		this.initBuffers();
    this.scene = scene;
    this.diamond = new MyDiamond(this.scene);
    this.triangle = new MyTriangle(this.scene);
    this.parallelogram = new MyParallelogram(this.scene);
    this.triangleBig = new MyTriangleBig(this.scene);
    this.triangleSmall = new MyTriangleSmall(this.scene);
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
      var mDiamondRot = [Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0, 0,
                  -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0, 0,
                  0, 0, 1, 0,
                  0, 0, 0, 1];

      var mDiamondTrans = [1, 0, 0, 0,
                  0, 1, 0, 0,
                  0, 0, 1, 0,
                  Math.sqrt(2)/2, Math.sqrt(2)/2, 0, 1]

      this.scene.multMatrix(mDiamondTrans);
      this.scene.multMatrix(mDiamondRot);
      this.diamond.display();

      this.scene.popMatrix();


      this.scene.pushMatrix();


      this.scene.translate(Math.sqrt(2)/2, Math.sqrt(2), 0);
      this.scene.rotate(5/4*Math.PI, 0, 0, 1);


      this.triangle.display();

      this.scene.popMatrix();


      this.scene.pushMatrix();

      this.scene.translate(-Math.sqrt(2), 0, 0);

      this.scene.scale(-1, 1, 1);

      this.scene.rotate(5/4*Math.PI, 0, 0, 1);

      this.parallelogram.display();

      this.scene.popMatrix();



      this.scene.pushMatrix();

      this.scene.translate(Math.sqrt(2), -Math.sqrt(2), 0);
      this.scene.rotate(-1/4*Math.PI, 0, 0, 1);

      this.triangleBig.display();

      this.scene.rotate(Math.PI, 0, 0, 1);

      this.triangleBig.display();

      this.scene.popMatrix();



      this.scene.pushMatrix();

      this.scene.translate(-Math.sqrt(2)/2, -Math.sqrt(2)/2, 0);
      this.scene.rotate(-1/4*Math.PI, 0, 0, 1);

      this.triangleSmall.display();

      this.scene.popMatrix();

      this.scene.pushMatrix();

      this.scene.translate(-Math.sqrt(2)/2, -3/2*Math.sqrt(2), 0);
      this.scene.rotate(3/4*Math.PI, 0, 0, 1);

      this.triangleSmall.display();

      this.scene.popMatrix();

  }
}
