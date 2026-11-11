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
  }
}
