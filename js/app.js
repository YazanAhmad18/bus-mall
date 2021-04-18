'use strict';

function getRandomNum() {
  return Math.floor(Math.random() * BusMall.allObject.length);
}

let leftImg = document.getElementById('leftImage');
let centerImg = document.getElementById('centerImage');
let rightImg = document.getElementById('rightImage');

let button1 = document.getElementById('button');

leftImg.addEventListener('click', click1);
centerImg.addEventListener('click', click1);
rightImg.addEventListener('click', click1);

button1.addEventListener('click', votes2);

let counts = 0;
let maxAttempts = 25;

let leftIndex;
let centerIndex;
let rightIndex;


function BusMall(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.show = 0;
  BusMall.allObject.push(this);
}

BusMall.allObject = [];

new BusMall('bag', 'images/bag.jpg');
new BusMall('banana', 'images/banana.jpg');
new BusMall('bathroom', 'images/bathroom.jpg');
new BusMall('boots', 'images/boots.jpg');
new BusMall('breakfast', 'images/breakfast.jpg');
new BusMall('bubblegum', 'images/bubblegum.jpg');
new BusMall('chair', 'images/chair.jpg');
new BusMall('cthulhu', 'images/cthulhu.jpg');
new BusMall('dog-duck', 'images/dog-duck.jpg');
new BusMall('dragon', 'images/dragon.jpg');
new BusMall('pen', 'images/pen.jpg');
new BusMall('pet-sweep', 'images/pet-sweep.jpg');
new BusMall('scissors', 'images/scissors.jpg');
new BusMall('shark', 'images/shark.jpg');
new BusMall('sweep', 'images/sweep.png');
new BusMall('tauntaun', 'images/tauntaun.jpg');
new BusMall('unicorn', 'images/unicorn.jpg');
new BusMall('usb', 'images/usb.gif');
new BusMall('water-can', 'images/water-can.jpg');
new BusMall('wine-glass', 'images/wine-glass.jpg');

// console.log(BusMall.allObject);

renderimages();

function renderimages() {

  leftIndex = getRandomNum();
  centerIndex = getRandomNum();
  rightIndex = getRandomNum();


  while (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex) {
    if (leftIndex === centerIndex) {
      centerIndex = getRandomNum();
    } else if (leftIndex === rightIndex) {
      rightIndex = getRandomNum();
    } else if (centerIndex === rightIndex) {
      rightIndex = getRandomNum();
    }
  }

  BusMall.allObject[leftIndex].show++;
  BusMall.allObject[centerIndex].show++;
  BusMall.allObject[rightIndex].show++;

  leftImg.src = BusMall.allObject[leftIndex].source;
  centerImg.src = BusMall.allObject[centerIndex].source;
  rightImg.src = BusMall.allObject[rightIndex].source;
}


function click1(event) {
  counts++;

  if (maxAttempts >= counts) {

    if (event.target.id === 'leftImage') {
      BusMall.allObject[leftIndex].votes++;
    } else if (event.target.id === 'centerImage') {
      BusMall.allObject[centerIndex].votes++;
    } else if (event.target.id === 'rightImage') {
      BusMall.allObject[rightIndex].votes++;
    }

    renderimages();

  } else {

    leftImg.removeEventListener('click', click1);
    centerImg.removeEventListener('click', click1);
    rightImg.removeEventListener('click', click1);

  }
}


function votes2( ) {
  let ulResults = document.getElementById('ul');

  ulResults.innerHTML = '';

  for(let i = 0 ; i < BusMall.allObject.length;i++){
    let li = document.createElement('li');
    ulResults.appendChild(li);
    li.textContent = `${BusMall.allObject[i].name} had ${BusMall.allObject[i].votes} votes, and was seen ${BusMall.allObject[i].show} times.`;
  }

}
