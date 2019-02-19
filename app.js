const drums = document.querySelectorAll('.drum');

drums .forEach(drum=> {
    //console.log(drum);
    drum.addEventListener('click',()=>{
    let className=drum.classList[2];
    getBigger(className);
    makeSound(className);
    });
});

function getBigger(key){

    let activeBox = document.querySelector(`.${key}`);
    activeBox.classList.add('bigger');
    setTimeout(()=>{
        activeBox.classList.remove('bigger');
    },100);
}

document.addEventListener('keypress',()=>{  //klavyeden basınca büyüsün diye
    getBigger(event.key);
    makeSound(event.key);
});

function makeSound(key){
    switch(key){
        case 'w':
        const sound1 = new Audio('sounds/sound1.mp3');
        sound1.play();
        break;
        case 'a':
        const sound2 = new Audio('sounds/sound2.mp3');
        sound2.play();
        break;
        case 's':
        const sound3 = new Audio('sounds/sound3.mp3');
        sound3.play();
        break;
        case 'd':
        const sound4 = new Audio('sounds/sound4.mp3');
        sound4.play();
        break;
        case 'j':
        const sound5 = new Audio('sounds/sound5.mp3');
        sound5.play();
        break;
        case 'k':
        const sound6 = new Audio('sounds/sound6.mp3');
        sound6.play();
        break;
        case 'l':
        const sound7 = new Audio('sounds/sound7.mp3');
        sound7.play();
        break;
        default:
        console.log("wrong key");
        
    }
}
var inervalID;
  
function renkInterval() {
inervalID = setInterval(playy, 1000);
}
 
function playy() {
var renk1= Math.floor(255*Math.random());
var renk2= Math.floor(255*Math.random());
var renk3= Math.floor(255*Math.random());
document.body.style.backgroundColor="rgb("+renk1+","+renk2+","+renk3+")";
}
