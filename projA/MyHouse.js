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
    }

    initBuffers() {
        this.vertices = [];

        //Counter-clockwise reference of vertices
        this.indices = [];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    display() {

        //    -1, -1, 0.5
        //    1, -1, 0.5
        //      -1, -1, -1

    }
}
