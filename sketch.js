var ball, databas;

function setup(){
    databas = firebase.database()
    var ballpos = databas.ref("Ball/Position");
    ballpos.on("value",Readposition )
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    databas.ref("Ball/Position").set({
        x: ball.x + x,
        y: ball.y + y
    });
}

function Readposition(data){
    var position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}