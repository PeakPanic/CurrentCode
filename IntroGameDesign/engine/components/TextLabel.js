class TextLabel extends Component{
    fillStyle = "black"
    text = "[Blank]"
    
    draw(ctx){
        ctx.save()

        ctx.translate(this.transform.position.x, this.position)
        ctx.scale(this.transform.scale.x, )
        ctx.rotate

        ctx.fillStyle = this.fillStyle
        ctx.fillText(this.text, 0,0)
    }
}