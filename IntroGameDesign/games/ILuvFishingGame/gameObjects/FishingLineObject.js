class FishingLineObject extends GameObject{
    constructor(){
        super("FishingLine")
        this.addComponent(new FishingLineController)
    }
}