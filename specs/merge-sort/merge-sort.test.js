/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/
const merge = (first, nums) => {
  let holdArr = [];

  while(!first.length === 0  && !nums.length === 0) {
    if (first[0] < nums[0]){
      holdArr.push(first.shift())
    } else {
      holdArr.push(nums.shift())
    }
  }

  return [...holdArr, ...first, ...nums];
}

const mergeSort = (nums) => {
  // code goes here
  let mid = nums.length/2;

  if (nums.length<2) {
    return nums;
  }

  let first = nums.splice(0, mid);
  return merge(mergeSort(first), mergeSort(nums))
};

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
