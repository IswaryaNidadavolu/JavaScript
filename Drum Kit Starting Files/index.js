var number=document.querySelectorAll(".drum").length;
for(var i=0;i<number;i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",function() {
 var button=this.innerHTML;
 example(button)
 animation(button)
  
});
}
document.addEventListener("keypress", function(event) {
    console.log(event);
    example(event.key)
    animation(event.key)
}
);

function example(key) {

switch(key) {
    case "w" :
        var letter1 = new Audio("sounds/crash.mp3");
        letter1.play(); 
        break;

case "a" :
        var letter2 = new Audio("sounds/kick-bass.mp3");
        letter2.play(); 
        break;

case "s" :
        var letter3 = new Audio("sounds/snare.mp3");
        letter3.play(); 
        break;

case "d" :
        var letter4 = new Audio("sounds/tom-1.mp3");
        letter4.play(); 
         break;
case 'j' :
        var letter5 = new Audio("sounds/tom-2.mp3");
        letter5.play(); 
        break;

case 'k' :
        var letter6 = new Audio("sounds/tom-3.mp3");
        letter6.play(); 
        break;

case 'l' :
          var letter7 = new Audio("sounds/tom-4.mp3");
          letter7.play(); 
          break;
  
  default:(button);
}
}

function animation(currentKey) {
    var newExample = document.querySelector("." + currentKey)
    newExample.classList.add("pressed");
    
    setTimeout(function() {
        newExample.classList.remove("pressed");
    }, 100);
}





/* document.querySelectorAll(".drum")[i].addEventListener("click", sample);
function sample() {
    var music=('/Users/iswaryanidadavolu/Desktop/Drum Kit Starting Files/sounds'); {
        for(i=0;i<music/length;i++);
    }
   
    var sound= new Audio("music[i]");
    sound.play(); */
