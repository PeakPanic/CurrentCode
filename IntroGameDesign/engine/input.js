class Input{
    static keysDown = []
    static keysDownThisFrame = []
    static keysUpThisFrame = []

    static mouseButtonsDown = []
    static mouseButtonsDownThisFrame = []
    static mouseButtonsUpThisFrame = []


    static mousedown(event){
        if(!Input.mouseButtonsDown.includes(event.button)){
            Input.mouseButtonsDown.push(event.button)
            Input.mouseButtonsDownThisFrame.push(event.button)
        }
    }

    static mouseup(event){
        let index = Input.mouseButtonsDown.indexOf(event.button)
        Input.mouseButtonsDown.splice(index, 1) 

        Input.mouseButtonsUpThisFrame.push(event.button)
    }

    static keydown(event){
        //Adds the key to the list of keys currently pressed
        //Doesn't add if already in the list
        if(!Input.keysDown.includes(event.code)){
            Input.keysDown.push(event.code)
            Input.keysDownThisFrame.push(event.code)
        }
    }

    static keyup(event){
        //Find index of the key once let go and removes it from the list of keys being pressed
        let index = Input.keysDown.indexOf(event.code)
        Input.keysDown.splice(index, 1) 

        Input.keysUpThisFrame.push(event.code)
    }

    static update(){
        Input.keysDownThisFrame = []
        Input.keysUpThisFrame = []

        Input.mouseButtonsDownThisFrame = []
        Input.mouseButtonsUpThisFrame = []
    }
} 