class UIButtonController extends Component{
    glasses = false

    update(){
        if(Input.keysDownThisFrame.includes("KeyG")){
            if(this.glasses){
                let tintObject = GameObject.find("GlassesTintGameObject")
                tintObject.getComponent(Polygon).alpha = 0.0
                this.glasses = false
            }
            else{
                let tintObject = GameObject.find("GlassesTintGameObject")
                tintObject.getComponent(Polygon).alpha = 0.50
                this.glasses = true
            }
            //console.log("gdown")
        }
        
    }
}
