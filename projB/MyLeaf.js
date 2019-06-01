/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
        this.scene = scene;
        this.tri = new MyTriangle(this.scene);
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
        this.materialGrass.setAmbient(0, 1, 0, 1.0);
        this.materialGrass.setDiffuse(0, 1, 0, 1.0);
        this.materialGrass.setSpecular(0, 1, 0, 1.0);
        this.materialGrass.setShininess(0.0);
       }

    display() {

        this.materialGrass.apply();
        this.tri.display();

    }
}
