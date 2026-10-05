class StartScene extends Scene{
    constructor(){
        super()
        this.instantiate(new SkyGameObject(), new Vector2(-window.innerWidth/2, -window.innerHeight/2))
        this.instantiate(new StartMenuObject(), new Vector2(0, 0))
        this.instantiate(new StartMenuTextObject(), new Vector2(window.innerWidth/2 - 80, window.innerHeight/3))
        this.instantiate(new LevelControllerGameObject())
    }
}