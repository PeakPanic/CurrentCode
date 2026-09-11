class UpdateComponent extends Component{

    start(){
        this.timeSinceLastLaser = 0
    }

    update(){
        this.timeSinceLastLaser += 2

        if (Input.keysDown.includes("ArrowRight") && this.transform.position.x < Engine.canvas.width - 10)
            this.transform.position.x = this.transform.position.x + 1.75
    
        if (Input.keysDown.includes("ArrowLeft") && this.transform.position.x > 10)
            this.transform.position.x = this.transform.position.x - 1.75
    
        if (Input.keysDown.includes("ArrowUp") && this.transform.position.y > (Engine.canvas.height / 2) + 20) 
            this.transform.position.y = this.transform.position.y - 1.75
        
        if (Input.keysDown.includes("ArrowDown") && this.transform.position.y < Engine.canvas.height - 10) 
            this.transform.position.y = this.transform.position.y + 1.75
        

        if(this.timeSinceLastLaser > 100){
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }
    }
}