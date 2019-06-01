/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene) { 
        super(scene);

        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = ["F[-X][X]F[-X]+FX"]; 
        this.angle = 25.0; 
        this.iterations = 3; 
        this.scaleFactor = 0.5;        

        this.timeStart = 0;
        this.depth = 0;

        this.doGenerate = function () {
            this.generate(
                this.axiom,
                {
                    "F": [ "FF" ],
                    "X": ["F[&X]^X", "F[-X][X]+X", "F[+X]-X", "F[/X][X]F[\\\\X]+X", "F[\\X][X]/X", "F[/X]\\X", "F[^X][X]F[&X]^X", "F[^X]&X"]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerate();
    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene) 
        };
    };
}