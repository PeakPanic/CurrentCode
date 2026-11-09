class PlatformController extends Component{
    start(){
        this.i = 0
        this.j = 0
        while(this.i < 15){
            instantiate(new TreeGameObject(), new Vector2(this.gameObject.transform.scale.clone().x * 2 * (Math.random()-0.5) + 500, 40 + (Math.random() - 0.5)*5))
            this.i++
        }
        while(this.j < 40){
            instantiate(new BackgroundTreeGameObject(), new Vector2(this.gameObject.transform.scale.clone().x * 2 * (Math.random()-0.5) + 500, -60 + (Math.random() - 0.5)*50))
            this.j++
        }
    }
    update(){
        
    }
}
