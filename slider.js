const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider")
const image = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNum = 1;
const length = image.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach((button)=>{
    button.style.backgroundColor = "transparent";
})}

buttons.forEach((button,i) => {
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transform =`translateX(-${i * 700}px)`
        slideNum = i + 1;
        button.style.backgroundColor = "white";
    })

})

const nextSlide = () => {
     slider.style.transform = `translateX(-${slideNum * 700}px)`;
        slideNum++;
}
const nextSlide2 = () => {
    slider.style.transform = `translateX(-${(slideNum - 2) * 700}px)`;
    slideNum--;
}
const prevSlide = () => {
      slider.style.transform = `translateX(0px)`;
        slideNum = 1;
}
const prevSlide2 = () => {
    slider.style.transform = `translateX(-${(length - 1) * 700}px)`;
    slideNum = length;
}
const changeColor = ()=>{
  resetBg()
  buttons[slideNum - 1].style.backgroundColor = "white";
}
right.addEventListener("click", () => {
    slideNum < length ? nextSlide() : prevSlide();
    changeColor();
})
left.addEventListener("click", () => {
    slideNum > 1 ? nextSlide2() : prevSlide2();
    changeColor();
})


// right.addEventListener("click", () => {
//     if (slideNum < image.length) {
//         slider.style.transform = `translateX(-${slideNum * 700}px)`;
//         slideNum++;
//     }else{
//         slider.style.transform = `translateX(0px)`;
//         slideNum = 1;
//         }

// })
