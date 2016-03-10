'use strict';
var numbers = [];
var limit = 1000000;
var numPushes = 0;
var numChecks = 0;
var startTime = ( new Date() ).getTime();

for (let i = 0; i <= limit; i++) {
  if (i < limit) {
    setTimeout(
      ()=> {
        numbers.push(i);
        numPushes++;
      }, 0
    );
  }
  else {
    setTimeout(
      ()=> {
        console.log('Ordered?', checkOrder(numbers));
        console.log('Number of pushes:', numPushes);
        console.log('Number of checks:', numChecks);
        console.log('Last few entries...', numbers[i-1], numbers[i-2], numbers[i-3]);

        var endTime = ( new Date() ).getTime() - startTime;
        console.log('Total runtime:', endTime, 'ms');
      }, 0
    );
  }
}

function checkOrder (array) {
  return array.every(
    (val, i, arr) => {
      numChecks++;

      if (i > 0) {
        return val > arr[i - 1];
      }
      else return true;
    }
  );
}
