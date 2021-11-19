import { NodeList, sort } from "../../src/chain";

describe("测试单链表", () => {
  test("sort:1 ", () => {
    let head = new NodeList([1, 3, 8, 10, 4, 7, 9]);
    sort(head);
    let next = head;
    const arr = [];
    while (next) {
      arr.push(next.val);
      next = next.next;
    }
    expect(arr).toEqual([1, 3, 4, 7, 8, 9, 10]);
  });
});
