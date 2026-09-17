class LaserGameObject extends GameObject{
    constructor(){
        super("Laser")
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {fillStyle: "white", points:Assets.triangle})
        this.transform.scale = new Vector2(0.25, 1)
    }
}