class StartMenuController extends Component{
    acceleration = 0

    update(){
    if(Input.keysDown.includes("KeyA") && this.transform.position.x >= 0 && this.acceleration > -150){
        this.acceleration -= 1
    }
    else if(this.acceleration < 0){
        this.acceleration += 1
    }

    if(Input.keysDown.includes("KeyD") && this.transform.position.x <= window.innerWidth && this.acceleration < 150){
        this.acceleration += 1
    }
    else if(this.acceleration > 0){
        this.acceleration -= 1
    }

    this.transform.position.x = this.transform.position.x + Time.deltaTime * this.acceleration

    }
}