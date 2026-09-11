class DrawComponent extends Component{
    draw(ctx){
        let position = this.transform.position

        //Signaling to context that I'm going to draw something//
        ctx.save()

        //Set center of an object//
        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.lineTo(0, -20)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)

        //This is a test for github to pls work//
        ctx.fillStyle = "orange"
        ctx.fill()

        //Signaling to context that I'm done drawing//
        ctx.restore()
    }
}