  


function add(n){
    if(n<=1){
        return 
       
    }
    
    add(n-1)
    console.log(n);
    add(n-1)

}

console.log(add(5));