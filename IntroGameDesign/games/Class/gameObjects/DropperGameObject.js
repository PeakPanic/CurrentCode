class DropperGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new DropperController())
        this.addComponent(new Polygon(), {fillStyle: "red", points:[
            new Vector2(-5, -5),
            new Vector2(5,-5),
            new Vector2(5,5),
            new Vector2(-5,5),
        ]})
    }
}