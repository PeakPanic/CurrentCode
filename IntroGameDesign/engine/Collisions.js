class Collisions{
    static isCollisionPointPolygon(point, gameObject){
        //move everything into worldspace
        let worldSpacePoints = []
        for(let point of gameObject.getComponent(Collider).points){
            worldSpacePoints.push(
                new Vector2(gameObject.transform.getWorldMatrix().transform(point).x,
                 gameObject.transform.getWorldMatrix().transform(point).y)
            )
        }

        //find axes for projection
        for(let i = 0; i < worldSpacePoints.length; i++){
            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i+1)%worldSpacePoints.length]
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
    static isCollisionPolygonPolygon(gameObject, gameObjectTwo){
        //move everything into worldspace
        let worldSpacePoints = []
        for(let point of gameObject.getComponent(Collider).points){
            worldSpacePoints.push(
                new Vector2(gameObject.transform.getWorldMatrix().transform(point).x,
                 gameObject.transform.getWorldMatrix().transform(point).y)
            )
        }

        let worldSpacePointsTwo = []
        for(let point of gameObjectTwo.getComponent(Collider).points){
            worldSpacePointsTwo.push(
                new Vector2(gameObjectTwo.transform.getWorldMatrix().transform(point).x,
                 gameObjectTwo.transform.getWorldMatrix().transform(point).y)
            )
        }

        let axes = []
        //find axes for projection
        for(let i = 0; i < worldSpacePoints.length; i++){
            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i+1)%worldSpacePoints.length]
            let edge = point2.minus(point1)
            let axis = edge.orthogonal()
            axes.push(axis)
        }

        for(let i = 0; i < worldSpacePointsTwo.length; i++){
            let point1 = worldSpacePointsTwo[i]
            let point2 = worldSpacePointsTwo[(i+1)%worldSpacePointsTwo.length]
            let edge = point2.minus(point1)
            let axis = edge.orthogonal()
            axes.push(axis)
        }

        for(const axis of axes){
            //look for overlap
            let polygonProjection = worldSpacePoints.map(p=>p.dot(axis))
            let polygonProjectionTwo = worldSpacePointsTwo.map(p=>p.dot(axis))
            if(Math.max(...polygonProjectionTwo) < Math.min(...polygonProjection) || Math.min(...polygonProjectionTwo) > Math.max(...polygonProjection))
                return false
        }

        return true
    }
}