class BackgroundTreeController extends Component{
    lastCameraPosition = 0
    update(){
        this.transform.position.x -= ((this.lastCameraPosition - Camera.main.transform.position.clone().x) * 0.5)
        this.lastCameraPosition = Camera.main.transform.position.clone().x
    }
}
