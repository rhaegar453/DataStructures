/* Implementation of a Stack */


class Stack{
    constructor(){
        this.items=[];
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length==0;
    }
}



class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(item){
        this.items.push(item);
    }
    dequeue(){
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length==0;
    }
    printQueue(){
        let conc='';
        this.items.map(item=>{
            conc+=item+" ";
        })
        console.log(conc);
    }
}

let q=new Queue();
let s=new Stack();
q.enqueue(12);
q.enqueue(13);
q.enqueue(14);
q.enqueue(15);


q.printQueue();

while(!q.isEmpty()){
    s.push(q.dequeue());
}
let conc='';
while(!s.isEmpty()){
    conc+=s.pop()+" ";
}

console.log(conc);