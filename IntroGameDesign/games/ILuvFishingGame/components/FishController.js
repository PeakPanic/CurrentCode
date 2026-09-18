class FishController extends Component{
    //Should give a random speed between 1-5
    randomSpeed = Math.floor(Math.random() * 5)

    start(){
        this.totalTime = 1
    }

    update(){
        this.totalTime += 1
        this.transform.position.y -= Time.deltaTime * 30 * this.randomSpeed * (0.0005 * this.totalTime)
    }
}