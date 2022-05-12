function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let fib = function(x) {
    if (x <= 0) return 0;
    if (x == 1) return 1;
    return fib(x-1) + fib(x-2);
  }

  randint = getRandomInt(100)

  if (randint < 30) {
    fib(44);
  } else if (randint > 29 && randint < 86) {
    fib(20);
  } else fib(1);
  