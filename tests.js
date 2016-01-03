/* QUnit Testing Practice.
/* Functions to Test: 'enqueue', 'dequeue', 'front', 'isEmpty', 'size' */

/* Test 'enqueue' function: 1. Make sure first element is added to end of queue. */
QUnit.module('enqueue');
Qunit.test('Add element to the end of the queue.', function(assert) {
	this.queue = new Queue();
	assert.equal(this.queue.enqueue('first'), undefined, 'Tests for addition of first element.');
	assert.equal(this.queue.enqueue('second'), undefined, 'Tests for addition of second element.')
});

/* Test 'dequeue' function: 1. Check removal and return of first element in queue. */
QUnit.module('dequeue', {
	beforeEach: function() {
		this.queue = new Queue();
		this.queue.enqueue('first');
		this.queue.enqueue('second');
		this.queue.enqueue('third');
	}
});

QUnit.test('Removes and returns first element in the queued', function(assert) {
	assert.equal(this.queue.dequeue(), 'first', 'the first element is returned');
	assert.equal(this.queue.size(), 2, 'the queue is smaller');

	assert.equal(this.queue.dequeue(), 'second', 'the second element is returned');
	assert.equal(this.queue.size(), 1, 'the queue is smaller');

	assert.equal(this.queue.dequeue(), 'third', 'the third element is returned');
	assert.equal(this.queue.size(), 0, 'the queue is smaller');
});

/* Test 'front' function: 1. Check return of first element without removal. */
QUnit.module('front');
Qunit.test('Return first element without removing it.', function (assert) {
	this.queue = new Queue;
	assert.equal(this.queue.front(), 'first', 'first element returned.');
	assert.equal(this.queue.size(), 3, 'queue size has not changed.');
};

/* Test 'isEmpty' function: 1. Boolean check whether or not queue is empty. */
QUnit.module('isEmpty');
QUnit.test('Check for an empty queue.', function (assert) {
	this.queue = new Queue;
	assert.equal(this.queue.isEmpty(), true, 'queue contains no elements.');

	this.enqueue('first');
	assert.equal(this.queue.isEmpty(), false, 'queue contains elements.');
};

/* Test 'size' function: 1. match elements.length to number of elements in queue) */
QUnit.module('size', {
	beforeEach: function() {
		this.queue = new Queue();
	}
});

QUnit.test('Returns correct size', function(assert) {
	this.queue.enqueue('first');
	assert.equal(this.queue.size(), 1, 'queue has one element');

	this.queue.enqueue('second');
	assert.equal(this.queue.size(), 2, 'queue has two elements');

	this.queue.enqueue('third');
	assert.equal(this.queue.size(), 3, 'queue has three elements');
});

