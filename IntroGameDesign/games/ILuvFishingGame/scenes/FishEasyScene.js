class FishEasyScene extends Scene{
    constructor(){
        super()
        this.instantiate(new PlayerHookObject(), new Vector2(Globals.screenWidth/2, Globals.screenHeight/2))
        this.instantiate(new FishingLineObject(), new Vector2(Globals.screenWidth/2, Globals.screenHeight/2))
        this.instantiate(new FishObject(), new Vector2(Globals.screenWidth * Math.random(), Globals.screenHeight + 20), Math.PI)
        this.instantiate(new ScoreGameObject(), new Vector2(60,20))
    }
}