import LinkedListWithTail from "../LinkedList/linked_list_tail.js";
import LinkedListNode from "../LinkedList/linked_list_node.js";


// implementation of a Queue using a linked list with a tail pointer (allows for O(1) appending)
// the "first" item in the queue is the head of the list; new items are enqueued at the tail and dequeued at the head
export default class Queue {
    constructor(firstItem = null){
        this.queue = new LinkedListWithTail(new LinkedListNode(firstItem));
        this.size = (firstItem ? 1 : 0 );
    };

    // add the item to the back of the queue, using append on the underlying linked list
    enqueue(item){
        this.queue.append(item);
        this.size++;
    };

    // remove the next item up in the queue, which is the head of the underlying linked list
    // return the item after removing it, or null if the queue is empty
    dequeue(){
        this.size > 0 ? this.size-- : this.size = 0;
        return this.isEmpty() ? null : this.queue.removeHead().data;
    };

    // return the next item in the queue without removing it
    peek(){
        return this.isEmpty() ? null : this.queue.head.data;
    };

    // return true if the queue is empty, false if it has any number of items
    isEmpty(){
        return (this.queue.head === null)
    };

    // delete all the items in the queue
    clear(){
        while (this.queue.head){
            this.queue.removeHead();
        }
        this.size = 0;
    };

    // returns an array of the items in the queue with precedence descending from left to right
    getArray(){
        return this.queue.getArrayOfData();
    }

};