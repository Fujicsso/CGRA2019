/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
        this.scene = scene;
        this.cube = new MyUnitCubeQuad(scene);
        this.pyramid = new MyPyramid(scene, 4);
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.positionx = 0;
        this.positiony = 3;
        this.positionz = 0;
        this.deltaY = 0;
        this.animationCycle = 0;
        this.velocity = 0.0;
        this.angle = 0.0;
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

    update(newtime, oldtime){
        this.move(newtime-oldtime);
        this.deltaY = Math.sin(newtime/1000*Math.PI);
        this.animationCycle = Math.sin(oldtime/1000*Math.PI*this.velocity);
    }

    move(delta){
        var frac = delta/1000;
        this.positionx += Math.cos(this.angle)*frac*this.velocity;
        this.positionz += Math.sin(this.angle)*frac*this.velocity;
    }

    turn(v){
        this.angle += v;
    }

    accelerate(v){
        this.velocity += v;
    }

    reset(){
        this.positionx = 0;
        this.positiony = 3;
        this.positionz = 0;
        this.velocity = 0;
        this.angle = 0;
    }
    

    display() {

        this.scene.pushMatrix();

        this.scene.translate(this.positionx, this.positiony, this.positionz);
        this.scene.rotate(-this.angle, 0, 1, 0);

        this.cube.display();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.7, 0);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.7, 0.8, 0.5);
        this.scene.scale(0.25, 0.25, 0.25);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.7, 0.8, -0.5);
        this.scene.scale(0.25, 0.25, 0.25);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1, 0.55, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.scale(0.25, 0.25, 0.25);
        this.pyramid.display();
        this.scene.popMatrix();

        // Right wing base
        this.scene.pushMatrix();
        this.scene.translate(0, 0.1+this.animationCycle*0.25, Math.sqrt(2)/4 + 0.5 - Math.abs(this.animationCycle) * 0.1); // t
        this.scene.rotate(-Math.PI/4*this.animationCycle, 1, 0, 0);  // t
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(0.5, 0.5, 0.5);
        this.diamond.display();
        this.scene.popMatrix();

        // Left wing base
        this.scene.pushMatrix();
        this.scene.translate(0, 0.1+this.animationCycle*0.25, -Math.sqrt(2)/4 - 0.5 + Math.abs(this.animationCycle) * 0.1);
        this.scene.rotate(Math.PI/4*this.animationCycle, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(0.5, 0.5, 0.5);
        this.diamond.display();
        this.scene.popMatrix();

        // Right wing
        this.scene.pushMatrix();
        this.scene.translate(0, 0.1+this.animationCycle*0.5, Math.sqrt(2)/2 + 0.5 - Math.abs(this.animationCycle) * 0.2);
        this.scene.scale( 0.25, 0.5, 0.5);
        this.scene.rotate(-Math.PI/4*(-this.animationCycle), 1, 0, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        // Left wing
        this.scene.pushMatrix();
        this.scene.translate(0, 0.1+this.animationCycle*0.5, -Math.sqrt(2)/2 - 0.5 + Math.abs(this.animationCycle) * 0.2);
        this.scene.scale( 0.25, 0.5, 0.5);
        this.scene.rotate(-Math.PI/4*this.animationCycle, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5 -Math.sqrt(2)/8, 0.1, -0.125);
        this.scene.rotate(Math.PI/4, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(0.25, 0.25, 0.25);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5 -Math.sqrt(2)/8, 0.1, 0.125);
        this.scene.rotate(-Math.PI/4, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(0.25, 0.25, 0.25);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

    }
}


