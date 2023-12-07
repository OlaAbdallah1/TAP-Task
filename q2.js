function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2; // sum of all numbers from 0 to n
    const actualSum = nums.reduce((sum, num) => sum + num, 0); //sum of numbers in the array
    const missingNumber = expectedSum - actualSum;
    return missingNumber;
  }

  