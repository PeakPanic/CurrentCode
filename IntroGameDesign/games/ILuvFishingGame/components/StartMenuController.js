class StartMenuController extends Component{
    acceleration = 0

    update(){
    if(!GameObject.find("StartText"))
        this.transform.position.y -= Time.deltaTime * 50

    if(this.transform.position.y < -window.innerHeight/2)
        this.gameObject.destroy()

    if(GameObject.find("StartText")){
        if(Input.keysDown.includes("KeyA") && this.transform.position.x >= -window.innerWidth/2 && this.acceleration > -150){
            this.acceleration -= 1
        }

        else if(this.acceleration < 0){
            this.acceleration += 1
        }

        if(Input.keysDown.includes("KeyD") && this.transform.position.x <= window.innerWidth/2 && this.acceleration < 150){
            this.acceleration += 1
        }
        else if(this.acceleration > 0){
            this.acceleration -= 1
        }
    }

    this.transform.position.x = this.transform.position.x + Time.deltaTime * this.acceleration
    }
}