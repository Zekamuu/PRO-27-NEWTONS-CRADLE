class Bob {
    constructor(x, y, r) {
        var options = {
            restitution: 0.4,
            friction: 0.3,
        }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(matterWorld, this.body);
    }


    show() {
        push();
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius*2);
        pop();
    }
}