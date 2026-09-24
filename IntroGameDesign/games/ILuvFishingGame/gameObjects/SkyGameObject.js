class SkyGameObject extends GameObject{
    constructor(){
        super("Sky")
        this.addComponent(new Polygon(), {fillStyle:"white", points:Assets.screen_rectangle})
        this.addComponent(new SkyController())
    }
}