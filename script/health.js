const totalHP=100;
let myHp = 100;


// const healthBar = document.getElementById("health-bar");
// const cont = document.getElementById("container");



function decreaseHP(n){
    const healthBar = document.getElementById("my-health");
    myHp -= n;
    healthBar.style.setProperty("--myHP", myHp);

}

