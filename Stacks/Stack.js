class Stack{
    constructor(){
        this.items=[];
    }
    /* Push */
    push(element){
        this.items.push(element);
    }
    /* Pop */
    pop(){
        if(this.items.length==0){
            throw new Error("Underflow");
        }
        return this.items.pop();
    }
    /* Peek */
    peek(){
        return this.items[0];
    }

    /* Print */
    print(){
        let conc="";
        this.items.map(item=>{
            conc+=item+" ";
        })
        console.log(conc);
    }

}


module.exports=Stack;