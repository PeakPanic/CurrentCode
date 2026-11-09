class TreeGameObject extends GameObject{
    constructor(){
        super("TreeGameObject", [], "midground")
        this.addComponent(new Polygon(), {fillStyle: 'rgb(16, 80, 24)', points: Assets.triangle})
        //this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        //this.addComponent(new TreeGameObjectController)
        this.transform.scale = new Vector2(40,100)
    }
}
