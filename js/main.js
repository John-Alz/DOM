const btnSideBar = document.querySelector("#btnSideBar");
const btnSideBarTop = document.querySelector("#btnSideBarTop");
const sideBar = document.querySelector("#sideBar");
const sideBarTop = document.querySelector("#sideBarTop");


const figura = document.querySelector("#Figura")
const btnCirculo = document.getElementById("btnCirculo"); 
const btnRombo = document.getElementById("btnRombo"); 
const bgColor = document.getElementById("bgColor"); 
const colorPicker = document.getElementById("colorPicker");
const btnImg = document.querySelector("#btnImg");
const btnTop = document.querySelector("#btnTop");
const btnLeft = document.querySelector("#btnLeft");
const btnBottom = document.querySelector("#btnBottom");
const btnRight = document.querySelector("#btnRight");
const btnDiagonal = document.querySelector("#btnDiagonal");
const btnSideBarTopX = document.querySelector("#btnSideBarTopX");
const btnSideBarX = document.querySelector("#btnSideBarX");
// diagonal
const btnAnimation = document.querySelector("#btnAnimation");
const btnGradient = document.querySelector("#btnGradient");
const btnEstrella = document.querySelector("#btnEstrella");


// window.addEventListener("load", () => {
//     colorPicker.click();
// })

btnCirculo.addEventListener("click", () => {
    figura.classList.toggle("circulo");
    // figura.style.borderRadius = "50%"
})

btnRombo.addEventListener("click", () => {
    figura.classList.toggle("rombo");
    // figura.style.borderRadius = "50%"
})

colorPicker.addEventListener("change", () => {
    let valueColor = colorPicker.value;
    figura.style.backgroundColor = valueColor;
})


btnImg.addEventListener("click", () => {
    figura.style.backgroundImage = "url('img/img1.png')";
    figura.style.backgroundRepeat = "no-repeat"
    figura.style.backgroundSize = "cover"
})


btnTop.addEventListener("click", () => {
    figura.classList.toggle("top")
})

btnLeft.addEventListener("click", () => {
    figura.classList.toggle("leftBtn")
})

btnBottom.addEventListener("click", () => {
    figura.classList.toggle("bottomBtn")
})

btnRight.addEventListener("click", () => {
    figura.classList.toggle("btnRight")
})


// DIAGONAL

btnDiagonal.addEventListener("click", () => {
    figura.classList.toggle("diagonal")
    
})

btnAnimation.addEventListener("click", () => {
    figura.classList.toggle("animation")
})

btnGradient.addEventListener("click", () => {
figura.classList.toggle("gradient")
})


btnSideBar.addEventListener("click", () => {
    sideBar.classList.toggle("active")
    console.log("FUNCIONA")
})

btnSideBarX.addEventListener("click", () => {
    sideBar.classList.toggle("active")
    console.log("FUNCIONA")
})

btnSideBarTop.addEventListener("click", () => {
    sideBarTop.classList.toggle("active")
    console.log("FUNCIONA")
})

btnSideBarTopX.addEventListener("click", () => {
    sideBarTop.classList.toggle("active")
    console.log("FUNCIONA")
})

btnEstrella.addEventListener("click", () => {
    figura.classList.toggle("estrella")
    console.log("FUNCIONA")
})
