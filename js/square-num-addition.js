var squareFunc = function(inputNum){

  var squareNum = 0;
  var totals = 0;

  if((typeof inputNum !== 'number')) return false;

  for(var i = 1; i <= inputNum; i++){

    squareNum = Math.sqrt(i);

    totals+=squareNum;
  }

  return Number(totals.toFixed(2));

};

module.exports = {
  squareFunc : squareFunc
}