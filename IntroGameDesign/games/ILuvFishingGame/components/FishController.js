class FishController extends Component{
    randomSpeed = Math.floor(Math.random() * 4) + 1
    // randomFishSize = 2 * Math.random() * Math.random() + 0.5
    gotCaught = false

    start(){
        // this.transform.scale = new Vector2(this.randomFishSize, this.randomFishSize)
        this.transform.scale = new Vector2(this.randomSpeed/4+0.5, this.randomSpeed/4+0.5)
    }

    caught(){
        this.gotCaught = true
        this.transform.position = new Vector2(Math.floor((Math.random() - 0.5) * 25), 50)
        this.transform.rotation = Math.PI
    }

    update(){
        if(this.transform.position.x > window.innerWidth/2 + 20){
            this.gameObject.destroy()
        }
        if(!this.gotCaught)
            this.transform.position.x += Time.deltaTime * 30 * this.randomSpeed
    }
}