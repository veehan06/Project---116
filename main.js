noseX = 0;
noseY = 0;
function preload(){
    m = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(m, noseX, noseY, 30, 30)
}
function take_snap(){
    save("FilteredImage");
}
function modelLoaded(){
    console.log("PoseNet is intialized")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y;
    }
}