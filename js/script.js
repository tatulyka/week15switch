  "use strict";
function setSelected(operation) {
  const selected = document.querySelector('btn.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  document.querySelector(`.${operation}`).classList.add('selected');
  }

  function calc(arg1, arg2, selectedOperation){
    switch (selectedOperation) {
      case 'plus':
          return arg1 + arg2;
      case 'minus':
          return arg1 - arg2;
      case 'multiply':
          return arg1 * arg2;
      case 'divide':
          return arg1 / arg2;
    }
  }
 function showResult() {
   const arg1 = +document.querySelector('#arg1').value;
   const arg2 = +document.querySelector('#arg2').value;
   const result = document.querySelector('.result-text');
   const selectedButton = document.querySelector('.btn.selected');
   const selectedButtonDivide = document.querySelector('.btn.divide.selected');
 
   

   if (selectedButton) {
    const calcResult = calc(arg1, arg2, selectedButton.classList[1]);
    result.innerHTML = isNaN(calcResult) ? 'Пожалуйста, укажите числа' : `Ваш результат: ${calcResult}` ;}
  if (selectedButtonDivide) {
    arg2 == 0 ?  alert('делить на 0 нельзя') : `Ваш результат: ${calcResult}`;
     }
    }  
  
function select(sender) {
   sender.classList.add('select1');
}

let displayimg = document.getElementById('displayimage');

function changeImg2() {
    displayimg.src = "images/gh82-13962d-1.jpg";
}
function changeImg1() {
    displayimg.src = "images/GH82-18308A-3.jpg";
}
function startImage() {
    displayimg.src = "images/GH43-04574C-3.jpg";
}

function colorShow() {
switch(document.querySelector('.colorchoice').value) {
case 'white':  document.querySelector('.container').classList.add('whitecolor'); break;
case 'light':  document.querySelector('.container').classList.add('lightcolor'); break;
case 'dark':  document.querySelector('.container').classList.add('darkcolor'); break;
case 'blue':  document.querySelector('.container').classList.add('bluecolor'); break;
}
}