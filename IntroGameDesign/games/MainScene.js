class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(1000, 500))
        this.instantiate(new PlayerTwoGameObject(), new Vector2(50, 50))
    }
}