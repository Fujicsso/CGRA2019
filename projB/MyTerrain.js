/**
* MyPyramid
* @constructor
*/
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        this.plane = new Plane(this.scene, 32)

        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");

        this.textureTerrainMap = new CGFtexture(this.scene, "images/heightmap2.jpg");
        this.textureTerrainTex = new CGFtexture(this.scene, "images/terrain.jpg");
        this.textureTerrainHeight = new CGFtexture(this.scene, "images/altimetry.png");
        
        this.shader.setUniformsValues({ uSampler2: 1 });
        this.shader.setUniformsValues({ uSampler3: 2 });

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    display() {

		// activate selected shader
        this.scene.setActiveShader(this.shader);
        

        this.textureTerrainHeight.bind(2);
        this.textureTerrainMap.bind(1);
        this.textureTerrainTex.bind(0);
        


		this.plane.display();

		// restore default shader (will be needed for drawing the axis in next frame)
		this.scene.setActiveShader(this.scene.defaultShader);
	}

}


