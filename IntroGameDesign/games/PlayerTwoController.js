class PlayerTwoController extends Component{
    start(){
        this.timeSinceLastDropper = 0
    }

    update(){
        this.timeSinceLastDropper += 1

        if (Input.keysDown.includes("KeyD"))
            this.transform.position.x = this.transform.position.x + 2
    
        if (Input.keysDown.includes("KeyA"))
            this.transform.position.x = this.transform.position.x - 2
    
        if (Input.keysDown.includes("KeyW")) 
            this.transform.position.y = this.transform.position.y - 2
        
        if (Input.keysDown.includes("KeyS")) 
            this.transform.position.y = this.transform.position.y + 2
        

        if(this.timeSinceLastDropper > 100){
            this.timeSinceLastDropper = 0
            instantiate(new DropperGameObject(), this.transform.position.clone())
        }
    }
}