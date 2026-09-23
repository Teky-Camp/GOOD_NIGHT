// ===============================
// GOOD NIGHT WEBSITE
// ===============================

// Elements
const starsContainer = document.getElementById("stars");
const shootingContainer = document.getElementById("shooting-stars");
const heartsContainer = document.getElementById("hearts");

const popup = document.getElementById("popup");
const openBtn = document.getElementById("openLetter");
const closeBtn = document.getElementById("closeBtn");
const closeIcon = document.querySelector(".close");

const typing = document.getElementById("typing");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// ===============================
// CREATE STARS
// ===============================

const starCount = window.innerWidth < 768 ? 120 : 250;

for (let i = 0; i < starCount; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 3 + "s";

    star.style.animationDuration = (1 + Math.random() * 3) + "s";

    star.style.opacity = Math.random();

    starsContainer.appendChild(star);

}

// ===============================
// SHOOTING STAR
// ===============================

function createShootingStar(){

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.left = (70 + Math.random()*25) + "vw";

    star.style.top = (Math.random()*30) + "vh";

    shootingContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },3000);

}

setInterval(createShootingStar,6000);

// ===============================
// HEARTS
// ===============================

const heartIcons = [

"💖",
"💕",
"💗",
"💓"

];

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=heartIcons[
        Math.floor(Math.random()*heartIcons.length)
    ];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(16+Math.random()*18)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(

createHeart,

window.innerWidth<768 ? 900 : 450

);

// ===============================
// LETTER CONTENT
// ===============================

const message = `

Đêm đã khuya rồi... 🌙

Hy vọng hôm nay Thảo đã có thật nhiều niềm vui.

Nếu hôm nay có điều gì khiến Thảo mệt mỏi thì hãy để tất cả ngủ yên theo màn đêm nhé.

Chúc Thảo có một giấc ngủ thật sâu,
những giấc mơ thật đẹp
và thức dậy với một nụ cười thật rạng rỡ.

Mong ngày mai sẽ là một ngày thật nhiều may mắn,
thật nhiều niềm vui
và thật nhiều hạnh phúc.

Cảm ơn vì đã dành chút thời gian để đọc những dòng này.

❤️

Ngủ ngon nhé...

Thảo 💖

`;

// ===============================
// TYPE WRITER
// ===============================

let typingTimer;

function typeWriter(){

    clearInterval(typingTimer);

    typing.innerHTML="";

    let i=0;

    typingTimer=setInterval(()=>{

        typing.innerHTML += message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(typingTimer);

        }

    },28);

}

// ===============================
// POPUP
// ===============================

function openPopup(){

    popup.classList.add("show");

    typeWriter();

}

function closePopup(){

    popup.classList.remove("show");

}

openBtn.addEventListener(

"click",

openPopup

);

closeBtn.addEventListener(

"click",

closePopup

);

closeIcon.addEventListener(

"click",

closePopup

);

// click outside

popup.addEventListener(

"click",

(e)=>{

    if(e.target===popup){

        closePopup();

    }

}

);

// ===============================
// MUSIC
// ===============================

let playing=false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        playing=true;

        musicBtn.innerHTML="🔊";

    }

    else{

        music.pause();

        playing=false;

        musicBtn.innerHTML="🎵";

    }

});

// ===============================
// LITTLE SPARKLE
// ===============================

setInterval(()=>{

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.width="5px";

    star.style.height="5px";

    starsContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2500);

},1200);

// ===============================
// GREETING
// ===============================

console.log("🌙 Chúc Thảo ngủ ngon ❤️");

