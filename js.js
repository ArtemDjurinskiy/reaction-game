var start = new Date().getTime();
var bestTime = 0;

function element(id){
    return document.getElementById(id);
};
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
function makeElementAppear(){
    var top = Math.random() * 400;
    var left = Math.random() * 1000;
    var width = (Math.random() * 100) + 100;

    if (Math.random() > 0.5) {
        element('element').style.borderRadius = "50%";                
    } else {
        element('element').style.borderRadius = "0%";
    }
    element('element').style.marginTop = top + "px";
    element('element').style.marginLeft = left + "px";
    element('element').style.width = width + "px";
    element('element').style.height = width + "px";
    element('element').style.display = "block";
    element('element').style.backgroundColor = getRandomColor();
    start = new Date().getTime();
};

function apperAfterDelete(){
setTimeout(makeElementAppear, Math.random() *  2000);

};
apperAfterDelete();
element('element').onclick = function(){
    var end = new Date().getTime();            
    var timeTaken = (end -start) /1000;
    
    if (bestTime > timeTaken || bestTime == 0) {
        bestTime = timeTaken;
    } else if (timeTaken == bestTime) {
        bestTime = bestTime
    }
    element('element').style.display = "none";
    element('timeTaken').innerHTML = timeTaken + " S.";
    element('bestTime').innerHTML = bestTime + " S.";
    apperAfterDelete();            
};