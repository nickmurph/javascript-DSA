import LinkedListNode from "./linked_list_node.js";
import LinkedList from "./linked_list.js";

// an extension of the LinkedList class, with a this.tail pointer
// the tail pointer allows for O(1) insertion at the end of the list via append()
export default class LinkedListWithTail extends LinkedList {
    constructor(headNode){
        super(headNode);
        this.tail = this.head;
    }

    //overwrites the LinkedList.append method to ensure it updates this.tail
    append(newData){
        let newNode = new LinkedListNode(newData);
        this.tail.next = newNode;
        this.tail = newNode;   
    }

    // overwrites the LinkedList.insertAt method to ensure it updates this.tail
    insertAt(index, newData){
       //if n is negative, change n to 0
       index = index < 0 ? 0 : index;

       if (index === 0){
           this.prepend(newData);
           return
       }

       let newNode = new LinkedListNode(newData);
       let count = 0;
       let curNode = this.head;
       let prevNode = this.head;

       while (count < index && curNode){
           prevNode = curNode;
           curNode = curNode.next;
           count++;
       }
       prevNode.next = newNode;
       newNode.next = curNode;
       if (curNode === null){
        this.tail = newNode;
       };
    };

}