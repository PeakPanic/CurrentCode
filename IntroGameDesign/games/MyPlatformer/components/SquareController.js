class SquareController extends Component {
  speed = 250
  jump = 350
  cameraVelocity = 0
  
  start() {
    this.secondJump = true
    this.isGrounded = false
    this.timesSinceLastJump = 0
    this.ridgidBody = this.gameObject.getComponent(RigidBody)
  }

  fixed_update(){

  }

  update() {
    this.timesSinceLastJump += 1

    //Check to see if the right arrow key is down.
    //If it is, move our character right
    if ((Input.keysDown.includes("ArrowRight")||Input.keysDown.includes("KeyD"))&& this.ridgidBody.velocity.x < this.speed)
      this.ridgidBody.velocity.x += 30

    //Check to see if the left arrow key is down.
    //If it is, move our character left
    if ((Input.keysDown.includes("ArrowLeft")||Input.keysDown.includes("KeyA"))&& this.ridgidBody.velocity.x > -this.speed)
      this.ridgidBody.velocity.x -= 30

    if ((Input.keysDownThisFrame.includes("Space")||Input.keysDownThisFrame.includes("KeyW")) && !this.isGrounded && this.secondJump && this.timesSinceLastJump > 15){
      this.ridgidBody.velocity.y = 0
      this.ridgidBody.velocity.y -= this.jump
      this.secondJump = false
      this.timesSinceLastJump = 0
    }

    //Acceleration
    if (this.ridgidBody.velocity.x > 0)
      this.ridgidBody.velocity.x -= 10
    if (this.ridgidBody.velocity.x < 0)
      this.ridgidBody.velocity.x += 10

    //Camera code
    Camera.main.transform.position.x = Camera.main.transform.position.x + (this.gameObject.transform.position.clone().x - Camera.main.transform.position.x) * 0.025
  }
  
  onCollisionStay(other, minimumTransformVector){
    this.ridgidBody.velocity.y = 0
    this.secondJump = true
    this.isGrounded = true
 
    if (Input.keysDownThisFrame.includes("Space")||Input.keysDownThisFrame.includes("KeyW"))
      this.ridgidBody.velocity.y -= this.jump
      this.isGrounded = false
      this.timesSinceLastJump = 0
  }

  
}
