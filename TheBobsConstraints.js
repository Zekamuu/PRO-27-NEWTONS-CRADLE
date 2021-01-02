class TheBobsConstraints{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            length:350,
            stiffness:1
        }
        
        this.string = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(matterWorld, this.string);
    }
    show(){
        var bodyA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(10);
        stroke("YELLOW");
        
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        strokeWeight(0);
    }
}