class Assets{
    static triangle = [
        new Vector2(0, -20),
        new Vector2(10, 10),
        new Vector2(-10, 10),
    ]

    static rectangle = [
        new Vector2(-7,-7),
        new Vector2(7,-7),
        new Vector2(7,25),
        new Vector2(-7,25),
        //new Vector2(-7,-7),
    ]

    static hook = [
        new Vector2(0, 30),
        new Vector2(14, 10),
        new Vector2(1, 20),
        new Vector2(-14, 10),
        new Vector2(-1, 30),
    ]

    static line = [
        new Vector2(-1,0),
        new Vector2(-1,-window.innerHeight),
        new Vector2(1,-window.innerHeight),
        new Vector2(1,0),
        new Vector2(-1,0)
    ]
}