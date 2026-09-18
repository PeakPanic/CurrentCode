class FishObject extends GameObject{
    constructor(){
        super("Fish")
        this.addComponent(new FishController)
        this.addComponent(new Polygon(), {fillStyle:"Blue", points:Assets.triangle})
    }
}