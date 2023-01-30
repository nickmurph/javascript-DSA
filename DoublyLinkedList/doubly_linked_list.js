import DoublyLinkedListNode from "./doubly_linked_list_node.js";

export default class DoublyLinkedList {
    constructor(headNode=null){
        this.head = headNode;
        this.tail = headNode;
    };

    prepend(newData){};
    append(newData){};
    insertAt(index, newData){};
    contains(soughtData){};
    delete(deleteData){};
    removeHead();
    removeTail();
    getArrayOfData(){};
    printData(){};
}