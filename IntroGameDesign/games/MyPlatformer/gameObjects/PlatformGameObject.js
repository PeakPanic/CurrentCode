class PlatformGameObject extends GameObject{
  constructor(){
    super("PlatformGameObject", [], "default")
    this.addComponent(new Polygon(), {fillStyle: "rgb(58, 168, 67)", points: Assets.square})
    //this.addComponent(new Collider())
    this.transform.scale = new Vector2(350, 100)
  }
}
