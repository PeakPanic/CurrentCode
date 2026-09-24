class ScoreController extends Component{
    update(){
        this.gameObject.getComponent(TextLabel).text = Globals.score + " Fish Caught"
    }
}