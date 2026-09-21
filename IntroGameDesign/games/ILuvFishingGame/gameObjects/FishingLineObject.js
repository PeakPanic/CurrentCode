class FishingLineObject extends GameObject{
    constructor(){
        super("FishingLine")
        this.addComponent(new FishingLineController)
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.line})
    }
}