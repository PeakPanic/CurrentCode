class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2((50), (100)))
        this.instantiate(new PointsGameObject(), new Vector2(0,20))
    }
}