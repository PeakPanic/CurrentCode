class Camera extends Component{
    backgroundColor = "black"


    static get main(){
        return GameObject.findGameObjectsWithTag("MainCamera")[0].getComponent(Camera)
    }
}