/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {

	constructor(scene, night) {
		super(scene);
		this.scene = scene;
    this.night = night;
    this.quad = new MyQuad(this.scene);
    this.initMaterials();
	}

  initMaterials() {

    if (this.night != true){
      this.materialBack = new CGFappearance(this.scene);
      this.materialBack.setAmbient(5, 5, 5, 1);
      this.materialBack.loadTexture('images/hills_bk.png');
      this.materialBack.setTextureWrap('REPEAT', 'REPEAT');

      this.materialTop = new CGFappearance(this.scene);
      this.materialTop.setAmbient(5, 5, 5, 1);
      this.materialTop.loadTexture('images/hills_up.png');
      this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

      this.materialBot = new CGFappearance(this.scene);
      this.materialBot.setAmbient(5, 5, 5, 1);
      this.materialBot.loadTexture('images/hills_dn.png');
      this.materialBot.setTextureWrap('REPEAT', 'REPEAT');

      this.materialLeft = new CGFappearance(this.scene);
      this.materialLeft.setAmbient(5, 5, 5, 1);
      this.materialLeft.loadTexture('images/hills_lf.png');
      this.materialLeft.setTextureWrap('REPEAT', 'REPEAT');

      this.materialRight = new CGFappearance(this.scene);
      this.materialRight.setAmbient(5, 5, 5, 1);
      this.materialRight.loadTexture('images/hills_rt.png');
      this.materialRight.setTextureWrap('REPEAT', 'REPEAT');

      this.materialFront = new CGFappearance(this.scene);
      this.materialFront.setAmbient(5, 5, 5, 1);
      this.materialFront.loadTexture('images/hills_ft.png');
      this.materialFront.setTextureWrap('REPEAT', 'REPEAT');
    } else {
      this.materialBack = new CGFappearance(this.scene);
      this.materialBack.setAmbient(5, 5, 5, 1);
      // this.materialBack.setDiffuse(0, 0, 0, 1);
      // this.materialBack.setSpecular(0.1, 0.1, 0.1, 1);
      // this.materialBack.setShininess(10.0);
      this.materialBack.loadTexture('images/snowy_bk.png');
      this.materialBack.setTextureWrap('REPEAT', 'REPEAT');

      this.materialTop = new CGFappearance(this.scene);
      this.materialTop.setAmbient(2, 2, 2, 1);
      // this.materialTop.setDiffuse(0.9, 0.9, 0.9, 1);
      // this.materialTop.setSpecular(0.1, 0.1, 0.1, 1);
      this.materialTop.setShininess(10.0);
      this.materialTop.loadTexture('images/snowy_up.png');
      this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

      this.materialBot = new CGFappearance(this.scene);
      this.materialBot.setAmbient(2, 2, 2, 1);
      // this.materialBot.setDiffuse(0.9, 0.9, 0.9, 1);
      // this.materialBot.setSpecular(0.1, 0.1, 0.1, 1);
      this.materialBot.setShininess(10.0);
      this.materialBot.loadTexture('images/snowy_dn.png');
      this.materialBot.setTextureWrap('REPEAT', 'REPEAT');

      this.materialLeft = new CGFappearance(this.scene);
      this.materialLeft.setAmbient(2, 2, 2, 1);
      // this.materialLeft.setDiffuse(0.9, 0.9, 0.9, 1);
      // this.materialLeft.setSpecular(0.1, 0.1, 0.1, 1);
      this.materialLeft.setShininess(10.0);
      this.materialLeft.loadTexture('images/snowy_lf.png');
      this.materialLeft.setTextureWrap('REPEAT', 'REPEAT');

      this.materialRight = new CGFappearance(this.scene);
      this.materialRight.setAmbient(2, 2, 2, 1);
      // this.materialRight.setDiffuse(0.9, 0.9, 0.9, 1);
      // this.materialRight.setSpecular(0.1, 0.1, 0.1, 1);
      this.materialRight.setShininess(10.0);
      this.materialRight.loadTexture('images/snowy_rt.png');
      this.materialRight.setTextureWrap('REPEAT', 'REPEAT');

      this.materialFront = new CGFappearance(this.scene);
      this.materialFront.setAmbient(2, 2, 2, 1);
      // this.materialFront.setDiffuse(0.9, 0.9, 0.9, 1);
      // this.materialFront.setSpecular(0.1, 0.1, 0.1, 1);
      this.materialFront.setShininess(10.0);
      this.materialFront.loadTexture('images/snowy_ft.png');
      this.materialFront.setTextureWrap('REPEAT', 'REPEAT');
    }
    
   }

  display(){

    this.scene.pushMatrix();

    this.scene.scale(100,100,100);

    //Top
    this.materialRight.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.translate(0, 0, 0.5);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    //Sides
    this.materialBot.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.materialBack.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI/2, 0, 0, 1);
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.materialTop.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.materialFront.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI*3/2, 0, 0, 1);
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    //Bot
    this.materialLeft.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.scene.translate(0, 0, 0.5);
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.quad.display();
    this.scene.popMatrix();

    this.scene.popMatrix();

  }
}
