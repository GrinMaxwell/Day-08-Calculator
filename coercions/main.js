var uncoerced = [undefined,
  null,
  true,
  false,
  "",
  "1.2",
  "one",
  0,
  -0,
  NaN,
  Infinity,
  -Infinity,
  1,
  {},
  [],
  [12],
  ['something'],
  function(){}];

var strings = uncoerced.map(function(item){return String(item);});


var numbers = uncoerced.map(function(item){return Number(item);});



var booleans = uncoerced.map(function(item){return Boolean(item);});

//borrowing some ideas for table creation from https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
var makeHTable = function(array){
  for (var i=0; i<array.length;i++){
    var cell = document.querySelector(('.h'+String(i+1)));
    var content = array[i];
    cell.innerHTML = content;
  }
};
makeHTable(uncoerced);
var makeStrTable = function(array){
  for (var i=0; i<array.length;i++){
    var cell = document.querySelector(('.s'+String(i+1)));
    var content = array[i];
    cell.innerHTML = content;
  }
};
makeStrTable(strings);
var makeNumTable = function(array){
  for (var i=0; i<array.length;i++){
    var cell = document.querySelector(('.n'+String(i+1)));
    var content = array[i];
    cell.innerHTML = content;
  }
};
makeNumTable(numbers);
var makeBooTable = function(array){
  for (var i=0; i<array.length;i++){
    var cell = document.querySelector(('.b'+String(i+1)));
    var content = array[i];
    cell.innerHTML = content;
  }
};
makeBooTable(booleans);
