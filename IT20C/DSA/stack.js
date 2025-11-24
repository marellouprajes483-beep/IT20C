class Stack{
    constructor(){
        this.data ={};
        this.topIndex = -1;
    }

    traverse(){
        let output ="";
        for(let i=0; i<= this.topIndex; i++){
            output += this.data[i] +"";

        }

        console.log(output);
    }
    push(element){
        this.topIndex ++;
        this.data[this.topIndex]= element;
        
    }

    is_empty(){
        return this.topIndex === -1;
    }
    peek(){
        //correcting statement
        if (this.is_empty()) return null;
        return this.data[this.topIndex];p
    }
    pop(){
        //correcting statement
        if(this.is_empty())return null;

        let value = this.data[this.topIndex];
        delete this.data[this.topIndex];
        this.topIndex --;
        return value;
    }
    size(){
        return this.topIndex1;
    }

}


//

let stack1 = new stack();
stack1.push(2);
stack1.travere();
stack1.push(3);
stack1.traveres();
stack1.push(1);
stack1.traverse();
// console.log ("is the stack empty?" + stack.is_empty());
console.log ("is the stack empty?" + stack.is_empty());
stack1.pop();
console.log ("top element" + stack1.pop() + "is popped the new element"+ stack1.peek());
console.log ("new stack size:" + stack.is_empty());
stack1.traverse();