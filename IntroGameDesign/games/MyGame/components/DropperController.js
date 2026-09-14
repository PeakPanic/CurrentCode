class DropperController extends Component{
    //Work in progress, affects all droppers on screen rn which is cool but not intended//
    dropperFireMode = 0
    update(){
        if (Input.keysDown.includes("KeyR"))
            this.dropperFireMode = 0
        if(Input.keysDown.includes("KeyQ"))
            this.dropperFireMode = 1
        if(Input.keysDown.includes("KeyE"))
            this.dropperFireMode = 2

        this.transform.position.y +=2
        if (this.dropperFireMode == 1)
            this.transform.position.x -= 2
        if (this.dropperFireMode == 2)
            this.transform.position.x +=2
    }
}