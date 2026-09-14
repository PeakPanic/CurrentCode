class PlayerTwoGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerTwoController())
        this.addComponent(new Polygon(), {fillStyle: "orange", points:[
            new Vector2(-10,-10),
            new Vector2(10, -10),
            new Vector2(10, 10),
            new Vector2(-10, 10),
        ]})
    }
}