// Q.2 You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
// E.g. 
// N = 10, K = 3
// Arr = [1,2,3,4,5,6,7,8,9,10]
// after K rotations
// Arr = [4,5,6,7,8,9,10,1,2,3]

const arr = [1,2,3,4,5,6,7,8,9,10];
const rotateByOne = arr=>{
    for(let i=0;i<arr.length-1;i++){
        temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    };
}
Array.prototype.rotateBy = function(n){
    const {length: l}=this;
    if(n>=l){
        return;
    }
    for(let i=1;i<=n;i++){
        rotateByOne(this);
    };
};

const a =[1,2,3,4,5,6,7,8,9,10];
a.rotateBy(8);
console.log(a);