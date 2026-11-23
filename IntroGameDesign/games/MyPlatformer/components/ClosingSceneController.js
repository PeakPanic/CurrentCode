class ClosingSceneController extends Component{
    update(){
        if(Input.keysDown.length != 0){
            SceneManager.nextScene = OpeningScene
        }
    }
}
