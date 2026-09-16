class LaserController extends Component{

    speed = 100
    
    update(){
        this.transform.position.y -= Time.deltaTime * this.speed

        if(this.transform.position.y < 50){
            this.gameObject.destroy()
        }
    }
}