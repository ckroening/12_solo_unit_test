/**
 * Queue implemenation
 * @author: TODO
 */

 function Queue() {
 	var elements = [];

 	/**
 	 * Adds an element to back of queue
 	 *
 	 * @param {*} element to add
 	 */
 	this.enqueue = function(element) {
 		return null; // TODO
 	}
 	//TODO: add doc block
 	this.dequeue = function() {
 		return null; // TODO
 	}
 	/**
 	 * Reveals first element in queue.
 	 * Does NOT remove element.
 	 *
 	 * @return first element in queue
 	 */
 	this.front = function() {
 		return elements[0];
 	}
 	/**
 	 * Determine if queue is empty.
 	 *
 	 * @return true if queue has no elements, 
 	 * 			false if queue has elements
 	 */
 	this.isEmpty = function() {
 		return null; // TODO
 	}

 	//TODO: add doc block
 	this.size = function() {
 		return null; // TODO
 	}
 }
