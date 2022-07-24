const submitButton=document.getElementById("submit");

const todoList=document.getElementById("todoList")

//Adding task to to list
submitButton.addEventListener("click",()=>{
    const inputValue=document.getElementById("inputValue").value;
    const messege=document.querySelector(".messege")
   
    
    if(inputValue.length===0 || inputValue===" "){
        alert("Please Enter Value ..")
        return;
    }

  

    let todoItem=document.createElement("div");
    todoItem.className="listItem"

    let deleteButton=document.createElement("button");
    deleteButton.textContent="X"
    deleteButton.className="btn btn-danger";
    deleteButton.classList.add("deleteButton");
    
   
    
    let todoItemContent=document.createElement("div");
    todoItemContent.textContent = inputValue;
    todoItemContent.className = "content";

    todoItem.appendChild(deleteButton);
    todoItem.appendChild(todoItemContent); 
    todoList.appendChild(todoItem);

    deleteButton.addEventListener('click',(e)=>{
        e.target.parentElement.remove()
    })
    
    
})  

