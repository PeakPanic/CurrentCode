class PlatformController extends Component{
    start(){
        this.i = 0
        while(this.i < 10){
            instantiate(new TreeGameObject(), new Vector2(this.gameObject.transform.scale.clone().x * 2 * (Math.random()-0.5) + 500, 40 + (Math.random() - 0.5)*5))
            this.i++
        }
    }
    update(){
        
    }
}
