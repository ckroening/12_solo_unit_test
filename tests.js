QUnit.module("enqueue");
// TODO: Add tests

QUnit.module("dequeue", {
	beforeEach: function() {
		this.queue = new Queue();
		this.queue.enqueue("first");
		this.queue.enqueue("second");
		this.queue.enqueue("third");
	}
});
QUnit.test("Removes and returns first element in the queued", function(assert) {
	assert.equal(this.queue.dequeue(), "first", "the first element is returned");
	assert.equal(this.queue.size(), 2, "the queue is smaller");

	assert.equal(this.queue.dequeue(), "second", "the second element is returned");
	assert.equal(this.queue.size(), 1, "the queue is smaller");

	assert.equal(this.queue.dequeue(), "third", "the third element is returned");
	assert.equal(this.queue.size(), 0, "the queue is smaller");
});

QUnit.module("front");
// TODO: Add tests

QUnit.module("isEmpty");
// TODO: Add tests

QUnit.module("size", {
	beforeEach: function() {
		this.queue = new Queue();
	}
});
QUnit.test("Returns correct size", function(assert) {
	this.queue.enqueue("first");
	assert.equal(this.queue.size(), 1, "queue has one element");

	this.queue.enqueue("second");
	assert.equal(this.queue.size(), 2, "queue has two elements");

	this.queue.enqueue("third");
	assert.equal(this.queue.size(), 3, "queue has three elements");
});

