class LevelController extends Component{
    start(){
        SceneManager.loadScene(FishEasyScene, true)
    }

    update(){
        if(Globals.time_played == 300){
            SceneManager.loadScene(FishEasyScene)
        }
    }
}