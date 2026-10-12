class GenericLevel extends Scene{
    constructor(){
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2((50), (100)))
        this.instantiate(new PointsGameObject(), new Vector2(0,20))
        //Camera.main.backgroundColor = "black"
        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(50,50))

        helperGameObject.transform.setParent(mainGameObject.transform)

        let sceneTimer = new GameObject("SceneTimer", [], "UI")
        sceneTimer.addComponent(new TextLabel(), {fillStyle:"white"})
        sceneTimer.addComponent(new SceneTimerComponent())
        this.instantiate(sceneTimer, new Vector2(0,50))

    }
}