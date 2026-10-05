class BubbleController extends Component{
    randomSpeed = Math.floor(Math.random() * 10) + 1

    update(){
        this.gameObject.getComponent(TextLabel).fillStyle = "White"
        this.gameObject.getComponent(TextLabel).font ="100px Arial"
        this.gameObject.getComponent(TextLabel).text ="o"

        if(this.transform.position.y < -window.innerHeight/2 - 20){
            this.gameObject.destroy()
        }
        this.transform.position.y -= Time.deltaTime * 30 * this.randomSpeed
    }
}