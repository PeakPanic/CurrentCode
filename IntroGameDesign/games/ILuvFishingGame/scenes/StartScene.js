class StartScene extends Scene{
    constructor(){
        super()
        this.instantiate(new SkyGameObject(), new Vector2(0, 0))
        this.instantiate(new StartMenuObject(), new Vector2(0, 0))
        this.instantiate(new LevelControllerGameObject())
    }
}