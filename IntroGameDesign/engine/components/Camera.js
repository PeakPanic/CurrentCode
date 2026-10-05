class Camera extends Component{
    backgroundColor = "rgb(1, 165, 138)"


    static get main(){
        return GameObject.findGameObjectsWithTag("MainCamera")[0].getComponent(Camera)
    }
}