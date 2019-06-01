/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {

	constructor(scene, textTop, textBot, textSide) {
		super(scene);
		this.scene = scene;
    this.textTop = textTop;
    this.textBot = textBot;
    this.textSide = textSide;
    this.quad = new MyQuad(this.scene);
    this.initMaterials();
	}

  initMaterials() {
    this.materialSide = new CGFappearance(this.scene);
    this.materialSide.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialSide.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialSide.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialSide.setShininess(10.0);
    this.materialSide.loadTexture('images/mineSide.png');
    this.materialSide.setTextureWrap('REPEAT', 'REPEAT');

    this.materialTop = new CGFappearance(this.scene);
    this.materialTop.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialTop.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialTop.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialTop.setShininess(10.0);
    this.materialTop.loadTexture('images/mineTop.png');
    this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

    this.materialBot = new CGFappearance(this.scene);
    this.materialBot.setAmbient(0.1, 0.1, 0.1, 1);
    this.materialBot.setDiffuse(0.9, 0.9, 0.9, 1);
    this.materialBot.setSpecular(0.1, 0.1, 0.1, 1);
    this.materialBot.setShininess(10.0);
    this.materialBot.loadTexture('images/mineBottom.png');
    this.materialBot.setTextureWrap('REPEAT', 'REPEAT');
   }

  display(){

    //Top
    if (this.textTop != undefined)
      this.textTop.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.translate(0, 0, 0.5);
    this.quad.display();
    this.scene.popMatrix();

    //Sides
    if (this.textSide != undefined)
      this.textSide.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 0, 0, 1);
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI*3/2, 0, 0, 1);
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    //Bot
    
    if (this.textBot != undefined)
      this.textBot.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.scene.translate(0, 0, 0.5);
    this.quad.display();
    this.scene.popMatrix();

  }
}
