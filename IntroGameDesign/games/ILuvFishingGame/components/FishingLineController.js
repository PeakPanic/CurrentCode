class FishingLineController extends Component{
    speed = 100
    update(){
        if(Input.keysDown.includes("KeyW"))
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
        if(Input.keysDown.includes("KeyA"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        if(Input.keysDown.includes("KeyS"))
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed
        if(Input.keysDown.includes("KeyD"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed
    }
}