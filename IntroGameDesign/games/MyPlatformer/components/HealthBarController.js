class HealthBarController extends Component{
    lastHealth = 3
    currentHealth = 3
    
    
    start(){
        let heartOne = instantiate(new HealthHeartGameObject(), new Vector2(0,0))
        let heartTwo = instantiate(new HealthHeartGameObject(), new Vector2(20,0))
        let heartThree = instantiate(new HealthHeartGameObject(), new Vector2(40,0))
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
