class Collider extends Component{
    _points
    get points(){
        return this.points?? this.gameObject.getComponent(Polygon).points
    }

    set points(points){
        this._points = points
    }
}