import "mocha";
import { expect } from "chai";

export function testStack(Stack, testName) {
  describe(testName, () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it("starts empty", () => {
      expect(stack.size()).to.equal(0);
      expect(stack.isEmpty()).to.equal(true);
    });

    it("pushes elements", () => {
      stack.push(1);
      expect(stack.size()).to.equal(1);
      stack.push(2);
      expect(stack.size()).to.equal(2);
      stack.push(3);
      expect(stack.size()).to.equal(3);

      expect(stack.isEmpty()).to.equal(false);
    });

    it("pops elements", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).to.equal(3);
      expect(stack.pop()).to.equal(2);
      expect(stack.pop()).to.equal(1);
      expect(stack.pop()).to.equal(undefined);
    });

    it("implements LIFO logic", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).to.equal(3);
      expect(stack.pop()).to.equal(2);
      expect(stack.pop()).to.equal(1);
      expect(stack.pop()).to.equal(undefined);
    });

    it("allows to peek at the top element in he stack without popping it", () => {
      expect(stack.peek()).to.equal(undefined);

      stack.push(1);
      expect(stack.peek()).to.equal(1);

      stack.push(2);
      expect(stack.peek()).to.equal(2);

      stack.pop();
      expect(stack.peek()).to.equal(1);
    });

    it("returns the correct size", () => {
      expect(stack.size()).to.equal(0);
      stack.push(1);
      expect(stack.size()).to.equal(1);
      stack.push(2);
      expect(stack.size()).to.equal(2);
      stack.push(3);
      expect(stack.size()).to.equal(3);

      stack.clear();
      expect(stack.isEmpty()).to.equal(true);

      stack.push(1);
      stack.push(2);
      stack.push(3);

      stack.pop();
      expect(stack.size()).to.equal(2);
      stack.pop();
      expect(stack.size()).to.equal(1);
      stack.pop();
      expect(stack.size()).to.equal(0);
      stack.pop();
      expect(stack.size()).to.equal(0);
    });

    it("returns if it is empty", () => {
      expect(stack.isEmpty()).to.equal(true);
      stack.push(1);
      expect(stack.isEmpty()).to.equal(false);
      stack.push(2);
      expect(stack.isEmpty()).to.equal(false);
      stack.push(3);
      expect(stack.isEmpty()).to.equal(false);

      stack.clear();
      expect(stack.isEmpty()).to.equal(true);

      stack.push(1);
      stack.push(2);
      stack.push(3);

      stack.pop();
      expect(stack.isEmpty()).to.equal(false);
      stack.pop();
      expect(stack.isEmpty()).to.equal(false);
      stack.pop();
      expect(stack.isEmpty()).to.equal(true);
      stack.pop();
      expect(stack.isEmpty()).to.equal(true);
    });

    it("clears the stack", () => {
      stack.clear();
      expect(stack.isEmpty()).to.equal(true);

      stack.push(1);
      stack.push(2);

      stack.clear();
      expect(stack.isEmpty()).to.equal(true);
    });
  });
}
