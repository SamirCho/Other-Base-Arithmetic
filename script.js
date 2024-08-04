const dropdownBtn=document.getElementById("btn")
const dropdownMenu=document.getElementById("dropdown")
const toggleDropdown=function(){
  dropdownMenu.classList.toggle("show")
}
dropdownBtn.addEventListener("click",function(e){
  e.stopPropagation()
  toggleDropdown()
})

let op='+'

function drop(p){
  document.getElementById('btn').innerHTML=p
  op=p
  toggleDropdown()
}

function display(){
  document.getElementById('container').innerHTML=calculate(document.getElementById('base').value,document.getElementById('input1').value,document.getElementById('input2').value)
}

function calculate(base,input1,input2){
  base=toNumerical(base)
  if(!isNaN(base)){
    base=Number(base)
  }
  if(base!=Math.floor(base)||base<2||base>35){
    return "Invalid Base"
  }
  if(!isNaN(input1)){
    input1=Number(input1)
    if(input1!=Math.floor(input1)){
      return "Please only use integers"
    }
  }
  if(!isNaN(input2)){
    input2=Number(input2)
    if(input2!=Math.floor(input2)||badRatio(input1)||badRatio(input2)){
      return "Please only use integers"
    }
  }
  if(illegal(base,input1,input2)){
    return "Invalid digit for the base"
  }
  if(lowercase(input1,input2)){
    return "Please use capital letters"
  }
  let result
  if(op=="+"){
    result=fromDecimal(base,toDecimal(base,input1)+toDecimal(base,input2))
  }
  if(op=="-"){
    result=fromDecimal(base,toDecimal(base,input1)-toDecimal(base,input2))
  }
  if(op=="×"){
    result=fromDecimal(base,toDecimal(base,input1)*toDecimal(base,input2))
  }
  if(op=="^"){
    result=fromDecimal(base,toDecimal(base,input1)**toDecimal(base,input2))
    if(input1<0){
      return `(${input1})<sup>${input2}</sup> = ${result} in base ${base}`
    }else{
      return `${input1}<sup>${input2}</sup> = ${result} in base ${base}`
    }
  }
  return `${input1} ${op} ${input2} = ${result} in base ${base}`
}

let digits=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function illegal(base,input1,input2){
  let illegalArr=digits.slice(base)
  let chars=(input1.toString()+input2.toString()).split("")
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < illegalArr.length; j++) {
      if(chars[i]==illegalArr[j]){
        return true
      }
    }
  }
  return false
}

let lowercaseArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function lowercase(input1,input2){
  let chars=(input1.toString()+input2.toString()).split("")
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < lowercaseArr.length; j++) {
      if(chars[i]==lowercaseArr[j]){
        return true
      }
    }
  }
  return false
}

function badRatio(x){
  for (let i = 0; i < x.length; i++) {
    if(x.charAt(i)=="."||x.charAt(i)=="/"){
      return true
    }
  }
  return false
}