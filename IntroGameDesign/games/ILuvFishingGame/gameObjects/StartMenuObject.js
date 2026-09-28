class StartMenuObject extends GameObject{
    constructor(){
        super("Boat")
        this.addComponent(new StartMenuController())
        this.addComponent(new Polygon(), {fillStyle: "rgb(179, 88, 36)", points:Assets.boat})
    }
}