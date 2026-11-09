class BasicEnemyGameObjectController extends Component{
    speed = 150
    jump = 250
    timeSinceLastThrow = 0
    throw = false

    start() {
        this.secondJump = true
        this.isGrounded = false
        this.timesSinceLastJump = 0
        this.ridgidBody = this.gameObject.getComponent(RigidBody)
  }

    fixed_update(){
    }
    
    update(){
        if(this.timeSinceLastThrow > 300){
            this.throw = true
        }
        this.timeSinceLastThrow++

        if(GameObject.find("SquareGameObject").transform.position.clone().x >= this.transform.position.x){
            if(this.ridgidBody.velocity.x < this.speed && !this.throw){
                this.ridgidBody.velocity.x += 5
            }
            else if(this.throw){
                if(Math.random() >= 0.50){
                    instantiate(new ThrownStickGameObject(), new Vector2(this.transform.position.x + 50, this.transform.position.y - 50))
                }
                this.throw = false
                this.timeSinceLastThrow = 0
            }

        }
        else if(GameObject.find("SquareGameObject").transform.position.clone().x < this.transform.position.x){
            if(this.ridgidBody.velocity.x > -this.speed && !this.throw){
                this.ridgidBody.velocity.x -= 5
            }
            else if(this.throw){
                if(Math.random() >= 0.50){
                    instantiate(new ThrownStickGameObject(), new Vector2(this.transform.position.x -50, this.transform.position.y - 50))
                }
                this.throw = false
                this.timeSinceLastThrow = 0
            }
        }
    }

    onCollisionStay(other, minimumTransformVector){
        this.ridgidBody.velocity.y = 0
    }
}
