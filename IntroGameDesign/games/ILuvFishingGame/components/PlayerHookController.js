class PlayerHookController extends Component{
    accelerationY = 0
    accelerationX = 0
    speed = 150

    start(){
    this.timeSinceLastFish = 0
    this.timeSinceLastBubble = 0
    this.totalTime = 0
    }

    update(){
        this.timeSinceLastFish += 1
        this.timeSinceLastBubble += 1
        this.totalTime += 1 

        if(this.timeSinceLastFish > 160 && !GameObject.find("Boat")){
            instantiate(new FishObject(), new Vector2(window.innerWidth * Math.random() - window.innerWidth/2, window.innerHeight/2 + 20), Math.PI)
            this.timeSinceLastFish = 0
        }

        if(this.timeSinceLastBubble > 600 && !GameObject.find("Boat")){
            instantiate(new BubbleObject(), new Vector2(window.innerWidth * Math.random() - window.innerWidth/2, window.innerHeight/2 + 20), Math.PI)
            this.timeSinceLastBubble = 0
        }

        if(!GameObject.find("Boat")){
            if(Input.keysDown.includes("KeyW") && this.transform.position.y >= -window.innerHeight/2 && this.accelerationY > -this.speed)
                this.accelerationY -= 20
            if(Input.keysDown.includes("KeyA") && this.transform.position.x >= -window.innerWidth/2 && this.accelerationX > -this.speed)
                this.accelerationX -= 20
            if(Input.keysDown.includes("KeyS") && this.transform.position.y < window.innerHeight/2 && this.accelerationY < this.speed)
                this.accelerationY += 20
            if(Input.keysDown.includes("KeyD") && this.transform.position.x <= window.innerWidth/2 && this.accelerationX < this.speed)
                this.accelerationX += 20

            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.accelerationY
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.accelerationX

            if(this.accelerationX > 0)
                this.accelerationX -= 8
            else if(this.accelerationX < 0)
                this.accelerationX += 8

            if(this.accelerationY > 0)
                this.accelerationY -= 8
            else if(this.accelerationY < 0)
                this.accelerationY += 8

    }

        let myPosition = this.transform.position
        let fishObjects = GameObject.findGameObjectsWithTag("Fish")    
        for(const fishObject of fishObjects){
            let fishPosition = fishObject.transform.position
            let distance = myPosition.minus(fishPosition).magnitude
            if(distance < 40){
                fishObject.destroy()
                Globals.score++
            }
        }

        let bubbleObjects = GameObject.findGameObjectsWithTag("Bubble")    
        for(const bubbleObject of bubbleObjects){
            let bubblePosition = bubbleObject.transform.position
            let distance = myPosition.minus(bubblePosition).magnitude
            if(distance < 40){
                bubbleObject.destroy()
            }
        }
    }
}