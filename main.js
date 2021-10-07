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

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9z-e2pSnL/model.json',modelLoaded);

    function modelLoaded(){
        console.log('Model Loaded!')
    }

    function speak(){
        var synth= window.speechSynthesis;
        sd1="The first prediction is" + p1
        sd1=" And the second prediction is" + p2
        var uT = new SpeechSynthesisUtterance(sd1 + sd2);
        synth.speak(uT);
    }

    function check()
    {
        img=document.getElementById("ci");
        classifier.classify(img, gotResult)
    }

    function gotResult(error, results){
        if (error) {
            console.log(error)
        }else{
            console.log(results)
            document.getElementById("p1").innerHTML = results[0].label;
            document.getElementById("p2").innerHTML = results[1].label;
            p1 = results[0].label;
            p2 = results[1].label;
            speak();

            if (results[0].label == "Hi") {
                  document.getElementById("e1").innerHTML="&#128075;";  
              }
             else if (results[0].label == "Good Job-Claps") {
                  document.getElementById("e1").innerHTML="&#128079;";  
                }
                else if (results[0].label == "Super") {
                  document.getElementById("e1").innerHTML="&#128076;";  
                }
                else if (results[0].label == "Good-Thumbs Up") {
                  document.getElementById("e1").innerHTML="&#128077;";  
                }
               else if (results[0].label == "Woo Hoo") {
                  document.getElementById("e1").innerHTML="&#9994;";  
                }

                if (results[1].label == "Hi") {
                    document.getElementById("e1").innerHTML="&#128075;";  
                }
               else if (results[1].label == "Good Job-Claps") {
                    document.getElementById("e1").innerHTML="&#128079;";  
                  }
                  else if (results[1].label == "Super") {
                    document.getElementById("e1").innerHTML="&#128076;";  
                  }
                  else if (results[1].label == "Good-Thumbs Up") {
                    document.getElementById("e1").innerHTML="&#128077;";  
                  }
                 else if (results[1].label == "Woo Hoo") {
                    document.getElementById("e1").innerHTML="&#9994;";  
                  }
        }
    }