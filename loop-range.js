function range(start, end, step) {
  let rangeArr = [];
  let isUndefined = start === undefined || end === undefined || step === undefined;

  if(!isUndefined && start < end && step >= 0) {
    for (var i = start; i <= end; i += step) {
      rangeArr.push(i);
    }
  }
  return rangeArr;

}

console.log(range(0, 10, -1));
console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));