let sum = 0;
process.argv.forEach((value, index) => {
  if (index > 1) sum += +value;
});
console.log(sum);