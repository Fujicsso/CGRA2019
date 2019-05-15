/**
* MyPrism
* @constructor
*/
class MyPrism extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        this.vertices.push(0,0,0);
        this.vertices.push(0,1,0);
        this.normals.push(0, -1, 0, 0, 1, 0);
        this.texCoords.push(0.5, 0, 0.5, 0);

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            var smed = Math.sin(ang+(alphaAng/2));
            var cmed = Math.cos(ang+(alphaAng/2));

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(caa, 0, -saa);
            this.vertices.push(ca, 1, -sa);
            this.vertices.push(caa, 1, -saa);
            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);  
            
            this.texCoords.push(i/this.slices, 0);
            this.texCoords.push((i+1)/this.slices, 0);
            this.texCoords.push(i/this.slices, 1);
            this.texCoords.push((i+1)/this.slices, 1);
            this.texCoords.push(i/this.slices, 1);
            this.texCoords.push(i/this.slices, 1);

            // triangle normal computed by cross product of two edges
            var normal= [
                cmed,
                0,
                -smed
            ];

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(0, -1, 0);
            this.normals.push(0, 1, 0);

            // this.texCoords = [
            //     0, 1,
            //     1, 1,
            //     0, 0,
            //     1, 0
            // ]
          
            this.indices.push(6*i+2, 6*i+1+2 , 6*i+2+2, 6*i+3+2 , 6*i+2+2, 6*i+1+2);
            
            ang+=alphaAng;
        }

        for(var i = 0; i < this.slices; i++){
            var next = (i+1)%this.slices;
            this.indices.push(6*next+6, 6*i+6 , 0, 6*i+7 , 6*next+7, 1);
        }
        
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
