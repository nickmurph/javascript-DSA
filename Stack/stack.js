import LinkedList from "../LinkedList/linked_list.js";
import LinkedListNode from "../LinkedList/linked_list_node.js";

export default class Stack {
    constructor(firstItem = null){
        this.stack = new LinkedList(new LinkedListNode(firstItem));
        this.size = (firstItem ? 1 : 0 );
    }

    // add an item to the top of the stack, increment the size count
    push(item){
        this.stack.prepend(item);
        this.size++;
    };

    // removes the top item from the stack and returns it
    // the underlying LinkedList returns its removed head node, we return that nodes data field
    pop(){
        return this.stack.removeHead().data;
    };

    // returns the top item from the stack without removing it
    // access the head node of the underlying stack and return its data field
    peak(){
        return this.stack.head.data;
    };

    // returns true if the stack is empty, false if it has any number of items
    isEmpty(){

    };

    // deletes all items from the stack
    clear(){

    };

};