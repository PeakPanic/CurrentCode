class MainScene extends Scene{
    screenWidth = window.innerWidth
    screenHeight = window.innerHeight
    constructor(){
        super()
        this.instantiate(new PlayerHookObject(), new Vector2(this.screenWidth/2, this.screenHeight/2))

    }
}