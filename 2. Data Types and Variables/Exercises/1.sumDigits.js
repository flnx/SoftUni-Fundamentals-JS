function solve(nums) {
  let numsToStr = nums.toString();
  let result = 0;

  for (let i = 0; i < numsToStr.length; i++) {
    let currentNum = Number(numsToStr[i]);
    result += currentNum;
  }
  console.log(result);
}
solve(245678);

// Output: 32
