class PlatformGameObject extends GameObject{
  constructor(){
    super("PlatformGameObject", [], "background")
    this.addComponent(new Polygon(), {fillStyle: "rgb(58, 168, 67)", points: Assets.square})
    this.transform.scale = new Vector2(1000, 100)
    this.addComponent(new PlatformController())
  }
}
