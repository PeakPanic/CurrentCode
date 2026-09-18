class FishController extends Component{
    randomSpeed = Math.random()

    update(){
        this.transform.position.y -= Time.deltaTime * 150 * this.randomSpeed
    }
}