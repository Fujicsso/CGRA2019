/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {

    constructor(scene, x, y, z, angle) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
        this.scene = scene;
        this.cyl = new MyCylinder(scene, 10);
        this.x = x;
        this.y = y;
        this.z = z;
        this.angle = angle
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

        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle, 0, 1, 0);

        this.materialWood.apply();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.25, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(0.25, 2, 0.25);
        this.scene.translate(0, -0.5, 0);
        this.cyl.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

    }
}
