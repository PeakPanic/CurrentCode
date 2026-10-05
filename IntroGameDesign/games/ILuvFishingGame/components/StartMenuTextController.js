class StartMenuTextController extends Component{
    update(){
        this.gameObject.getComponent(TextLabel).font ="20px Times New Roman"
        this.gameObject.getComponent(TextLabel).text ="Press SPACE To Start"
    }
}