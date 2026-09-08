class DrawComponent extends Component{
    draw(ctx){
        let position = this.gameObject.components[0].position

        //Signaling to context that I'm going to draw something//
        ctx.save()

        //Set center of an object//
        ctx.translate(position.x, position.y)

        ctx.lineTo(0, -20)
        ctx.lineTo(10, -30)
        ctx.lineTo(10, 0)
        ctx.lineTo(50, -40)
        ctx.lineTo(60, -50)
        ctx.lineTo(500, 0)
        ctx.lineTo(0, 40)


        ctx.fillStyle = "orange"
        ctx.fill()

        //Signaling to context that I'm done drawing//
        ctx.restore()
    }
}