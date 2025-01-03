let points = 0;
let maxPoints = getRecord();

let maxDiv = document.getElementById("max-points");
let currDiv = document.getElementById("current-points");

function getPoints(){
    return points;
}


function decreasePoints(){
    points --;
}


function increasePoints(){
    points++;
}

function store(){
    if(points<maxPoints) return ;
    localStorage.setItem(`record`, points);
    maxPoints = points;
}

function getRecord(){
    n = localStorage.getItem(`record`);
    if(n){
        return n;
    }
    return 0;
}


function update(){
    currDiv.innerHTML = `${points}`;
    maxDiv.innerHTML = `${maxPoints}`;
    store();
}