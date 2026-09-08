class Scene{
    gameObjects = []

    instantiate(gameObject){
        this.gameObject.push(gameObject)
    }

    start(){
        for(const gameObject of this.gameObjects){
            gameObject.start()
        }
    }

    update(){
        for(const gameObject of this.gameObjects){
            gameObject.update()
        }
    }

    draw(ctx){
        for(const gameObject of this.gameObjects){
            gameObject.draw(ctx)
        }

    }

}