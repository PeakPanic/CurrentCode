class HealthBarController extends Component{
    lastHealth = 3
    currentHealth = 3
    
    start(){
        this.transform.anchorMin = new Vector2(0, 0)
        this.transform.anchorMax = new Vector2(1, 0)
        this.transform.offsetUpperLeft = new Vector2(630, 100)
        this.transform.offsetLowerRight = new Vector2(-100, 150)
        this.heartOne = instantiate(new HealthHeartGameObject, new Vector2(0,0))
        //this.heartOne.setParent(GameObject.find("HealthBarGameObject"))
        this.heartTwo = instantiate(new HealthHeartGameObject, new Vector2(20,0))
       // this.heartTwo.setParent(GameObject.find("HealthBarGameObject"))
        this.heartThree = instantiate(new HealthHeartGameObject, new Vector2(40,0))
        //this.heartThree.setParent(GameObject.find("HealthBarGameObject"))
    }

    update(){
        //this.currentHealth = GameObject.find("SquareGameObject").getComponent("Health").health
        if(this.currentHealth != this.lastHealth){
            if(this.currentHealth < this.lastHealth){
                this.lastHealth - this.currentHealth


            }
        }
    }
}
