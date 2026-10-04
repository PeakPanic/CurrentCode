class ScoreGameObject extends GameObject{
    constructor(){
        super("ScoreGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"PlaceHolder"})
        this.addComponent(new ScoreController())
    }
}