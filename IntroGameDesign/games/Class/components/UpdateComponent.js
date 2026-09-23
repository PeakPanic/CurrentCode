class UpdateComponent extends Component{

    speed = 150

    start(){
        this.timeSinceLastLaser = 0
    }

    update(){
        this.timeSinceLastLaser += 1

        if ((Input.keysDown.includes("ArrowRight")||Input.keysDown.includes("KeyL")))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed
    
        if ((Input.keysDown.includes("ArrowLeft")||Input.keysDown.includes("KeyJ")))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
    
        if ((Input.keysDown.includes("ArrowUp")||Input.keysDown.includes("KeyI"))) 
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
        
        if ((Input.keysDown.includes("ArrowDown")||Input.keysDown.includes("KeyK"))) 
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed
        

        if(this.timeSinceLastLaser > 100){
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }
    }
}