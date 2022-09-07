function fromStartToEnd(start, finish) {
  let current = start;

  let timerId = setInterval(function () {
    console.log(current);
    if (current == finish) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

fromStartToEnd(5, 15);
