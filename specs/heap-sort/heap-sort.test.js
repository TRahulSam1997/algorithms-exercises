const heapSort = (array) => {
  // code
  array = createMaxHeap(array);


  let heapSize = array.length;

  for (let i = heapSize - 1; i > 0; i--) {
    swapPlace(0, i, array);
    heapify(array, 0, i);
  }

  return array;
};

const createMaxHeap = (array) => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};

const swapPlace = (index1, index2, array) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

const heapify = (array, index, heapSize) => {
  // code
  let parentIndex = index;
  let leftChildIndex = 2 * index + 1;
  let rightChildIndex = 2 * index + 2;

  if (heapSize > leftChildIndex && array[leftChildIndex] > array[parentIndex]) {
    parentIndex = leftChildIndex;
  }

  if (heapSize > rightChildIndex && array[rightChildIndex] > array[parentIndex]) {
    parentIndex = rightChildIndex;
  }

  if (parentIndex !== index) {
    swapPlace(index, parentIndex, array);
    heapify(array, parentIndex, heapSize);
  }
};

// unit tests
// do not modify the below code
test.skip("heap sort", function () {
  const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
  heapSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
