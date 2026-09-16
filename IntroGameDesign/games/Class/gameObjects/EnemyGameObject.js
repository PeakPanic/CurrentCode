class EnemyGameObject extends GameObject{
    direction = 1
    constructor(){
        super("Enemy")
        this.addComponent(new EnemyController())
        this.addComponent(new Polygon(), {fillStyle: "orange", points:  Assets.triangle})
    }
}