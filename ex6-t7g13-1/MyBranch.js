/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
        this.scene = scene;
        this.cyl = new MyCylinder(this.scene, 4);
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
        this.materialGrass.setAmbient(139/255, 69/255, 19/255, 1.0);
        this.materialGrass.setDiffuse(139/255, 69/255, 19/255, 1.0);
        this.materialGrass.setSpecular(139/255, 69/255, 19/255, 1.0);
        this.materialGrass.setShininess(0.0);
       }

    display() {

        this.materialGrass.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.5, 1, 0.5);
        this.cyl.display();
        this.scene.popMatrix();

    }
}
