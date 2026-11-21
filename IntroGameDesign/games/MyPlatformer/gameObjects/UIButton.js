class UIButton extends RectGameObject{
    constructor(){
        super("UIButton", [], "UI")
        this.addComponent(new Polygon(), {fillStyle: 'Gray', points: Assets.square, alpha: 0.0})
        this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        this.addComponent(new UIButtonController)
        //this.transform.scale = new Vector2(1,1)
        this.transform.useLetterBoxing = true

        this.transform.anchorMin = new Vector2(0, 0)
        this.transform.anchorMax = new Vector2(1, 0)
        this.transform.offsetUpperLeft = new Vector2(25, 25)
        this.transform.offsetLowerRight = new Vector2(-1058 + 25, 50)
    }
}
