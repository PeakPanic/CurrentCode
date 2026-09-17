class PlayerHookObject extends GameObject{
    constructor(){
        super("PlayerHook")
        this.addComponent(new PlayerHookController())
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.triangle})
    }
}