class ThrownStickGameObjectController extends Component{
    speed = 400
    launch = 300
    firstStart = true
    
    start(){
        
    }

    update(){
        if(this.firstStart){
            if(GameObject.find("SquareGameObject").transform.position.clone().x < this.transform.position.x){
                this.gameObject.getComponent(RigidBody).velocity.x = -this.speed
            }
            else{
                this.gameObject.getComponent(RigidBody).velocity.x = this.speed
            }

            this.gameObject.getComponent(RigidBody).velocity.y = -this.launch
            this.firstStart = false
        }
        if(this.gameObject.getComponent(RigidBody).velocity.x > 0){
            this.gameObject.getComponent(RigidBody).velocity.x -= 2
            this.gameObject.transform.rotation += Math.PI * 0.05
        }
        else{
            this.gameObject.getComponent(RigidBody).velocity.x += 2
            this.gameObject.transform.rotation -= Math.PI * 0.05
        }

    }

    onTriggerStay(other, minimumTransformVector){
        if(other.name == "SquareGameObject"){
            other.getComponent(Health).health -= 1
        }
    }

    onCollisionStay(other, minimumTransformVector){
        this.gameObject.destroy()
    }
}
