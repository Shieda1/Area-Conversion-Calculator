// https://www.omnicalculator.com/conversion/area-converter

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const m2Radio = document.getElementById('m2Radio');
const acRadio = document.getElementById('acRadio');

let m2;
let ac = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

m2Radio.addEventListener('click', function() {
  variable1.textContent = 'ac';
  ac = v1;
  result.textContent = '';
});

acRadio.addEventListener('click', function() {
  variable1.textContent = 'm²';
  m2 = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(m2Radio.checked)
    result.textContent = `m² = ${computem2().toFixed(5)}`;

  else if(acRadio.checked)
    result.textContent = `ac = ${computeac().toFixed(5)}`;
})

// calculation

function computem2() {
  return Number(ac.value) / 4047;
}

function computeac() {
  return Number(m2.value) * 4047;
}