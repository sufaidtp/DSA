let a=[1,2,3,4,5,6]


function multi(a){
    let b=[]
   
    for(i=0;i<a.length;i++){
        let res=a[i]*5
       
            b.push(res)

        
    }
    return b;
}
console.log(multi(a,5));