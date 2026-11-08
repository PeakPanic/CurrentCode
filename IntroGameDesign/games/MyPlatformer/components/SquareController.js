class SquareController extends Component {
  speed = 150
  jump = 250
  cameraVelocity = 0
  start() {
    this.isGrounded = false
    this.ridgidBody = this.gameObject.getComponent(RigidBody)
  }

  fixed_update(){

  }

  update() {
    //Check to see if the right arrow key is down.
    //If it is, move our character right
    if ((Input.keysDown.includes("ArrowRight")||Input.keysDown.includes("KeyD"))&& this.gameObject.getComponent(RigidBody).velocity.x < this.speed)
      this.gameObject.getComponent(RigidBody).velocity.x += 20

    //Check to see if the left arrow key is down.
    //If it is, move our character left
    if ((Input.keysDown.includes("ArrowLeft")||Input.keysDown.includes("KeyA"))&& this.gameObject.getComponent(RigidBody).velocity.x > -this.speed)
      this.gameObject.getComponent(RigidBody).velocity.x -= 20
    
    if (this.gameObject.getComponent(RigidBody).velocity.x > 0)
      this.gameObject.getComponent(RigidBody).velocity.x -= 5
    if (this.gameObject.getComponent(RigidBody).velocity.x < 0)
      this.gameObject.getComponent(RigidBody).velocity.x += 5

    if(Camera.main.transform.position.x < this.gameObject.transform.position.x){
      this.cameraVelocity += 3
    }
    else if(Camera.main.transform.position.x > this.gameObject.transform.position.x){
      this.cameraVelocity -= 2
    }

    Camera.main.transform.position.x = Camera.main.transform.position.x + Time.deltaTime * this.cameraVelocity

    if(this.cameraVelocity < 0){
      this.cameraVelocity += 1
    }
    else if(this.cameraVelocity > 0){
      this.cameraVelocity -= 1
    }
  }
  
  onCollisionStay(other, minimumTransformVector){
    this.gameObject.getComponent(RigidBody).velocity.y = 0
 
    if (Input.keysDown.includes("Space")||Input.keysDown.includes("KeyW"))
      this.gameObject.getComponent(RigidBody).velocity.y -= this.jump


  }

  
}
