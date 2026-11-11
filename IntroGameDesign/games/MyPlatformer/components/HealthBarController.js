class HealthBarController extends Component{
    healthNumber = 1
    start(){
        for(const object of GameObject.findGameObjectsWithTag("Health")){
            this.healthNumber++
        }
    }

    healthUp(){

    }

    healthDown(){
        
    }
}
