function buildHeap(unsortedArray) {
  let sorted = true;
  while (sorted) {
    sorted = false;
    for (let i = unsortedArray.length - 1; i > 0; i--) {
      // i = 8
      const child = unsortedArray[i]; // 9
      const parentIndex = parseInt((i - 1) / 2, 10);
      const parent = unsortedArray[parentIndex];

      if (child > parent) {
        unsortedArray[i] = parent;
        unsortedArray[parentIndex] = child;
        sorted = true;
      }
    }
  }
  return unsortedArray;
}

function switchChildWithParent({ heapedArray, parentIndex, childIndex }) {
  console.log("before switching", heapedArray);
  const helperValue = heapedArray[parentIndex];
  heapedArray[parentIndex] = heapedArray[childIndex];
  heapedArray[childIndex] = helperValue;
  console.log("after switching", heapedArray);
  return childIndex;
}
// [9, 6, 4, 4, 1, 4, 3, 3, 2]
// [4, 4, 3, 1, 4, 3, 2, 6, 9]
function downHeap(heapedArray) {
  const result = [];
  let parentIndex = 0;
  let leftChildIndex;
  let rightChildIndex;

  const initialLength = heapedArray.length;
  for (let i = 0; i < initialLength; i++) {
    result.push(heapedArray[0]);
    heapedArray[0] = heapedArray.pop();
    console.log("new heapedArray", heapedArray, heapedArray.length, i);

    while (parentIndex * 2 + 1 < heapedArray.length) {
      leftChildIndex = parentIndex * 2 + 1;
      rightChildIndex = parentIndex * 2 + 2;
      if (heapedArray[rightChildIndex] > heapedArray[leftChildIndex]) {
        if (
          heapedArray[rightChildIndex] > heapedArray[parentIndex] &&
          rightChildIndex < heapedArray.length
        ) {
          parentIndex = switchChildWithParent({
            heapedArray,
            parentIndex,
            childIndex: rightChildIndex
          });
        } else {
          break;
        }
      } else {
        if (
          heapedArray[leftChildIndex] > heapedArray[parentIndex] &&
          leftChildIndex < heapedArray.length
        ) {
          parentIndex = switchChildWithParent({
            heapedArray,
            parentIndex,
            childIndex: leftChildIndex
          });
        } else {
          break;
        }
      }
    }
  }
  return result.reverse();
}

module.exports = input => {
  return downHeap(buildHeap([...input]));
};
