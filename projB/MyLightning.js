/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
	constructor(scene) { 
        super(scene);

        //Objects connected to MyInterface
        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = ["F[-X][X]F[-X]+FX", "F[-X]+F[-X][X]FX"]; 
        this.angle = 25.0; 
        this.iterations = 3; 
        this.scaleFactor = 0.5;        

        this.timeStart = 0;
        this.depth = 0;

        this.doGenerate = function () {
            this.generate(
                this.axiom,
                {
                    "F": [ this.ruleF ],
                    "X": [ this.ruleX ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerate();
    }

    startAnimation(t){
        this.timeStart = t;
    }

    update(curtime){
        if (curtime > this.timeStart + 1000)
            this.depth = 0;
        else 
            this.depth = (curtime - this.timeStart)/1000*this.axiom.length;
        // console.log(this.depth);
    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length && i < this.depth; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }

    // cria o lexico da gramática
    initGrammar(){

        this.grammar = {
            "F": new MyScaledQuad(this.scene, 0.25, 1),
            "X": new MyScaledQuad(this.scene, 0.25, 1) 
        };
    };
}