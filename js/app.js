'use strict';

function getRandomNum() {
  return Math.floor(Math.random() * BusMall.allObject.length);
}

let leftImg = document.getElementById('leftImage');
let centerImg = document.getElementById('centerImage');
let rightImg = document.getElementById('rightImage');


let button1 = document.getElementById('button1');

leftImg.addEventListener('click', click1);
centerImg.addEventListener('click', click1);
rightImg.addEventListener('click', click1);

button1.addEventListener('click', votes2);

let counts = 0;
let maxAttempts = 25;

let firstShow = [];

let arrayOfIndex = [];

let photoName = [];
let Votes = [];
let Show = [];



function BusMall(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.show = 0;
  BusMall.allObject.push(this);
  photoName.push(this.name);

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

  firstShow[0] = getRandomNum();
  firstShow[1] = getRandomNum();
  firstShow[2] = getRandomNum();



  while ( firstShow.some( check => arrayOfIndex.includes(check) ) || firstShow[0] === firstShow[1] || firstShow[0] === firstShow[2] || firstShow[1] === firstShow[2]) {
    if (firstShow[0] === firstShow[1]) {
      firstShow[1] = getRandomNum();
    } else if (firstShow[0] === firstShow[2]) {
      firstShow[2] = getRandomNum();
    } else if (firstShow[1] === firstShow[2]) {
      firstShow[2] = getRandomNum();
    } else if ( arrayOfIndex.includes(firstShow[0]) ) {
      firstShow[0] = getRandomNum();
    }
    else if ( arrayOfIndex.includes(firstShow[1]) ) {
      firstShow[1] = getRandomNum();
    }
    else if ( arrayOfIndex.includes(firstShow[2]) ) {
      firstShow[2] = getRandomNum();
    }
  }

  arrayOfIndex = [firstShow[0] , firstShow[1] , firstShow[2]];




  BusMall.allObject[firstShow[0]].show++;
  BusMall.allObject[firstShow[1]].show++;
  BusMall.allObject[firstShow[2]].show++;

  leftImg.src = BusMall.allObject[firstShow[0]].source;
  centerImg.src = BusMall.allObject[firstShow[1]].source;
  rightImg.src = BusMall.allObject[firstShow[2]].source;


}


// leftImg.src = BusMall.allObject[firstShow[0]1].source;
// centerImg.src = BusMall.allObject[firstShow[1]1].source;
// rightImg.src = BusMall.allObject[firstShow[2]1].source;



function click1(event) {
  counts++;

  if (maxAttempts >= counts) {

    if (event.target.id === 'leftImage') {
      BusMall.allObject[firstShow[0]].votes++;
    } else if (event.target.id === 'centerImage') {
      BusMall.allObject[firstShow[1]].votes++;
    } else if (event.target.id === 'rightImage') {
      BusMall.allObject[firstShow[2]].votes++;
    }

    renderimages();

  } else {

    leftImg.removeEventListener('click', click1);
    centerImg.removeEventListener('click', click1);
    rightImg.removeEventListener('click', click1);
    button1.style.display = 'block';

 



  }
}


function votes2( ) {
  let ulResults = document.getElementById('ul');

  ulResults.innerHTML = '';

  for(let i = 0 ; i < BusMall.allObject.length;i++){
    Votes.push( BusMall.allObject[i].votes );
    Show.push( BusMall.allObject[i].show ); 
    let li = document.createElement('li');
    ulResults.appendChild(li);
    li.textContent = `${BusMall.allObject[i].name} had ${BusMall.allObject[i].votes} votes, and was seen ${BusMall.allObject[i].show} times.`;
  }
  chart();



  

}

function chart() {

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: photoName, 
      datasets: [{
        label: 'Number Of votes',
        data: Votes,
        backgroundColor: [
          'rgba(0, 204, 255, 0.2)',
        ],
        borderWidth: 1
      },{
        label:'# of Shown',
        data: Show,
        backgroundColor:[
          'rgba(0, 255, 0, 0.2)'
        ],
        borderWidth: 1
      }]
    }
  });
}
