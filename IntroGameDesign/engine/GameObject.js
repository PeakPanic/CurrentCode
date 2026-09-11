class GameObject{
    components = []

    get transform(){
        return this.components[0];
    }

    constructor(){
        this.addComponent(new Transform())
    }

    addComponent(component){
        Object.assign(component, parameter)
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