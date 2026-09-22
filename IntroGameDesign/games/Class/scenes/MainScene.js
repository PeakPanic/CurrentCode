class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2((window.innerWidth - 50), (window.innerHeight - 50)))
        this.instantiate(new EnemyGameObject(), new Vector2(50, 50), Math.PI)
        this.instantiate(new PointsGameObject(), new Vector2(0,20))
    }
}