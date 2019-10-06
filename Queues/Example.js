const Queue=require('./Queues');

let q=new Queue();

q.enqueue('A');
q.enqueue('B');
q.enqueue('C');
q.printQueue();
q.dequeue();
q.dequeue();
q.printQueue();
