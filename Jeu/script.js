let perso = document.querySelector(".perso");
let obstacles = document.querySelector(".obstacles");


const sauter = saut => {
    if(perso.classList != "animation"){
        perso.classList.add('animation');
    }
    setTimeout(function(){
        perso.classList.remove('animation');
    },500)
};

const verification = setInterval(function(){
    const persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    const obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"))
    
    if(obstaclesLeft<20 && obstaclesLeft> 0 && persoTop>= 130){
        obstacles.style.animation = "none";
        alert("vous avez perdu")
    }
},1);