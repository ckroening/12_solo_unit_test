/**
 * Queue Implemenation: QUnit Testing
 * @author: Charlotte Kroening
 */

 function Queue() {
 	var elements = [];

 	/* Adds an element to back of queue, @param {*} element to add */
 	this.enqueue = function(element) {
 		elements.push(element);
 	};

 	/* Remove and return first element from front of queue. */
 	this.dequeue = function() {
 		elements.shift();
 	};

 	/* Reveals first element in queue. Does NOT remove element. */
 	this.front = function() {
 		return elements[0];
 	}

 	/* Determine if queue is empty. @return true if queue has no elements, false if queue has elements */
 	this.isEmpty = function() {
 		if (elements.length === 0) {
 			return true;
 		} else {
 			return false;
 		}
 	};

 	/* Return length of array (number of elements in queue.) */
 	this.size = function() {
 		return elements.length;
 	};
 };
