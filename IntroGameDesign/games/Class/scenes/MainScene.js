class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2((window.innerWidth - 50), (window.innerHeight - 50)))
        this.instantiate(new PlayerTwoGameObject(), new Vector2(50, 50))
    }
}