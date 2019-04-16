/**
 * MyLantern
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLantern extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
        this.scene = scene;
        this.prism = new MyPrism(scene, 4);
        this.pyramid = new MyPyramid(scene, 4);
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
        this.materialWood.setAmbient(10, 10, 10, 1);
        this.materialWood.setDiffuse(0, 0, 0, 1);
        // this.materialWood.setSpecular(0.1, 0.1, 0.1, 1);
        // this.materialWood.setShininess(10.0);
        this.materialWood.loadTexture('images/WoodPlanksOld.jpg');
        this.materialWood.setTextureWrap('REPEAT', 'REPEAT');
    
        this.materialMarmor = new CGFappearance(this.scene);
        this.materialMarmor.setAmbient(10, 10, 10, 1);
        // this.materialMarmor.setDiffuse(0.9, 0.9, 0.9, 1);
        // this.materialMarmor.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialMarmor.setShininess(10.0);
        this.materialMarmor.loadTexture('images/Marmor.jpg');
        this.materialMarmor.setTextureWrap('REPEAT', 'REPEAT');
       }
    

    display() {

        this.scene.pushMatrix();

        this.scene.scale(0.125, 0.125, 0.125);

        this.scene.pushMatrix();   
        this.scene.translate(0, -3, 0);
        this.scene.scale(1, 3, 1);
        // this.scene.rotate(Math.PI/4, 0, 1, 0); 
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();   
        this.scene.translate(0, -5 -3, 0);
        this.scene.scale(7, 7, 7);        
        // this.scene.rotate(Math.PI/4, 0, 1, 0); 
        this.pyramid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();   
        this.scene.translate(5, -15 -3, 0);
        this.scene.scale(1, 10, 1);
        this.prism.display();
        this.scene.translate(- 10, 0, 0);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();   
        this.scene.translate(0, -15 -3, 5);
        this.scene.scale(1, 10, 1);
        this.prism.display();
        this.scene.translate( 0, 0, -10);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();   
        this.scene.translate(0, -15 -3, 0);
        this.scene.scale(7, 5, 7);        
        this.scene.rotate(Math.PI, 1, 0, 0); 
        this.pyramid.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}

