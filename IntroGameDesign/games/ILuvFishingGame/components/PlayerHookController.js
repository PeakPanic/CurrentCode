class PlayerHookController extends Component{
    speed = 100

    start(){
    this.timeSinceLastFish = 0
    this.totalTime = 0
    }

    update(){
        this.timeSinceLastFish += 1
        this.totalTime += 1 

        if(this.timeSinceLastFish == 200){
            instantiate(new FishObject(), new Vector2(window.innerWidth * Math.random(), window.innerHeight + 20))
            this.timeSinceLastFish = 0
        }

        if(Input.keysDown.includes("KeyW"))
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
        if(Input.keysDown.includes("KeyA"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        if(Input.keysDown.includes("KeyS"))
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed
        if(Input.keysDown.includes("KeyD"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed

        let myPosition = this.transform.position
        let fishObjects = GameObject.findGameObjectsWithTag("Fish")    
        for(const fishObject of fishObjects){
            let fishPosition = fishObject.transform.position
            let distance = myPosition.minus(fishPosition).magnitude
            if(distance < 20){
                fishObject.destroy()
            }
        }
    }
}