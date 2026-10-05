class ScoreController extends Component{
    update(){
        this.gameObject.getComponent(TextLabel).font ="20px Times New Roman"
        this.gameObject.getComponent(TextLabel).text = Globals.score + " Fish Caught"
    }
}