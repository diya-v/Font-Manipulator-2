function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(600,500);
    canvas.position(600,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet model is loaded");
}

function gotPoses(results, error){
    if (results>0){
        console.log(results);
    }
}
