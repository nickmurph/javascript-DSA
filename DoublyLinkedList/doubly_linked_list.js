import DoublyLinkedListNode from "./doubly_linked_list_node.js";

export default class DoublyLinkedList {
    constructor(headNode=null){
        this.head = headNode;
        this.tail = headNode;
    };

    prepend(newData){};
    append(newData){
        let newNode = DoublyLinkedListNode(newData);
        this.tail.next = newNode;
        newNode.prev = this.tail;
    };
    insertAt(index, newData){};
    contains(soughtData){};
    delete(deleteData){};
    removeHead(){
        if (this.head){
            let oldHead = this.head;
            this.head = this.head.next;
            return oldHead;
        }
        return null;
    };
    removeTail(){
    };
    getArrayOfData(){};
    printData(){};
}