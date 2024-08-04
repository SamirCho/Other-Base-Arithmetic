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
}