class GlassesTintGameObject extends RectGameObject{
    constructor(){
        super("GlassesTintGameObject", ["Glasses"], "UI")
        this.addComponent(new Polygon(), {fillStyle: 'black', points: Assets.square, alpha:0.0})
        this.transform.anchorMin = new Vector2(0, 0)
        this.transform.anchorMax = new Vector2(1, 1)
        this.transform.offsetUpperLeft = new Vector2(0, 0)
        this.transform.offsetLowerRight = new Vector2(0, 0)
    }
}
