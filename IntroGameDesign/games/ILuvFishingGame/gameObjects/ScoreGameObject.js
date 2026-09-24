class ScoreGameObject extends GameObject{
    constructor(){
        super("ScoreGameObject")
        this.addComponent(new TextLabel(), {text:"PlaceHolder"})
        this.addComponent(new ScoreController())
    }
}