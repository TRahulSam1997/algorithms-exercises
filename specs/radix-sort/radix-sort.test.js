/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions

  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/
const countSort = (array, n, exp) => {
  let outputArr = new Array(n);
  let i;
  let count = new Array(10);

  for(let i=0;i<10;i++)
    count[i]=0;

  for (i =0; i < n; i++)
    count[Math.floor(array[i]/exp) % 10]++;

  // console.log(array)
  for (i = 1; i < 10; i++)
    count[i] += count[i - 1];

  for (i = n - 1; i >= 0; i--) {
    outputArr[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
    count[Math.floor(array[i] / exp) % 10]--;
    // console.log(outputArr[i]);
  }

  for (i = 0; i < n; i++) {
    array[i] = outputArr[i]
    // console.log(array[i]);

  }

  return array;
}

function radixSort(array) {
  // code goes here

  // let n = array.length;

  let m = Math.max(...array);

  for (let exp =1; Math.floor(m/exp)>0; exp *= 10)
    countSort(array, array.length, exp)

  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  // it("should sort 99 random numbers correctly", () => {
  //   const fill = 99;
  //   const nums = new Array(fill)
  //     .fill()
  //     .map(() => Math.floor(Math.random() * 500000));
  //   const ans = radixSort(nums);
  //   expect(ans).toEqual(nums.sort());
  // });
});
