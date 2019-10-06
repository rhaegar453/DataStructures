class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.items.length==0){
            throw new Error("Underflow");
        }
        return this.items.shift();
    }
    isEmpty(){
        return this.items==0;
    }
    printQueue(){
        let conc="";
        this.items.map(item=>{
            conc+=item+" ";
        })
        console.log(conc);
    }
}

module.exports=Queue;