class HealthHeartGameObject extends RectGameObject{
    constructor(){
        super("HealthHeartGameObject", ["Health"], "UI")
        this.addComponent(new Polygon(), {fillStyle: 'red', points: Assets.triangle})
        this.transform.scale = new Vector2(20,20)
        this.transform.rotation = Math.PI
    }
}
