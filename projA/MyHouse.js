/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
        this.scene = scene;
        this.cubeHouse = new MyUnitCubeQuad(scene, this.materialBricksDoor, this.materialBricksWindow, this.materialBricks);
        this.cubeWood = new MyUnitCubeQuad(scene, this.materialWood, this.materialWood, this.materialWood);
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

    initMaterials() {

        this.materialWood = new CGFappearance(this.scene);
        this.materialWood.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialWood.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialWood.setSpecular(0.05, 0.05, 0.05, 1);
        this.materialWood.setShininess(0);
        this.materialWood.loadTexture('images/wood.png');
        this.materialWood.setTextureWrap('REPEAT', 'REPEAT');
    
        this.materialMarmor = new CGFappearance(this.scene);
        this.materialMarmor.setAmbient(1, 1, 1, 1);
        this.materialMarmor.setDiffuse(0.1, 0.1, 0.1, 1);
        this.materialMarmor.setSpecular(0.9, 0.9, 0.9, 1);
        this.materialMarmor.setShininess(0);
        this.materialMarmor.loadTexture('images/Marmor.jpg');
        this.materialMarmor.setTextureWrap('REPEAT', 'REPEAT');
    
        this.materialRoof = new CGFappearance(this.scene);
        this.materialRoof.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialRoof.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialRoof.setSpecular(0.05, 0.05, 0.05, 1);
        this.materialRoof.setShininess(0);
        this.materialRoof.loadTexture('images/roof.png');
        this.materialRoof.setTextureWrap('REPEAT', 'REPEAT');

        this.materialRoofSide = new CGFappearance(this.scene);
        this.materialRoofSide.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialRoofSide.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialRoofSide.setSpecular(0.05, 0.05, 0.05, 1);
        this.materialRoofSide.setShininess(0);
        this.materialRoofSide.loadTexture('images/roof_side.png');
        this.materialRoofSide.setTextureWrap('REPEAT', 'REPEAT');

        this.materialRoofSmall = new CGFappearance(this.scene);
        this.materialRoofSmall.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialRoofSmall.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialRoofSmall.setSpecular(0.05, 0.05, 0.05, 1);
        this.materialRoofSmall.setShininess(0);
        this.materialRoofSmall.loadTexture('images/roof_small.png');
        this.materialRoofSmall.setTextureWrap('REPEAT', 'REPEAT');

        this.materialRoofBig = new CGFappearance(this.scene);
        this.materialRoofBig.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialRoofBig.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialRoofBig.setSpecular(0.05, 0.05, 0.05, 1);
        this.materialRoofBig.setShininess(0);
        this.materialRoofBig.loadTexture('images/roof_big.png');
        this.materialRoofBig.setTextureWrap('REPEAT', 'REPEAT');
    
        this.materialBricks = new CGFappearance(this.scene);
        this.materialBricks.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialBricks.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBricks.setSpecular(0.05, 0.05, 0.05, 1);
        this.materialBricks.setShininess(0);
        this.materialBricks.loadTexture('images/bricks.png');
        this.materialBricks.setTextureWrap('REPEAT', 'REPEAT');
    
        this.materialBricksDoor = new CGFappearance(this.scene);
        this.materialBricksDoor.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialBricksDoor.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBricksDoor.setSpecular(0.05, 0.05, 0.05, 1);
        this.materialBricksDoor.setShininess(0);
        this.materialBricksDoor.loadTexture('images/bricks_door.png');
        this.materialBricksDoor.setTextureWrap('REPEAT', 'REPEAT');
    
        this.materialBricksWindow = new CGFappearance(this.scene);
        this.materialBricksWindow.setAmbient(0.2, 0.2, 0.2, 1);
        this.materialBricksWindow.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBricksWindow.setSpecular(0.05, 0.05, 0.05, 1);
        this.materialBricksWindow.setShininess(0);
        this.materialBricksWindow.loadTexture('images/bricks_window.png');
        this.materialBricksWindow.setTextureWrap('REPEAT', 'REPEAT');
       }
    

    display() {

        this.scene.pushMatrix();

        this.scene.translate(0,2.5,0);

        //Cube forming house

        this.scene.pushMatrix();
        this.scene.scale(7, 5, 7);
        this.scene.rotate(-Math.PI/2, 0,1,0);
        this.cubeHouse.display();
        this.scene.popMatrix();

        // Base balcony

        this.scene.pushMatrix();
        this.scene.translate(-4.75, -2.075,0);
        this.scene.scale(2.5, 0.85, 7);
        this.cubeWood.display();
        this.scene.popMatrix();

        // Stair below

        this.scene.pushMatrix();
        this.scene.translate(-6.5, -2.2875,0);
        this.scene.scale(1.25, 0.85/2, 3.5);
        this.cubeWood.display();
        this.scene.popMatrix();

        //Stair above

        this.scene.pushMatrix();
        this.scene.translate(-6.3125, -2.2875 + 0.85/2,0);
        this.scene.scale(1.25/2, 0.85/2, 3.5);
        this.cubeWood.display();
        this.scene.popMatrix();

        // Pilar left

        this.scene.pushMatrix();
        this.scene.translate(-5.75,0.85/2,-3.25);
        this.scene.scale(0.5, 4.15, 0.5);
        this.cubeWood.display();
        this.scene.popMatrix();

        // Pilar right

        this.scene.pushMatrix();
        this.scene.translate(-5.75,0.85/2,+3.25);
        this.scene.scale(0.5, 4.15, 0.5);
        this.cubeWood.display();
        this.scene.popMatrix();

        // Stick vertical front left

        this.scene.pushMatrix();
        this.scene.translate(-5.875,-0.9,-1.75-0.125);
        this.scene.scale(0.25, 1.5, 0.25);
        this.cubeWood.display();
        this.scene.popMatrix();

        // Stick vertical front right

        this.scene.pushMatrix();
        this.scene.translate(-5.875,-0.9,+1.75+0.125);
        this.scene.scale(0.25, 1.5, 0.25);
        this.cubeWood.display();
        this.scene.popMatrix();

        // Stick horizontal front left

        this.scene.pushMatrix();
        this.scene.translate(-5.875,-0.2125,-2.5);
        this.scene.scale(0.25, 0.125, 1);
        this.cubeWood.display();
        this.scene.popMatrix();

        // Stick horizontal front right

        this.scene.pushMatrix();
        this.scene.translate(-5.875,-0.2125,+2.5);
        this.scene.scale(0.25, 0.125, 1);
        this.cubeWood.display();
        this.scene.popMatrix();

        // Stick side left
        
        this.scene.pushMatrix();
        this.scene.translate(-4.5,-0.2125,-3.375);
        this.scene.scale(2, 0.125, 0.25);
        this.cubeWood.display();
        this.scene.popMatrix();

        // Stick side right

        this.scene.pushMatrix();
        this.scene.translate(-4.5,-0.2125,3.375);
        this.scene.scale(2, 0.125, 0.25);
        this.cubeWood.display();
        this.scene.popMatrix();


        // this.materialRoof.apply();
        this.materialRoofBig.apply();
        this.scene.pushMatrix();
        this.scene.translate(-1.25,3.5,-3.5);        
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(2, 7, 5.5);
        this.prism.display();
        this.scene.popMatrix();


        this.materialRoofSide.apply();
        this.scene.pushMatrix();
        this.scene.translate(-3.75,4.22,-3.5);  
        this.scene.rotate(Math.PI/5.59, 0, 0, 1)      
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(0.5, 7, 3.25);
        this.prism.display();
        this.scene.popMatrix();

        this.materialRoof.apply();
        this.scene.pushMatrix();    
        this.scene.translate(-4.01,2.5,6.5);   
        this.scene.scale(1, 1, 1.5);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.scale(2.8225, 2.15, 2.8225);
        this.pyramid.display();
        this.scene.popMatrix();
        
        this.materialRoofSmall.apply();
        this.scene.pushMatrix();
        this.scene.translate(-4.01,3.2165,3.5);        
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(1.4*1.0246, 3, 2.25*1.0246);
        this.prism.display();
        this.scene.popMatrix();

        this.materialWood.apply();
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

        this.scene.popMatrix();

    }
}
