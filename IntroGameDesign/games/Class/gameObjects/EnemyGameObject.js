class EnemyGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new EnemyController())
        this.addComponent(new Polygon(), {fillStyle: "orange", points:  Assets.triangle})
    }
}