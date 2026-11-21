class MainScene extends Scene{
  constructor(){
    super("rgb(152, 188, 255)")
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
    this.instantiate(new PlatformGameObject(), new Vector2(500, 200), 0)
    this.instantiate(new PlatformPathGameObject(), new Vector2(500, 200), 0)
    this.instantiate(new PlatformPathColliderGameObject(), new Vector2(500, 200),0)
    this.instantiate(new TreeGameObject(), new Vector2(0, 40))
    this.instantiate(new CliffGameObject(), new Vector2(-700, -180))
    this.instantiate(new BasicEnemyGameObject(), new Vector2(1000 , 0))
    this.instantiate(new HealthBarGameObject())

    this.heartOne = this.instantiate(new HealthHeartGameObject, new Vector2(0,0))
    //this.heartOne.setParent(GameObject.find("HealthBarGameObject"))
    this.heartTwo = this.instantiate(new HealthHeartGameObject, new Vector2(20,0))
    // this.heartTwo.setParent(GameObject.find("HealthBarGameObject"))
    this.heartThree = this.instantiate(new HealthHeartGameObject, new Vector2(40,0))
    //this.heartThree.setParent(GameObject.find("HealthBarGameObject"))
    
    // const uiButton = this.instantiate(new UIButton())
    // uiButton.transform.anchorMin = new Vector2(0, 0)
    // uiButton.transform.anchorMax = new Vector2(1, 0)
    // uiButton.transform.offsetUpperLeft = new Vector2(50,50)
    // uiButton.transform.offsetLowerRight = new Vector2(-50,150)

  }
}
