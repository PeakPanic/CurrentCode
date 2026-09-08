class GameObject{
    components = []

    addComponent(component){
        this.components.push(component)
        component.gameObject = this
    }

    start(){
        for(const component of this.components){
            components.start?.()
        }
    }

    update(){
        for(const component of this.components){
            this.components.update?.()
        }
    }

    draw(ctx){
        for(const component of this.components){
            component.draw?.(ctx)
        }
    }
}