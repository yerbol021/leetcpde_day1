const nums = [0, 12, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5];

let sorted_nums = nums.sort((a, b) => a - b);
console.log("sorted nums:", sorted_nums);

if (nums.length === 0) {
  console.log(0);
} else {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log("number of unique values:", k);
  console.log("sorted unnique values:", nums.slice(0, k));
}
