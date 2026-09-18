class FishController extends Component{
    randomSpeed = Math.floor(Math.random() * 5)

    update(){
        this.transform.position.y -= Time.deltaTime * 30 * this.randomSpeed
    }
}