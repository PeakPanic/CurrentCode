class Input{
    static keysDown = []

    static keydown(event){
        //Adds the key to the list of keys currently pressed
        //Doesn't add if already in the list
        if(!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)
    }

    static keyup(event){
        //Find index of the key once let go and removes it from the list of keys being pressed
        let index = Input.keysDown.indexOf(event.code)
        Input.keysDown.splice(index, 1) 
    }
} 