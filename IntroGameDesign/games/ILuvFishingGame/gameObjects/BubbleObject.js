class BubbleObject extends GameObject{
    constructor(){
        super("Bubble", ["Bubble"], "fish")
        this.addComponent(new TextLabel(), {text:"PlaceHolder"})
        this.addComponent(new BubbleController)
    }
}