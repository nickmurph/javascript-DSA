import LinkedListWithTail from "../LinkedList/linked_list_tail.js";
import LinkedListNode from "../LinkedList/linked_list_node.js";

export default class Queue {
    constructor(firstItem = null){
        this.queue = new LinkedListWithTail(new LinkedListNode(firstItem));
        this.size = (firstItem ? 1 : 0 );
    };

    // add the item to the queue, using append on the underlying linked list
    enqueue(item){

    };

    // remove the next item in the queue, in this case this is the tail of the underlying linked list
    // return the item after removing it
    dequeue(){

    };

    // return the next item in the queue without removing it
    peek(){

    };

    // return true if the queue is empty, false if it has any number of items
    isEmpty(){

    };

    // delete all the items in the queue
    clear(){

    };

};