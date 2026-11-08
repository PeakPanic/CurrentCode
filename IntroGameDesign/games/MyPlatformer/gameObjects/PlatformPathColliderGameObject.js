class PlatformPathColliderGameObject extends GameObject{
    constructor(){
        super("PlatformPathColliderGameObject", [], "background")
        //this.addComponent(new Polygon(), {fillStyle: 'magenta', points: Assets.triangle})
        this.addComponent(new Collider(), {points: Assets.square})
        this.transform.scale = new Vector2(1000,15)
    }
}
