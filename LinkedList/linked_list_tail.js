import LinkedListNode from "./linked_list_node.js";
import LinkedList from "./linked_list.js";

// an extension of the LinkedList class, with a this.tail pointer
// the tail pointer allows for O(1) insertion at the end of the list via append()
export class LinkedListWithTail extends LinkedList {
    constructor(headNode){
        super(headNode);
        this.tail = this.head;
    }

    prepend(newData){
        
    }

    append(newData){

    }
}