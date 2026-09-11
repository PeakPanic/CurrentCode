class Vector2{
    x
    y
    //think __innit__
    constructor(x,y){
        //self.x and self.y
        this.x = x
        this.y = y
    }

    clone(){
        return new Vector2(this.x, this.y)
    }
}