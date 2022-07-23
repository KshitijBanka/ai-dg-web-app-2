function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(420, 260);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

heat_waves_song="";
she_knows_it_song="";

function preload(){
    heat_waves_song = loadSound('Heatwaves.mp3');
    she_knows_it_song = loadSound('drive-forever.mp3');
}

