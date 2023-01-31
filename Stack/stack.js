import LinkedList from "../LinkedList/linked_list.js";
import LinkedListNode from "../LinkedList/linked_list_node.js";


// A linked list based implementation of a Stack with the standard methods
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
    // if size is greater than zero, decrement it
    // if the stack is empty, return null
    pop(){
        this.size > 0 ? this.size-- : this.size = 0;
        return this.isEmpty() ? null : this.stack.removeHead().data;
    };

    // returns the top item from the stack without removing it
    // if the stack is empty, return null
    peak(){
        return this.isEmpty() ? null : this.stack.head.data;
    };

    // returns true if the stack is empty, false if it has any number of items
    isEmpty(){
        return (this.stack.head === null)
    };

    // deletes all items from the stack
    clear(){
        while (this.stack.head){
            this.stack.removeHead();
        }
        this.size = 0;
    };

    // returns an array of the items in the stack, with the top of the stack to the left
    getArray(){
        return this.stack.getArrayOfData();
    }
};