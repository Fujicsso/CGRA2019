/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {


	enableNormalViz() {
        this.diamond.enableNormalViz();
     //   this.triangleSmall.enableNormalViz();
        this.parallelogram.enableNormalViz();
     //   this.triangle.enableNormalViz();
     //   this.triangleBig.enableNormalViz();
    }
    disableNormalViz() {
       this.diamond.disableNormalViz();
       // this.triangleSmall.disableNormalViz();
        this.parallelogram.disableNormalViz();
      //  this.triangle.disableNormalViz();
       // this.triangleBig.disableNormalViz();
    }
    
	constructor(scene) {
		super(scene);
		this.initBuffers();
    this.scene = scene;
    this.diamond = new MyDiamond(this.scene);
    this.triangle = new MyTriangle(this.scene);
    this.parallelogram = new MyParallelogram(this.scene);
    this.triangleBig = new MyTriangleBig(this.scene);
    this.triangleSmall = new MyTriangleSmall(this.scene);
    this.initMaterials();
	}
	initBuffers() {
    this.vertices = [];

    //Counter-clockwise reference of vertices
    this.indices = [];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	/* 
            G
            F
         C
         B  E  D 
         A        
                    */
    initMaterials() {
      this.materialA = new CGFappearance(this.scene);
      this.materialA.setAmbient(0.0, 0.0, 0.0, 1.0);
      this.materialA.setDiffuse(0, 0, 0, 1.0);
      this.materialA.setSpecular(0.701, 0.376, 0.745, 1.0);
      this.materialA.setShininess(10.0);

      this.materialB = new CGFappearance(this.scene);
      this.materialB.setAmbient(0.0, 0.0, 0.0, 1.0);
      this.materialB.setDiffuse(0, 0, 0, 1.0);
      this.materialB.setSpecular(1, 0.996, 0.121, 1.0);
      this.materialB.setShininess(10.0);

      this.materialC = new CGFappearance(this.scene);
      this.materialC.setAmbient(0.0, 0.0, 0.0, 1.0);
      this.materialC.setDiffuse(0, 0, 0, 1.0);
      this.materialC.setSpecular(0.960, 0.066, 0, 1.0);
      this.materialC.setShininess(10.0);

      this.materialD = new CGFappearance(this.scene);
      this.materialD.setAmbient(0.0, 0.0, 0.0, 1.0);
      this.materialD.setDiffuse(0, 0, 0, 1.0);
      this.materialD.setSpecular(0.960, 0.556, 0, 1.0);
      this.materialD.setShininess(10.0);

      this.materialE = new CGFappearance(this.scene);
      this.materialE.setAmbient(0.0, 0.0, 0.0, 1.0);
      this.materialE.setDiffuse(0, 0, 0, 1.0);
      this.materialE.setSpecular(0, 0.525, 0.960, 1.0);
      this.materialE.setShininess(10.0);

      this.materialF = new CGFappearance(this.scene);
      this.materialF.setAmbient(0.0, 0.0, 0.0, 1.0);
      this.materialF.setDiffuse(0, 0, 0, 1.0);
      this.materialF.setSpecular(0, 0.960, 0, 1.0);
      this.materialF.setShininess(10.0);

      this.materialG = new CGFappearance(this.scene);
      this.materialG.setAmbient(0.0, 0.0, 0.0, 1.0);
      this.materialG.setDiffuse(0, 0, 0, 1.0);
      this.materialG.setSpecular(0.905, 0.615, 0.819, 1.0);
      this.materialG.setShininess(10.0);
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
      this.scene.customMaterial.apply();
      this.diamond.display();

      this.scene.popMatrix();


      this.scene.pushMatrix();


      this.scene.translate(Math.sqrt(2)/2, Math.sqrt(2), 0);
      this.scene.rotate(5/4*Math.PI, 0, 0, 1);

      this.materialG.apply();
      this.triangle.display();

      this.scene.popMatrix();


      this.scene.pushMatrix();

      this.scene.translate(-Math.sqrt(2), 0, 0);

      this.scene.scale(-1, 1, 1);

      this.scene.rotate(5/4*Math.PI, 0, 0, 1);

      this.materialB.apply();

      this.parallelogram.display();

      this.scene.popMatrix();



      this.scene.pushMatrix();

      this.scene.translate(Math.sqrt(2), -Math.sqrt(2), 0);
      this.scene.rotate(-1/4*Math.PI, 0, 0, 1);

      this.materialE.apply();
      this.triangleBig.display();

      this.scene.rotate(Math.PI, 0, 0, 1);

      this.materialD.apply();
      this.triangleBig.display();

      this.scene.popMatrix();



      this.scene.pushMatrix();

      this.scene.translate(-Math.sqrt(2)/2, -Math.sqrt(2)/2, 0);
      this.scene.rotate(-1/4*Math.PI, 0, 0, 1);

      this.materialC.apply();
      this.triangleSmall.display();

      this.scene.popMatrix();

      this.scene.pushMatrix();

      this.scene.translate(-Math.sqrt(2)/2, -3/2*Math.sqrt(2), 0);
      this.scene.rotate(3/4*Math.PI, 0, 0, 1);

      this.materialA.apply();
      this.triangleSmall.display();

      this.scene.popMatrix();

  }
}
