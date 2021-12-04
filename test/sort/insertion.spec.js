import { sort } from "../../src/sort/insertion";
describe("选择排序", () => {
  test("空数组排序", () => {
    expect(sort([]).length).toEqual(0);
  });
  test("单个元素排序", () => {
    expect(sort([1])).toEqual([1]);
  });
  test("2个元素排序", () => {
    expect(sort([3, 1])).toEqual([1, 3]);
  });
  test("多个个元素排序1", () => {
    expect(sort([1, 3, 1])).toEqual([1, 1, 3]);
  });

  test("多个个元素排序2", () => {
    expect(sort([1, 3, 4, 2, 1])).toEqual([1, 1, 2, 3, 4]);
  });
  test("多个个元素排序3", () => {
    expect(sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
