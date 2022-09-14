var dog=0;
var cat=0;
var lion=0;
var bird=0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("teachablemachine.withgoogle.com/models/DR15dn5g9/model.json",modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
      console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("detected").innerHTML="Dog : "+dog+"Cat : "+cat+"Lion : "+lion+"Bird : "+bird;
        document.getElementById("detected").style.color=rgb(+random_number_r+","+random_number_g+","+random_number_b);
        document.getElementById("animal_voices").innerHTML="Detected Voice Is Of :" +results[0].label;
        document.getElementById("animal_voices").style.color=rgb(+random_number_r+","+random_number_g+","+random_number_b);
        img=document.getElementById("animal_images");

        if(results[0],label=="Barking") {
            img.src="";
            dog=dog+1;
        }
        else if(results[0],label=="Meowing") {
            img.src="";
           cat=cat+1;
        }
        else if(results[0],label=="Roar") {
            img.src="";
           lion=lion+1;
        }
        else if(results[0],label=="Tweet") {
            img.src="";
           bird=bird+1;
        }
    }
}