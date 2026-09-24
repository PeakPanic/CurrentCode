class FishObject extends GameObject{
    constructor(){
        super("Fish", ["Fish"])
        this.addComponent(new FishController)
        this.addComponent(new Polygon(), {fillStyle:"Blue", points:Assets.triangle})
        this.addComponent(new Polygon(), {fillStyle:"Blue", points:Assets.rectangle})
    }
}