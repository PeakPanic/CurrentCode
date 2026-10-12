class BubbleController extends Component{
    update(){
        this.gameObject.getComponent(TextLabel).fillStyle = "rgba(255, 255, 255, 0.5)"
        this.gameObject.getComponent(TextLabel).font ="100px Arial"
        this.gameObject.getComponent(TextLabel).text ="o"

        if(this.transform.position.y < -window.innerHeight){
            this.gameObject.destroy()
        }
        this.transform.position.y -= Time.deltaTime * 200
    }
}