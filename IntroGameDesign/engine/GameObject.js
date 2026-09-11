class GameObject{
    components = []

    get transform(){
        return this.components[0];
    }

    constructor(){
        this.addComponent(new Transform())
    }

    //This adds a component to an object and along with parameters for it
    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    start(){
        for(const component of this.components){
            component.start?.()
        }
    }

    update(){
        for(const component of this.components){
            component.update?.()
        }
    }

    draw(ctx){
        for(const component of this.components){
            component.draw?.(ctx)
        }
    }
}