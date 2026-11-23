class ClosingScene extends Scene{
    constructor(){
        super("rgb(66, 14, 14)")
        const closingText = new RectGameObject("Closing", [], "UI")
        closingText.addComponent(new TextLabel(), {text: "Die", textAlign: "center", textBaseLine: "middle", font:"50px sans"})
        closingText.transform.anchorMax = new Vector2(0.5, 0.25)
        closingText.transform.anchorMin = new Vector2(0.5, 0.25)
        closingText.transform.offsetLowerRight = new Vector2(1,1)
        closingText.transform.useLetterBoxing = true
        this.instantiate(closingText)

        const closingSceneControllerGameObject = new GameObject("OpeningSceneController",[], "UI")
        closingSceneControllerGameObject.addComponent(new ClosingSceneController())
        this.instantiate(closingSceneControllerGameObject)
    }
}
