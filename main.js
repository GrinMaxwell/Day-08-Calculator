
document.getElementById('equals').onclick = function() {
  var input1 = document.getElementById('input1').value;
  input1 = Number(input1);
  var input2 = document.getElementById('input2').value;
  input2 = Number(input2);
  var sum = input1+input2;
  document.querySelector('output').innerHTML = sum;
};
