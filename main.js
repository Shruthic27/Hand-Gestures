Webcam.set({
    width: 400,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("webcam")

Webcam.attach('#webcam');

    function ts(){
        Webcam.snap(function(data_uri){
document.getElementById("snapshot").innerHTML = '<img id="ci" src="'+data_uri+'"/>';
        });
    }
    
    console.log('ml5 version', ml5.version)

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9z-e2pSnL/model.jason',modelLoaded);

    function modelLoaded(){
        console.log('Model Loaded!')
    }

    function speak(){
        var synth= window.speechSynthesis;
        sd1="The first prediction is" + p1
        sd1=" And the second prediction is" + p2
        var uT = new SpeechSynthesisUtterance(sd1 + sd2);
        synth.speak(utterThis);
    }