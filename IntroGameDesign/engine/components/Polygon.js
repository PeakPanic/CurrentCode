class Polygon extends Component {
    fillStyle = "magenta"
    points = []

    draw(ctx) {
        //Don't worry about the canvas, this section of code is just for drawing the individual
        //polygons displayed during the game running.

        ctx.save()

        //Sets the center of the object
        ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)
        

        ctx.beginPath()
        //Draws the polygon with any number of points
        for(const point of this.points) {
            ctx.lineTo(point.x, point.y)
        }

        //Allows the fillStyle to be any color, defaults to magenta
        ctx.fillStyle = this.fillStyle

        ctx.fill()

        ctx.restore()
    
    }
}