class UIButtonController extends Component{
    glasses = false

    update(){
        if(Input.keysDownThisFrame.includes("KeyG")){
            if(this.glasses){
                GameObject.find("GlassesTintGameObject").transform.alpha = 0.0
                this.glasses = false
            }
            else{
                GameObject.find("GlassesTintGameObject").transform.alpha = 0.5
                this.glasses = true
            }
            console.log("gdown")
        }
        
    }
}
