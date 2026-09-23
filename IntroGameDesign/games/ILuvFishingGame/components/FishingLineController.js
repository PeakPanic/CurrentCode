class FishingLineController extends Component{
    update(){
        let playerHook = GameObject.find("PlayerHook")
        this.transform.position = playerHook.transform.position
    }
}