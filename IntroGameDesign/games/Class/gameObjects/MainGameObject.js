class MainGameObject extends GameObject{
    constructor(){
        super("Main")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle: "cyan", points:Assets.triangle})
        this.transform.scale = new Vector2(1,1)
    }
}