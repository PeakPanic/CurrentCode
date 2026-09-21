class FishingLineController extends Component{
    speed = 100
    update(){
        let playerPosition = GameObject.find("PlayerHook")
        this.transform.position.x = playerPosition.x
        this.transform.position.y = playerPosition.x
    }
}