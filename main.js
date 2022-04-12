noseX=0;
noseY=0;

function preload() {
clown_nose = loadImage("https://i.postimg.cc/6pBnVx37/clown-nose.png");
}


function setup() {
    canvas = createCanvas(300,300);
    canvas.position(500,200)
    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
 image(video,0,0,300,300);
 image(clown_nose,noseX-15,noseY-15,40,40);
 
}

function take_snapshot() {
    save('myphoto.png');
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(results){
 if(results.length > 0){
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("nose x = " + noseX);
     console.log("nose y = " + noseY);

 }
}