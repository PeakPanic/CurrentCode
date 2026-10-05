class LevelController extends Component{
    start(){
        SceneManager.loadScene(GenericLevel, true)
    }

    update(){
        if(Input.keysDown.includes("Space") && Globals.score == 0){
            SceneManager.loadScene(FishEasyScene)
        }
    }
}