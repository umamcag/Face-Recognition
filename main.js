
camera = document.getElementById("camera");
Webcam.set({
width:350, 
height:300,
image_format:'png',
png_quality:95
});
Webcam.attach("#camera")

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';    
})     
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IW97ZAq5d/model.json",modelLoaded);
function modelLoaded(){
console.log(" modal started loading :D ");    
}
function check(){
img = document.getElementById('selfie_image');
classifier.classify(img,gotResult);    
}
function gotResult(error, results){
if (error) {
console.error(error);    
} else{
console.log(results);
var synth = window.speechSynthesis;
speak_data = "This is "+results[0].label;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);  
}    
}