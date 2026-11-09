class BackgroundTreeGameObject extends GameObject{
    constructor(){
        super("BackgroundTreeGameObject", [], "parallaxbackground")
        this.addComponent(new Polygon(), {fillStyle: 'rgb(41, 126, 86)', points: Assets.triangle})
        //this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        this.addComponent(new BackgroundTreeController())
        this.transform.scale = new Vector2(80,200)
    }
}
