class SceneManager{
    static currentScene
    static nextScene

    static update(){
        if(SceneManager.nextScene){
            SceneManager.currentScene = new SceneManager.nextScene()
            SceneManager.nextScene = undefined
        }
    }
}