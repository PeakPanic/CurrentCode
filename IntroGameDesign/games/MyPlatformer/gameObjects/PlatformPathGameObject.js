class PlatformPathGameObject extends GameObject{
    constructor(){
        super("PlatformPathGameObject", [], "midground")
        this.addComponent(new Polygon(), {fillStyle: 'rgb(199, 137, 65)', points: Assets.square})
        //this.addComponent(new Collider())
        this.transform.scale = new Vector2(1000,50)
    }
}
