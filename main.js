var operator;
document.getElementById('plus').onclick = function(){
  operator = 'plus';
};
document.getElementById('minus').onclick = function(){
  operator = 'minus';
};
document.getElementById('divide').onclick = function(){
  operator = 'divide';
};
document.getElementById('multiply').onclick = function(){
  operator = 'multiply';
};
document.getElementById('equals').onclick = function() {
  if(operator === 'plus'){
  var input1 = document.getElementById('input1').value;
  input1 = Number(input1);
  var input2 = document.getElementById('input2').value;
  input2 = Number(input2);
  var sum = input1+input2;
} else if (operator === 'minus') {
  var input1 = document.getElementById('input1').value;
  input1 = Number(input1);
  var input2 = document.getElementById('input2').value;
  input2 = Number(input2);
  var sum = input1-input2;
} else if (operator === 'divide') {
  var input1 = document.getElementById('input1').value;
  input1 = Number(input1);
  var input2 = document.getElementById('input2').value;
  input2 = Number(input2);
  var sum = input1/input2;
} else if (operator === 'multiply') {
  var input1 = document.getElementById('input1').value;
  input1 = Number(input1);
  var input2 = document.getElementById('input2').value;
  input2 = Number(input2);
  var sum = input1*input2;
}
  document.querySelector('output').innerHTML = sum;
};
