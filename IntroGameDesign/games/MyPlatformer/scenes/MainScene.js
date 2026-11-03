class MainScene extends Scene{
  constructor(){
    super("rgb(152, 188, 255)")
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
    this.instantiate(new PlatformGameObject(), new Vector2(0, window.innerHeight/2 - 100), 0)
  }
}
