r_ex=0;
l_ex=0;
diffy=0;
function setup(){

    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(300,200);
    canvas=createCanvas(550,550);
    canvas.position(950,150);
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
    background('#98f516');
    textSize(diffy);
    fill('#000000');
    text('Ghavisg',50,400);
    document.getElementById("es").innerHTML = "Font size will be =  " + diffy +"px";

}

function modelLoaded(){

    console.log("Model is Loaded");
}
function gotPoses(results){

    if(results.length > 0){

        console.log(results);
          r_ex=results[0].pose.rightWrist.x;
          l_ex=results[0].pose.leftWrist.x;
          diffy= floor(r_ex - l_ex);
          console.log("r_ex=" + r_ex + "l_ex=" + l_ex + "diffy=" + diffy );      


    } 

    }
