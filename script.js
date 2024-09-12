
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

function chatWaYes(){
    return window.open("https://wa.wizard.id/404d1d");
}

function chatWaNo(){
    return window.open("https://wa.wizard.id/a1b3cb");
}

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Alapyu too"; 
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
    setTimeout(chatWaYes, 3000);
    btnGroup.remove();
});

noBtn.addEventListener("click", () => {
    question.innerHTML = "hmm :("; 
    gif.src = "kucingSedih.gif";
    setTimeout(chatWaNo, 3000);
    btnGroup.remove();
});

//const noBtnRect = noBtn.getBoundingClientRect(); 
    //const maxX = window.innerWidth - noBtnRect.width; 
    //const maxY = window.innerHeight - noBtnRect.height;
    //const randomX = Math.floor(Math.random() * maxX); 
    //const randomY = Math.floor(Math.random() * maxY);
    //noBtn.style.left = randomX + "px";
    //noBtn.style.top = randomY + "px";
//Link API Whatsapp
//https://wa.wizard.id/6ce584