class HealthBarController extends Component{
    lastHealth = 3
    currentHealth = 3
    
    start(){
        instantiate(new HealthHeartGameObject(), new Vector2(0,0))

        //let test = instantiate(new BasicEnemyGameObject(), new Vector2(0,10))

        let heartOne = instantiate(new HealthHeartGameObject(), new Vector2(0,0))
        //heartOne.setParent(GameObject.find("HealthBarGameObject"))
        let heartTwo = instantiate(new HealthHeartGameObject(), new Vector2(20,0))
        // this.heartTwo.setParent(GameObject.find("HealthBarGameObject"))
        let heartThree = instantiate(new HealthHeartGameObject(), new Vector2(40,0))
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
