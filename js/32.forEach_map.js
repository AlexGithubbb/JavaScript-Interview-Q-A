let nums = [1, 2, 3, 45];

nums.forEach((num, i) => {
  nums[i] = num + 2;
});

console.log(nums);

const newNums = nums.map(num => {
  return num * -1;
});

console.log(newNums);

// map returns a new array but forEach doesn't, it modify the original array
