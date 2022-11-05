const addbtn = document.querySelector('.addbtn');
var input = document.querySelector('.input_item');
const container = document.querySelector('.container');
class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input')
        input.setAttribute("class","input_items")
        input.value = itemName ;
        input.disabled = true;
        input.classList.add('input')
        input.type = "text";

        let itemBox = document.createElement("div") ;
        itemBox.classList.add('item');

        let editBtn = document.createElement('button')
        editBtn.setAttribute("class","editBtn")
        editBtn.innerHTML = "EDIT"
        editBtn.classList.add("EditButton")

        let removeBtn = document.createElement('button')
        removeBtn.setAttribute("class","removeBtn")
        removeBtn.innerHTML = "Remove"
        removeBtn.classList.add("DeleteButton")

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editBtn);
        itemBox.appendChild(removeBtn);
        editBtn.addEventListener('click',()=>this.edit(input));
        removeBtn.addEventListener('click',()=>this.remove(itemBox));
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
    
}
function check(){
    if(input !="" ){
    new item (input.value)
    input.value = "";
    }
}

addbtn.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
    if(e.which === 3){
        check()
    }
})