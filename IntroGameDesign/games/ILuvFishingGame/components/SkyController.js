class SkyController extends Component{
    update(){
        if(!GameObject.find("StartText"))
            this.transform.position.y -= Time.deltaTime * 50
        if(this.transform.position.y < -window.innerHeight)
            this.gameObject.destroy()
    }
}