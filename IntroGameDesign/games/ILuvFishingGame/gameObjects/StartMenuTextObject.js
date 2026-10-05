class StartMenuTextObject extends GameObject{
    constructor(){
        super("StartText", [], "UI")
        this.addComponent(new TextLabel(), {text:"PlaceHolder"})
        this.addComponent(new StartMenuTextController())
    }
}