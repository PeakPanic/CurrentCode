class LevelController extends Component{
    start(){
        SceneManager.loadScene(GenericLevel, true)
    }

    update(){
        if(Input.keysDown.includes("Space")){
            SceneManager.loadScene(FishEasyScene)
        }
    }
}