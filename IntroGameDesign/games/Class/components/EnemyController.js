class EnemyController extends Component{
    direction = 1
    update(){
        this.transform.position.x += Time.deltaTime * 100
        if(this.transform.position.x > 200)
            
        }
}