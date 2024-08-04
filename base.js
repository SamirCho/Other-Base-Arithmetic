function toDecimal(base,num){
    let value=0
    num=num.toString()
    for (let i = 1; i <= num.length; i++) {
        value+=(base**(i-1))*toNumerical(num.charAt(num.length-i))
    }
    return value
}

function toNumerical(x){
    if(!isNaN(x)){
        return x
    }else{
        return 10+x.charCodeAt(0)-(x===x.toLowerCase()?96:64)
    }
}

function fromDecimal(base,num){
    let arr=[]
    while(num>=base){
        if(num%base<10){
            arr.push(num%base)
        }else{
            arr.push(toAlphabet(num%base))
        }
        num=Math.floor(num/base)
    }
    if(num<10){
        arr.push(num)
    }else{
        arr.push(toAlphabet(num))
    }
    return transpose(arr)
}

function toAlphabet(x){
    let alphaArr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    return alphaArr[x-10]
}

function transpose(arr){
    let newArr=[]
    for (let i = 0; i < arr.length; i++) {
        newArr[i]=arr[arr.length-1-i]
    }
    return newArr.join("")
}

console.log(fromDecimal(29,18043364))