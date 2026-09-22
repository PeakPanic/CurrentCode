class TextLabel extends Component{
    fillStyle = "black"
    text = "[Blank]"
    
    draw(ctx){
        ctx.save()

        ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle
        ctx.fillText(this.text, 0,0)

        ctx.restore()
    }
}