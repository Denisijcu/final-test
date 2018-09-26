// Create a new function called "efficient" below the "msytery" function that returns
// the same value as the mystery function. However, the efficient function
// should have only one line of code inside its body instead of 4 lines of code,
// like the mystery function has.

function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
}


function efficient(a, b) {
  var x = 4 * a + b;
  var y = 3 * b + 5;
  var z = x + y
  return z;
}

console.log('Mystery', efficient(3, 2));
console.log('Efficient', efficient(3, 2));