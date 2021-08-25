import "mocha";
import { expect } from "chai";
import Queue from "../../src/queue";

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("队列为空", () => {
    expect(queue.size()).to.equal(0);
    expect(queue.isEmpty()).to.equal(true);
  });

  it("enqueues elements", () => {
    queue.enqueue(1);
    expect(queue.size()).to.equal(1);
    queue.enqueue(2);
    expect(queue.size()).to.equal(2);
    queue.enqueue(3);
    expect(queue.size()).to.equal(3);

    expect(queue.isEmpty()).to.equal(false);
  });

  it("dequeue elements", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
    expect(queue.dequeue()).to.equal(undefined);
  });

  it("implements FIFO logic", () => {
    queue.enqueue(1);
    expect(queue.peek()).to.equal(1);
    queue.enqueue(2);
    expect(queue.peek()).to.equal(1);
    queue.enqueue(3);
    expect(queue.peek()).to.equal(1);

    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
    expect(queue.dequeue()).to.equal(undefined);
  });

  it("peek 测试", () => {
    expect(queue.peek()).to.equal(undefined);

    queue.enqueue(1);
    expect(queue.peek()).to.equal(1);

    queue.enqueue(2);
    expect(queue.peek()).to.equal(1);

    queue.dequeue();
    expect(queue.peek()).to.equal(2);
  });

  it("returns the correct size", () => {
    expect(queue.size()).to.equal(0);
    queue.enqueue(1);
    expect(queue.size()).to.equal(1);
    queue.enqueue(2);
    expect(queue.size()).to.equal(2);
    queue.enqueue(3);
    expect(queue.size()).to.equal(3);

    queue.clear();
    expect(queue.isEmpty()).to.equal(true);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).to.equal(3);

    queue.dequeue();
    expect(queue.size()).to.equal(2);
    queue.dequeue();
    expect(queue.size()).to.equal(1);
    queue.dequeue();
    expect(queue.size()).to.equal(0);
    queue.dequeue();
    expect(queue.size()).to.equal(0);
  });

  it("returns if it is empty", () => {
    expect(queue.isEmpty()).to.equal(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).to.equal(false);
    queue.enqueue(2);
    expect(queue.isEmpty()).to.equal(false);
    queue.enqueue(3);
    expect(queue.isEmpty()).to.equal(false);

    queue.clear();
    expect(queue.isEmpty()).to.equal(true);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.isEmpty()).to.equal(false);

    queue.dequeue();
    expect(queue.isEmpty()).to.equal(false);
    queue.dequeue();
    expect(queue.isEmpty()).to.equal(false);
    queue.dequeue();
    expect(queue.isEmpty()).to.equal(true);
    queue.dequeue();
    expect(queue.isEmpty()).to.equal(true);
  });

  it("clears the queue", () => {
    queue.clear();
    expect(queue.isEmpty()).to.equal(true);

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).to.equal(false);

    queue.clear();
    expect(queue.isEmpty()).to.equal(true);
  });
});
