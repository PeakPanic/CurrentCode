class HealthBarController extends Component{
    lastHealth = 3
    maxHealth = 3
    heartOne;
    heartTwo;
    heartThree;
    
    start(){
        this.heartOne = instantiate(new HealthHeartGameObject())
        this.heartOne.transform.offsetUpperLeft = new Vector2(-70, 20)
        this.heartOne.transform.offsetLowerRight = new Vector2(-20, 70)
        this.heartOne.transform.rotation = Math.PI

        this.heartTwo = instantiate(new HealthHeartGameObject())
        this.heartTwo.transform.offsetUpperLeft = new Vector2(-70 - 75, 20)
        this.heartTwo.transform.offsetLowerRight = new Vector2(-20 - 75, 70)
        this.heartTwo.transform.rotation = Math.PI

        this.heartThree = instantiate(new HealthHeartGameObject())
        this.heartThree.transform.offsetUpperLeft = new Vector2(-70 - 150, 20)
        this.heartThree.transform.offsetLowerRight = new Vector2(-20 - 150, 70)
        this.heartThree.transform.rotation = Math.PI

    }

    update(){
        let currentHealth = GameObject.find("SquareGameObject").getComponent(Health).health
        if(currentHealth != this.lastHealth){
            if(currentHealth == 3){
            this.heartOne.getComponent(Polygon).fillStyle = "red"
            this.heartTwo.getComponent(Polygon).fillStyle = "red"
            this.heartThree.getComponent(Polygon).fillStyle = "red"
            }
            else if(currentHealth == 2){
            this.heartOne.getComponent(Polygon).fillStyle = "red"
            this.heartTwo.getComponent(Polygon).fillStyle = "red"
            this.heartThree.getComponent(Polygon).fillStyle = "grey"
            }
            else if(currentHealth == 1){
            this.heartOne.getComponent(Polygon).fillStyle = "red"
            this.heartTwo.getComponent(Polygon).fillStyle = "grey"
            this.heartThree.getComponent(Polygon).fillStyle = "grey"
            }
            else if(currentHealth > this.maxHealth)
                currentHealth = this.maxHealth
            else if(currentHealth < 1){
                SceneManager.nextScene = ClosingScene
            }
        }
        this.lastHealth = currentHealth
    }
}
