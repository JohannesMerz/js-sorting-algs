const sortedData = require("./__test__/sorted.data");
const unsortedData = require("./__test__/unsorted.data");

const heapSort = require("./heap-sort");

describe("heap sort", () => {
  test("sort the array", () => {
    expect(heapSort(unsortedData)).toBe(sortedData);
  });
});
