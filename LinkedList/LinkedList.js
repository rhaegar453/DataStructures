class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(data) {
        let node = new Node(data);
        let current;
        if (this.head == null) {
            /* Case for when the list is empty */
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAt(data, index) {
        if (index > this.size) {
            throw new Error("Index greater than size of the linkedlist");
        }
        else {
            let node = new Node(data);
            let curr, prev;
            let pos = 0;
            curr=this.head;
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                while (pos < index) {
                    pos++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index) {
        if (index > this.size) {
            throw new Error("Index greater than size of the linkedlist");
        }
        else {
            let curr = this.head;
            let curr, prev;
            let i = 0;
            while (i < index) {
                i++;
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
        this.size--;
        return curr.data;
    }
    isEmpty(){
        return this.head==null;
    }
    length(){
        return this.size;
    }

    printList(){
        let curr=this.head;
        let conc="";
        while(curr.next){
            conc+=curr.data+" => ";
            curr=curr.next;
        }
        conc+=curr.data
        console.log(conc);
    }
    
    printListUtil(li){
        let curr=li;
        let conc="";
        while(curr.next){
            conc+=curr.data+" => ";
            curr=curr.next;
        }
        conc+=curr.data
        console.log(conc);
    }
}

let li=new LinkedList();
li.insert(12);
li.insert(13);
li.insert(14);

li.insertAt(34, 2)
li.printList()