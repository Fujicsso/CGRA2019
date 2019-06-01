/**
 * MyNest 
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {

    constructor(scene, x, y, z) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
        this.scene = scene;
        this.cube = new MyUnitCubeQuad(scene);
        this.x = x;
        this.y = y;
        this.z = z;
        this.branchs = [];
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

        this.materialWood.apply();

        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);

        for (var i = 0; i < this.branchs.length; i++)
            this.branchs[i].display();

        this.scene.pushMatrix();
        this.scene.scale(3, 0.5, 3);
        this.scene.translate(0, 0.5, 0);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, 1.25);
        this.scene.scale(3, 0.5, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, -1.25);
        this.scene.scale(3, 0.5, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.25, 0.75, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(3, 0.5, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.25, 0.75, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(3, 0.5, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

    }
}
