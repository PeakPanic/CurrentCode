class SkyController extends Component{
    update(){
        if(!GameObject.find("Boat"))
            this.transform.position.y -= Time.deltaTime * 10
    }
}