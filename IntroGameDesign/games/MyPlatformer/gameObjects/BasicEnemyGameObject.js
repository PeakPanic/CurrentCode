class BasicEnemyGameObject extends GameObject{
    constructor(){
        super("BasicEnemyGameObject", ["Enemy"], "default")
        this.addComponent(new Polygon(), {fillStyle: 'red', points: Assets.square})
        this.addComponent(new Collider())
        this.addComponent(new BasicEnemyGameObjectController())
        this.addComponent(new RigidBody(), {gravity:500})
        this.addComponent(new Health(), {health: 1})
        this.transform.scale = new Vector2(20,20)
    }
}
