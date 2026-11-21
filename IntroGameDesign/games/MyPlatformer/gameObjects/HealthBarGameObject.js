class HealthBarGameObject extends GameObject{
    constructor(){
        super("HealthBarGameObject", [], "UI")
        //this.addComponent(new Polygon(), {fillStyle: 'magenta', points: Assets.triangle})
        //this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        this.addComponent(new HealthBarController())
        this.transform.useLetterBoxing = true
        
        this.transform.anchorMin = new Vector2(0, 0)
        this.transform.anchorMax = new Vector2(1, 0)
        this.transform.offsetUpperLeft = new Vector2(630, 100)
        this.transform.offsetLowerRight = new Vector2(-100, 150)
    }
}
