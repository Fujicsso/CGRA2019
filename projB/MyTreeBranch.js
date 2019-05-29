/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
        this.scene = scene;
        this.cyl = new MyCylinder(scene, 10);
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

        this.cyl.display();

    }
}
