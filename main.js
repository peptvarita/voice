x = 0
y = 0
Circle_drawn = ""
Rect_drawn = ""
function setup(){
    canvas = createCanvas(900,600)
}
api = window.webkitSpeechRecognition
rec= new api()
function start(){
    rec.start()
    document.getElementById("status").innerHTML="System is listening plsss bark,hiss🐕🐶🐕‍🦺🐍⛎⛎🐍"
}
rec.onresult= function(event){
mainjobola= event.results[0][0].transcript
document.getElementById("status").innerHTML="Your speech has been recognised as  "+mainjobola
if(mainjobola=="circle"){
    x= Math.floor(Math.random()*900)
    y= Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML="Drawing a circle "
    Circle_drawn="hi"
}
if(mainjobola=="rectangle"){
    x= Math.floor(Math.random()*900)
    y= Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML="Drawing a rectangle "
    Rect_drawn="hi"
}
}
function draw(){
    if(Circle_drawn=="hi"){circle(x,y,100)
        document.getElementById("status").innerHTML="Circle is completed"
    Circle_drawn=""
    }
    if(Rect_drawn=="hi"){
        rect(x,y,100,50)
        document.getElementById("status").innerHTML=" Rectangle is complete"
        Rect_drawn=""
    }

}