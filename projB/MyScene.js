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
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        // this.plane = new Plane(this, 32);
        this.bird = new MyBird(this);
        this.terrain = new MyTerrain(this);

        // this.treeBranch = new MyTreeBranch(this);
        this.nest = new MyNest(this);

        this.lightning = new MyLightning(this);

        this.house = new MyHouse(this);

        this.map = new MyCubeMap(this, false);

        this.branchs = [];
        this.branchs.push(new MyTreeBranch(this, 5, 2, 5, Math.PI/4));
        this.branchs.push(new MyTreeBranch(this, -7, 2, -9, -Math.PI/16));
        this.branchs.push(new MyTreeBranch(this, -13, 2, 2, Math.PI/2));
        this.branchs.push(new MyTreeBranch(this, 5, 2, -10, -Math.PI/8));
        this.branchs.push(new MyTreeBranch(this, -8, 2, 10, Math.PI/5));

        //Objects connected to MyInterface
        this.scaleFactor = 2;
        this.speedFactor = 2;
        this.oldtime = 0;
        this.newtime = 0;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    update(curtime){
        if (this.newtime == 0){
            this.newtime = curtime;
            this.oldtime = this.newtime;            
        } else {
            this.oldtime = this.newtime; 
            this.newtime = curtime;
        }
        
        this.bird.update(this.newtime, this.oldtime);
        this.lightning.update(curtime);
        this.checkKeys();
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

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.terrain.display();
        this.popMatrix();

        // this.pushMatrix();
        // this.translate(0, 3, 0);
        this.bird.display();
        // this.popMatrix();
        

        this.pushMatrix();
        this.translate(8, 2, 0);
        this.scale(0.25, 0.25, 0.25);
        this.house.display();
        this.popMatrix();
        

        // this.treeBranch.display();

        // this.nest.display();

        this.pushMatrix();
        this.translate(0, 3, 0);
        this.lightning.display();
        this.popMatrix();

        for (var i = 0; i < this.branchs.length; i++)
            this.branchs[i].display();

        this.map.display();

        

        
        // ---- END Primitive drawing section
    }

    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in ​https://keycode.info/ 
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";
            keysPressed=true;
            this.bird.accelerate(0.1*this.speedFactor);
            // this.speedFactor += 0.1;
        }
        if (this.gui.isKeyPressed("KeyS"))  {
            text+=" S ";
            keysPressed=true;
            this.bird.accelerate(-0.1*this.speedFactor);
            // this.speedFactor -= 0.1;
        }
        if (this.gui.isKeyPressed("KeyA"))  {
            text+=" A ";
            keysPressed=true;
            this.bird.turn(-Math.PI/16*this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyD"))  {
            text+=" D ";
            keysPressed=true;
            this.bird.turn(Math.PI/16*this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyR"))  {
            text+=" R ";
            keysPressed=true;
            this.bird.reset();
        }
        if (this.gui.isKeyPressed("KeyL"))  {
            text+=" L ";
            keysPressed=true;
            this.lightning.startAnimation(this.newtime);
        }
        if (keysPressed)
            console.log(text);
    }
}