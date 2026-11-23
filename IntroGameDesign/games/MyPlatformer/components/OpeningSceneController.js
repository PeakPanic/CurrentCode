class OpeningSceneController extends Component{
    update(){
        if(Input.keysDown.includes("Space")){
            SceneManager.nextScene = MainScene
        }
        
    }
}
