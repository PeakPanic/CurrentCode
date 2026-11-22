class UIButtonController extends Component{
    glasses = false

    update(){
        if(Input.keysDownThisFrame.includes("KeyG")){
            if(this.glasses){
                let tintObject = GameObject.find("GlassesTintGameObject")
                tintObject.alpha = 1
                this.glasses = false
            }
            else{
                let tintObject = GameObject.find("GlassesTintGameObject")
                tintObject.alpha = 1                
                this.glasses = true
            }
            console.log("gdown")
        }
        
    }
}
