class Array{
    constructor(initialData =[]){
        this.data ={};
        this.length =0;
     
    
     for(i=0; i< initialData.length; i++){
        this.data[i] = initialData[i];
        this.length++
     }
    }

    traverse (){
       let output ="";

        for(let i=0; i< this.length; i++){
            output += this.data[i] + " ";
        }

        console.log(output);
    }
}


//


insert (index.data)
    //correcting statement
    if (index <0 || index > this.length){
        console.log("invalid index");
        return;   
    }

    //shifting condition
    for (let i =this.length; i >index; i++){
        this.data[i] = this.data [i-1];

    }

    delete this.data[this.length-1];
    this.length--;


search (element)
    for (let i=0; i< this.length;i++){
        if(this.data[i] ===element) return i;
        console.log(element + "is found at index "+ i);
        return i;

    }
     console.log(element + "is not found at any index");
    return -1; 


    update (index,element)

    //correcting statement
    if(index <0 || index >= this.length){
        console.log("inavlid index");
    }

    this.data[index]= element;

    delete(index,element)

    //correcting staement
    if(index <0 || index >= this.length){
        console.log("inavlid index");
        return;
    }
    //shifting condition
    for (let i =index; i< this.length; i++){
        this.data[i] = this.data [i-1];

    }


    

    




//
arr2 = new Array([4,2,3]);

arr1.traverse();
arr1.insert(0,50);
arr1.traverse();
arr1.delete(0);
arr1.traverse();


