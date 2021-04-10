class Rain {
    constructor (x,y) {
        var options = {
            isStatic: false,
            friction: 0.1,


        }
        this.rain = Bodies.circle(x,y,5,options);
    }
    
    update(){
       var maxDrops = 100;
        for ( var i=0; i<maxDrops; i++){
          drops.push(new createDrop (random(0,400), random(0,400)));
        }
    }

    
}