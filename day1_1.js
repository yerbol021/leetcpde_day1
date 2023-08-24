const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5];

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
  console.log(k);
  console.log(nums.slice(0, k));
}
