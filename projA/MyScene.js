/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.prism = new MyPrism(this, 6);
        this.cylind = new MyCylinder(this, 12);
        this.treeRowPatch = new MyTreeRowPatch(this);
        this.treeGroupPatch = new MyTreeGroupPatch(this);
        this.hill = new MyVoxelHill(this, 4);
        this.hill2 = new MyVoxelHill(this, 3);
        this.ground = new MyGround(this, 50, 50, 0);
        this.house = new MyHouse(this);
        this.map = new MyCubeMap(this, false);
        this.lantern = new MyLantern(this);

        //Objects connected to MyInterface
        this.scaleFactor = 0.5;
    }
    initLights() {

        // this.lights[0].setPosition(0, 30, 0, 1.0);
        // this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        // this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        // this.lights[0].disable();
        // this.lights[0].setVisible(true);
        // this.lights[0].enable();
        // this.lights[0].update();
        

        // this.lights[1].setPosition(5.0, 5.0, 5.0, 1.0);
        // this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        // this.lights[1].setSpecular(1.0, 1.0, 0.0, 1.0);
        // this.lights[1].disable();
        // this.lights[1].setVisible(true);
        // // this.lights[1].enable();
        // this.lights[1].update();
        

        this.lights[2].setPosition(-4, 3.25, 6, 1.0);
        this.lights[2].setDiffuse(5, 5, 5, 1);
        this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[2].setLinearAttenuation(0.5);
        this.lights[2].disable();
        this.lights[2].setVisible(true);
        this.lights[2].enable();
        this.lights[2].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        this.lights[2].update();
        // ---- BEGIN Primitive drawing section

        this.pushMatrix();
        this.translate(0, 0, 12);
        this.scale(0.75, 0.75, 0.75);
        this.treeRowPatch.display();
        this.popMatrix();
        


        this.pushMatrix();
        this.translate(-8, 0, -8);
        this.scale(0.75, 0.75, 0.75);
        this.treeGroupPatch.display();
        this.popMatrix();
        


        this.pushMatrix();
        this.translate(8, 0, -8);
        this.hill.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0, 0, -8);
        this.hill2.display();
        this.popMatrix();
        
        

        // this.pushMatrix();

        // this.scale(50, 50, 1);

        this.ground.display();
        this.house.display();


        this.pushMatrix();
        this.scale(2,2,2);
        this.map.display();
        this.popMatrix();
        

        this.pushMatrix();
        this.translate(-4, 5, 6);
        this.lantern.display();
        this.popMatrix();

        // this.treeGroupPatch.display();

        // this.popMatrix();

        // ---- END Primitive drawing section
    }
}
