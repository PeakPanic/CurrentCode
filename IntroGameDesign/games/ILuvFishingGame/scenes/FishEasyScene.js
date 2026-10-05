class FishEasyScene extends Scene{
    constructor(){
        super()
        this.instantiate(new PlayerHookObject(), new Vector2(0, 0))
        this.instantiate(new FishingLineObject(), new Vector2(0, -Globals.screenHeight/2))
        //this.instantiate(new FishObject(), new Vector2(Globals.screenWidth * Math.random() - window.innerWidth/2, Globals.screenHeight + 20), Math.PI)
        this.instantiate(new ScoreGameObject(), new Vector2(60,20))
        this.instantiate(new SkyGameObject(), new Vector2(-window.innerWidth/2, -window.innerHeight/2))
        this.instantiate(new StartMenuObject(), new Vector2(0, 0))
        this.instantiate(new LevelControllerGameObject())
    }
}