class Engine{
    static canvas
    
    static ctx

    static start(nextScene){
        //Makes the canvas an actual element named canvas
        Engine.canvas = document.querySelector("#canv")
        //Lets the browser know we are working in 2D
        Engine.ctx = Engine.canvas.getContext("2d")

        //These let us know we are listening for when the key is down and up
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        SceneManager.nextScene = nextScene

        //Loops whenever the browser can
        requestAnimationFrame(Engine.gameLoop)
    }

    //This is the game loop, which will run whenever it can
    static gameLoop(){
        SceneManager.update()
        Engine.update()
        Engine.draw() 

        Time.update()

        //calls itself again when next available
        requestAnimationFrame(Engine.gameLoop)
    }

    //Updates the current scene
    static update(){
        SceneManager.currentScene.update()

    }

    //This will clear the canvas whenever it runs and draw over again with the ctx
    static draw(){
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        
        SceneManager.currentScene.draw(Engine.ctx)

    }


}