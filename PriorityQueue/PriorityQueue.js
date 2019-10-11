class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}


class PriorityQueue {
    constructor() {
        this.items = [];
    }
    /* Enqueue */
    enqueue(element, priority) {
        let newPQ = new QElement(element, priority);
        let contain = false;

        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > newPQ.priority) {
                // Once the correct location is found it is 
                // enqueued 
                this.items.splice(i, 0, newPQ);
                contain = true;
                break;
            }
        }

        if (!contain) {
            this.items.push(newPQ);
        }
    }

    /* Dequeue */
    dequeue() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        else {
            return this.items.shift();
        }
    }


    /* isEmpty */
    isEmpty() {
        return this.items.length == 0;
    }

    /* printPQ */
    printPQ() {
        let conc = "";
        while (!this.isEmpty()) {
            conc += this.dequeue().element + " ";
        }
        console.log(conc);
    }
}



let pq = new PriorityQueue();
pq.enqueue(12, 8);
pq.enqueue(13, 13);
pq.enqueue(14, 2);

pq.printPQ();