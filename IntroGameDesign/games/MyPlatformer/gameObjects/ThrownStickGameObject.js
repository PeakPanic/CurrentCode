class ThrownStickGameObject extends GameObject{
    constructor(){
        super("ThrownStickGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'rgb(107, 58, 17)', points: Assets.square})
        this.transform.scale = new Vector2(10,4)
        this.addComponent(new Collider())
        this.addComponent(new RigidBody(), {gravity:500})
        this.addComponent(new ThrownStickGameObjectController())
    }
}
