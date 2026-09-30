class Camera extends Component{
    backgroundColor = "Black"

    static get main(){
        return GameObject.findGameObjectsWithTag("MainCamera")[0].getComponent(Camera)
    }
}