

const htmlColor = document.querySelector('.color');
const htmlErase = document.querySelector('.erase');
const htmlRainbow = document.querySelector('.rainbow');
const htmlReset = document.querySelector('.reset');
const htmlSketchScreen = document.querySelector('.sketchScreen');
const htmlRange = document.querySelector('.range')

let numberOfLoops = 0

const mouseOverEvent = ()=> {
    let list = document.querySelectorAll('.pixel');
    for(let i=0; i<list.length;i++) {
        list[i].addEventListener('mouseover', () => {
        list[i].classList.add('active');
    })
}
}

const mouseOverChangeColor = (newColor)=> {
    let list = document.querySelectorAll('.pixel');

    for(let i=0; i<list.length;i++) {
        list[i].addEventListener('mouseover', () => {
            list[i].style.backgroundColor = newColor;
            list[i].classList.toggle('active');
            }
    
  )  } 
}


const eraser = () => {   
    let list = document.querySelectorAll('.pixel');
    for(let i=0; i<list.length;i++) {
        list[i].addEventListener('mouseover', () => {
            list[i].classList.remove('active');
            list[i].style.backgroundColor='';
        })
    }
}

const reset = () => {
    let list = document.querySelectorAll('.pixel');
    for(let i=0; i<list.length;i++) {
        list[i].classList.remove('active');
        list[i].style.backgroundColor='';
        }
    }

const updateScreen = (() => {  

    let list = document.querySelectorAll('.pixel');
    
    numberOfLoops = htmlRange.value;
    for(let i = 0; i < numberOfLoops;i++){
        let newDiv = document.createElement('div')
        htmlSketchScreen.appendChild(newDiv)

        for(let j=0; j < numberOfLoops;j++) {
            let div = document.createElement('div');
            div.classList.add('pixel');
            newDiv.appendChild(div)
    }
}
});

const makeGrid = () =>{ 
    document.querySelector('output').value = htmlRange.value
    console.log(htmlRange.value)
    htmlSketchScreen.innerHTML=""
    updateScreen();
    mouseOverEvent();
}

const changeColor = () => {
    let newColor = htmlColor.value
    mouseOverChangeColor(newColor);
}

const rainbow = () => {
    let list = document.querySelectorAll('.pixel');
    for(let i=0; i<list.length;i++) {
        list[i].addEventListener('mouseover', () => {
        list[i].classList.add('randomColor');
        list[i].style.backgroundColor = newColor;
    })
}
}

htmlColor.addEventListener('input', changeColor); 
htmlRange.addEventListener('input', makeGrid); 
htmlErase.addEventListener('click', eraser);
htmlReset.addEventListener('click', reset);
htmlReset.addEventListener('click', rainbow);


makeGrid();
mouseOverEvent();





