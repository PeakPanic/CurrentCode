class ThrownStickGameObjectController extends Component{
    speed = 100
    launch = 200
    firstStart = true
    
    start(){
        this.ridgidBody = this.gameObject.getComponent(RigidBody)
    }

    update(){
        if(this.firstStart){
            if(GameObject.find("SquareGameObject").transform.position.clone().x < this.transform.position.x){
                this.ridgidBody.velocity.x = -this.speed
            }
            else{
                this.ridgidBody.velocity.x = this.speed
            }

            this.ridgidBody.velocity.y = this.launch
            this.firstStart = false
        }
        
    }
}
