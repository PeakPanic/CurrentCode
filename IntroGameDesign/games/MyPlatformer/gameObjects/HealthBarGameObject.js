class HealthBarGameObject extends GameObject{
    constructor(){
        super("HealthBarGameObject", [], "UI")
        //this.addComponent(new Polygon(), {fillStyle: 'magenta', points: Assets.triangle})
        //this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        this.addComponent(new HealthBarController())
        this.transform.useLetterBoxing = true
    }
}
