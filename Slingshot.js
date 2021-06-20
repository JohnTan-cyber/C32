class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    fly(){
        this.slingShot.bodyA = null;
    }

    display(){
        if(this.slingShot.bodyA){
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4);
            stroke(48,22,8)
            if(pointA.x<200){
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-3);
            }
            else{
                line(pointA.x+30, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+30, pointA.y, pointB.x+30, pointB.y-3);
                
            }
            pop()
        }
    }
    
}