import LinkedListWithTail from "../LinkedList/linked_list_tail.js";
import LinkedListNode from "../LinkedList/linked_list_node.js";

export default class Queue {
    constructor(firstItem = null){
        this.queue = new LinkedListWithTail(new LinkedListNode(firstItem));
        this.size = (firstItem ? 1 : 0 );
    };

    enqueue(item){

    };

    dequeue(){

    };

    peek(){

    };

    isEmpty(){

    };

    clear(){

    };

};