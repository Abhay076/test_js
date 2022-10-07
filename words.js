// Q.1 Create a function that takes a number as an input and returns the
// number in words( without using third-party packages).
// Range 1-1000(both number inclcusive)
// For example
// Input -555 Output - FIve hundred and fifty five
// Input -560 Output - FIve hundred and sixty 

function words(num){
    
    let l =num.length;
    if(l==0){
        document.write("empty string");
        return;
    }
    let single_digits =['zero',"one","two","three","four","Five","six","seven","eight","Nine"];
    let two_digits= ["","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let tens_multiple = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    let tens_power = ["hundred","thousand"];
    document.write(num,":"," ");
    if(l==1){
        console.log(single_digits[num.charCodeAt(0)-48]);
        return;
    }
    let x =0;
    while(x<num.length){
        if(l>=3){
            if(num.charCodeAt(x)-48!=0){
                console.log(single_digits[num.charCodeAt(x)-48],"");
                console.log(tens_power[l-3]);
            }
            l-=1;
        }
        else{
            if(num.charCodeAt(x)-48==1){
                sum=(num.charCodeAt(x)-48+num.charCodeAt(x+1)-48);
                console.log(two_digits[sum]);
                return;
            }
            else if(num.charCodeAt(x)-48==2&&num.charCodeAt(x+1)-48==0){
                console.log("twenty","and");
                return;
            }
            else{
                i = num.charCodeAt(x)-48;
                if(i>0)
                    console.log(tens_multiple[i],end=" ")
                else
                 console.log("",end=" ");
                 x+=1;
                if(num.charCodeAt(x)-48!=0)
                   console.log(single_digits[num.charCodeAt(x)-48])
                   
            }
        }
        x+=1;
    }
}
words("101");
