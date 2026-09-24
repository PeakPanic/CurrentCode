class SkyController extends Component{
    update(){
        if(!GameObject.find("StartMenu"))
            this.transform.position.y -= Time.deltaTime * 10
    }
}