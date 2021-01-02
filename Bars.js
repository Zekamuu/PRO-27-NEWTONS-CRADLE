class Bars{
    constructor(x, y, w, h){
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.heigth = h;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.heigth, options);
        World.add(matterWorld, this.body);
    }
    show(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.heigth)
    }
}