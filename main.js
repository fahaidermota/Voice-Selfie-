rec=new window.webkitSpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    rec.start();
}

rec.onresult=function(event) {
    console.log(event);

    content=event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        text_speech() 
        Webcam.attach("#camera");
        setTimeout(function(){
            takepic();
            savepic();
        },5000)
    } 
    
}
function text_speech() {
    speech_text="Taking your selfie in 5 seconds"
    speech_audio=new SpeechSynthesisUtterance(speech_text);
    window.speechSynthesis.speak(speech_audio);

}
Webcam.set({
    width:360,
    height:250,
    image_format:"jpg",
    jpg_quality:90 
});
function takepic(){
    Webcam.snap(function (pic){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+pic+'">'
    });
}
function savepic() {
    img=document.getElementById("selfie").src;
    document.getElementById("a1").href=img;
    document.getElementById("a1").click();
}

