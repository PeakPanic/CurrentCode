class Collisions{
    static isCollisionPointPolygon(point, gameObject){
        //move everything into worldspace
        let worldSpacePoints = []
        for(let point of gameObject.getComponent(Polygon).points){
            worldSpacePoints.push(
                new Vector2(gameObject.transform.getWorldMatrix().transform(point).x,
                 gameObject.transform.getWorldMatrix().transform(point).y)
            )
        }

        //find axes for projection
        for(let i =0; i < worldSpacePoints.length; i++){
            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i=1)%worldSpacePoints.length]
            let edge = point2.minus(point1)
            let axis = edge.orthogonal()

            //look for overlap
            let pointProjection = point.dot(axis)
            let polygonProjection = worldSpacePoints.map(p=>p.dot(axis))
            if(pointProjection < Math.min(...polygonProjection) || pointProjection > Math.max(...polygonProjection))
                return false
        }

        return true
    }
}