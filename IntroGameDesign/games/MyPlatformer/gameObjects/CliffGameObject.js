class CliffGameObject extends GameObject{
    constructor(){
        super("CliffGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'rgb(100, 86, 68)', points: Assets.square})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(500, 500)
    }
}
