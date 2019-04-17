/**
 * MyGround
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyGround extends CGFobject {

    constructor(scene, scaleX, scaleZ, posY) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
        this.scene = scene;
        this.scaleX = scaleX;
        this.scaleZ = scaleZ;
        this.posY = posY;
        this.quadFront = new MyQuad(this.scene, scaleX, scaleZ/3);
        this.quadMid = new MyQuad(this.scene, scaleX/5, scaleZ/30);
        this.quadBack = new MyQuad(this.scene, scaleX, scaleZ/2);
    }

    initBuffers() {
        this.vertices = [];

        //Counter-clockwise reference of vertices
        this.indices = [];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    initMaterials() {
        this.materialGrass = new CGFappearance(this.scene);
        this.materialGrass.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialGrass.setDiffuse(0.75, 0.75, 0.75, 1);
        this.materialGrass.setSpecular(0.01, 0.01, 0.01, 1);
        this.materialGrass.setShininess(0.2);
        this.materialGrass.loadTexture('images/mineTop.png');
        this.materialGrass.setTextureWrap('REPEAT', 'REPEAT');
    
        this.materialGravel = new CGFappearance(this.scene);
        this.materialGravel.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialGravel.setDiffuse(0.75, 0.75, 0.75, 1);
        this.materialGravel.setSpecular(0.01, 0.01, 0.01, 1);
        this.materialGravel.setShininess(0.2);
        this.materialGravel.loadTexture('images/Floor.jpg');
        this.materialGravel.setTextureWrap('REPEAT', 'REPEAT');
       }

    display() {

        // 2/6
        // 1/6
        // 3/6

        this.scene.pushMatrix();
        this.materialGrass.apply();
        this.scene.translate(0, this.posY, this.scaleZ/3);
        this.scene.scale(this.scaleX, 1, this.scaleZ/3);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.quadFront.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.materialGravel.apply();
        this.scene.translate(0, this.posY, this.scaleZ/12);
        this.scene.scale(this.scaleX, 1, this.scaleZ/6);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.quadMid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.materialGrass.apply();
        this.scene.translate(0, this.posY, -this.scaleZ/4);
        this.scene.scale(this.scaleX, 1, this.scaleZ/2);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.quadBack.display();
        this.scene.popMatrix();


    }
}
