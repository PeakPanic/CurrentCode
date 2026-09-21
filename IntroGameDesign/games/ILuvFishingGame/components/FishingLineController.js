class FishingLineController extends Component{
    update(){
        let playerPosition = GameObject.find("PlayerHook")
        this.transform.position = playerPosition
    }
}