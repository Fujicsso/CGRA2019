/**
 * MyScaledQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyScaledQuad extends CGFobject {

    constructor(scene, scaleX, scaleY) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
        this.scene = scene;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.quad = new MyQuad(scene);
    }

    initBuffers() {
        this.vertices = [];

        //Counter-clockwise reference of vertices
        this.indices = [];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    initMaterials() {

        this.materialWood = new CGFappearance(this.scene);
        this.materialWood.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialWood.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialWood.setSpecular(0, 0, 0, 1);
        this.materialWood.setShininess(0);
        this.materialWood.loadTexture('images/wood.png');
        this.materialWood.setTextureWrap('REPEAT', 'REPEAT');

    }
    

    display() {

        this.scene.pushMatrix();
        this.scene.scale(this.scaleX, this.scaleY, 1);
        this.scene.translate(0, 0.5, 0);
        this.quad.display();
        this.scene.popMatrix();

    }
}
