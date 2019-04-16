/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.scene = scene;
        this.cube = new MyUnitCubeQuad(scene);
        this.prism = new MyPrism(scene, 3);
        this.pyramid = new MyPyramid(scene, 4);
        this.prismPent = new MyPrism(scene, 5);
    }

    initBuffers() {
        this.vertices = [];

        //Counter-clockwise reference of vertices
        this.indices = [];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    display() {

        //Cube forming house

        this.scene.pushMatrix();
        this.scene.scale(7, 5, 7);
        this.cube.display();
        this.scene.popMatrix();

        // Base balcony

        this.scene.pushMatrix();
        this.scene.translate(-4.75, -2.075,0);
        this.scene.scale(2.5, 0.85, 7);
        this.cube.display();
        this.scene.popMatrix();

        // Stair below

        this.scene.pushMatrix();
        this.scene.translate(-6.5, -2.2875,0);
        this.scene.scale(1.25, 0.85/2, 3.5);
        this.cube.display();
        this.scene.popMatrix();

        //Stair above

        this.scene.pushMatrix();
        this.scene.translate(-6.3125, -2.2875 + 0.85/2,0);
        this.scene.scale(1.25/2, 0.85/2, 3.5);
        this.cube.display();
        this.scene.popMatrix();

        // Pilar left

        this.scene.pushMatrix();
        this.scene.translate(-5.75,0.85/2,-3.25);
        this.scene.scale(0.5, 4.15, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        // Pilar right

        this.scene.pushMatrix();
        this.scene.translate(-5.75,0.85/2,+3.25);
        this.scene.scale(0.5, 4.15, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        // Stick vertical front left

        this.scene.pushMatrix();
        this.scene.translate(-5.875,-0.9,-1.75-0.125);
        this.scene.scale(0.25, 1.5, 0.25);
        this.cube.display();
        this.scene.popMatrix();

        // Stick vertical front right

        this.scene.pushMatrix();
        this.scene.translate(-5.875,-0.9,+1.75+0.125);
        this.scene.scale(0.25, 1.5, 0.25);
        this.cube.display();
        this.scene.popMatrix();

        // Stick horizontal front left

        this.scene.pushMatrix();
        this.scene.translate(-5.875,-0.2125,-2.5);
        this.scene.scale(0.25, 0.125, 1);
        this.cube.display();
        this.scene.popMatrix();

        // Stick horizontal front right

        this.scene.pushMatrix();
        this.scene.translate(-5.875,-0.2125,+2.5);
        this.scene.scale(0.25, 0.125, 1);
        this.cube.display();
        this.scene.popMatrix();

        // Stick side left
        
        this.scene.pushMatrix();
        this.scene.translate(-4.5,-0.2125,-3.375);
        this.scene.scale(2, 0.125, 0.25);
        this.cube.display();
        this.scene.popMatrix();

        // Stick side right

        this.scene.pushMatrix();
        this.scene.translate(-4.5,-0.2125,3.375);
        this.scene.scale(2, 0.125, 0.25);
        this.cube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-1.25,3.5,-3.5);        
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(2, 7, 5.5);
        this.prism.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-3.75,4.22,-3.5);  
        this.scene.rotate(Math.PI/5.59, 0, 0, 1)      
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(0.5, 7, 3.25);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();    
        this.scene.translate(-4.01,2.5,6.5);   
        this.scene.scale(1, 1, 1.5);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.scale(2.8225, 2.15, 2.8225);
        this.pyramid.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(-4.01,3.2165,3.5);        
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(1.4*1.0246, 3, 2.25*1.0246);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-5.25,-2.5,8.85);    
        this.scene.scale(0.35, 5, 0.35);
        this.prismPent.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.75,-2.5,8.85);    
        this.scene.scale(0.35, 5, 0.35);
        this.prismPent.display();
        this.scene.popMatrix();

    }
}
