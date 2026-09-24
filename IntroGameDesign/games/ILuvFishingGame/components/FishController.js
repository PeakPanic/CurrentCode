class FishController extends Component{
    randomSpeed = Math.floor(Math.random() * 4) + 1

    update(){
        if(this.transform.position.y < -20){
            this.gameObject.destroy()
        }
        this.transform.position.y -= Time.deltaTime * 30 * this.randomSpeed
    }
}