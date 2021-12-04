import { xor } from "../src/xor";
describe("异或操作", () => {
  let arr;
  beforeEach(() => {
    arr = [1, 2, 3, 2];
  });
  test("交换两个不同数字", () => {
    expect(xor(arr, 1, 2)).toEqual([1, 3, 2, 2]);
  });
  test("交换两个相同数字", () => {
    expect(xor(arr, 1, 3)).toEqual([1, 2, 3, 2]);
  });
  test("交换两个相同数字, 但是内存地址是一样的", () => {
    expect(xor(arr, 0, 0)).toEqual([0, 2, 3, 2]);
  });
});
