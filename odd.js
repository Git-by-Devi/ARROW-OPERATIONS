let arr = [1, 3, 5, 6, 8];
const odd = (arr) => {
  return arr.filter((n) => n % 2 == 1).map((n) => (n = n * n));
};
console.log(odd(arr));
