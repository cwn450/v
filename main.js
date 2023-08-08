noseX = 0;
noseY = 0;

function preload(){
    clownNose = loadImage("https://i.postimg.cc/qq92WhSr/download-3-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(400,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350 , 300);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function draw(){
    image(video , 0 , 0 , 450 , 400);
    image(clownNose , noseX + 35 , noseY + 75 , 60 , 30);
}


function take_snapshot(){
    save("My_Photo.png");
}

function modelLoaded(){
    console.log("PoseNet Is Initialised")
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}