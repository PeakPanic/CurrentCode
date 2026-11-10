class HealthBarGameObject extends GameObject{
    constructor(){
        super("HealthBarGameObject", ["Health"], "UI")
        this.addComponent(new Polygon(), {fillStyle: 'red', points: Assets.triangle})
        this.addComponent(new HealthBarController())
        this.transform.scale = new Vector2(50,50)
    }
}
