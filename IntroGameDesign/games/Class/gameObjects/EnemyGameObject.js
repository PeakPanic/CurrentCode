class EnemyGameObject extends GameObject{
    direction = 1
    constructor(){
        super("Enemy", ["Enemy"])
        this.addComponent(new EnemyController())
        this.addComponent(new Polygon(), {fillStyle: "orange", points:  Assets.triangle})
        this.addComponent(new Health(), {health:2})
    }
}