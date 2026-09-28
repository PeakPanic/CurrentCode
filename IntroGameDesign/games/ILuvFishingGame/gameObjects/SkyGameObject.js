class SkyGameObject extends GameObject{
    constructor(){
        super("Sky")
        this.addComponent(new Polygon(), {fillStyle:"rgb(181, 218, 255)", points:Assets.screen_rectangle})
        this.addComponent(new SkyController())
    }
}