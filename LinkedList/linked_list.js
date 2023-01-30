import LinkedListNode from "./linked_list_node.js";

// a basic implementation of a Singly Linked List
// fairly standard methods are included and the SLL does not have a tail pointer
// more advanced operations will be covered in javascript-algorithms repo
export default class LinkedList {
    constructor(headNode=null){
        this.head = headNode;
    };

    // add a new LinkedListNode containing the newData at the START of the LinkedList
    prepend(newData){
        let newNode = new LinkedListNode(newData);
        newNode.next = this.head;
        this.head = newNode;
    };
    
    // add a new LinkedListNode containing the newData at the END of the LinkedList
    // without a tail pointer in the LinkedList class, this requires an O(n) traversal 
    append(newData){
        let newNode = new LinkedListNode(newData);

        // if there isn't a head node already, point to newNode and exit this method
        if (this.head === null){
            this.head = newNode;
            return
        }
        // otherwise, find the end of the list and let the last node's .next attr point to newNode
        let curNode = this.head;
        while (curNode.next){
            curNode = curNode.next;
        }
        curNode.next = newNode;
    };

    // add a new LinkedListNode in the nth index in the LinkedList (count from 0)
    // if n is 0, prepend the new LinkedListNode
    // if n exceeds the number of nodes, the new LinkedListNode is added at the end
    insertAt(index, newData){
        // //if n is negative, change n to 0
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
    };
    
    // determine whether a LinkedListNode containing soughtData exists in the LinkedList
    // returns a boolean indicating whether or not the soughtData was found
    contains(soughtData){
        let curNode = this.head;
        while (curNode){
            if (curNode.data === soughtData){
                return true
            }
            curNode = curNode.next;
        }
        return false;
    };
    
    // remove the head node from the LinkedList and return it
    // return null if there was no head node
    removeHead(){
        if (this.head){
            let oldHead = this.head;
            this.head = this.head.next;
            return oldHead;
        }
        return null;
    }



    // delete the first instance of a LinkedListNode containing data equal to deletedData
    // return true if the data was found and its node deleted, false if it didnt exist
    delete(deletedData){
        //if the head node is the one to be deleted, skip the extra steps below
        if (this.head.data === deletedData){
            this.head = this.head.next
            return true;
        };

        let prevNode = this.head;
        let curNode = this.head.next;
        while (curNode){
            if (curNode.data === deletedData){
                prevNode.next = curNode.next
                return true;
            }
            prevNode = curNode;
            curNode = curNode.next;
        }
        return false;
    };
    
    // iterate through the LinkedList and add each LinkedListNode's data to an array
    // upon reaching the end of the LinkedList, return the array of data
    getArrayOfData(){
        let curNode = this.head;
        let dataList =[];
        while (curNode){
            dataList.push(curNode.data);
            curNode = curNode.next;
        }
        return dataList;
    };

    // retrieve the dataList from getList() and print it to the console
    // useful for testing
    printData(){
        console.log(this.getArrayOfData());
    };
};