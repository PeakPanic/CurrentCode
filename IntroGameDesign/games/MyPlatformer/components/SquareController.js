class SquareController extends Component {
  speed = 250
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
      this.gameObject.getComponent(RigidBody).velocity.x += 30

    //Check to see if the left arrow key is down.
    //If it is, move our character left
    if ((Input.keysDown.includes("ArrowLeft")||Input.keysDown.includes("KeyA"))&& this.gameObject.getComponent(RigidBody).velocity.x > -this.speed)
      this.gameObject.getComponent(RigidBody).velocity.x -= 30
    
    if (this.gameObject.getComponent(RigidBody).velocity.x > 0)
      this.gameObject.getComponent(RigidBody).velocity.x -= 10
    if (this.gameObject.getComponent(RigidBody).velocity.x < 0)
      this.gameObject.getComponent(RigidBody).velocity.x += 10

    Camera.main.transform.position.x = Camera.main.transform.position.x + (this.gameObject.transform.position.clone().x - Camera.main.transform.position.x) * 0.03
  }
  
  onCollisionStay(other, minimumTransformVector){
    this.gameObject.getComponent(RigidBody).velocity.y = 0
 
    if (Input.keysDown.includes("Space")||Input.keysDown.includes("KeyW"))
      this.gameObject.getComponent(RigidBody).velocity.y -= this.jump


  }

  
}
