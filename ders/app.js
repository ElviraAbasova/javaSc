const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
let arr= []
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault;
    if(todoInput.value==""){
        alert("Enter value")
    }else{
        arr.push(todoInput.value);
        todoInput.value=""

    }
    
    Create()

})

function Create() {
    const selectBoxes = document.querySelector(".boxes");
    selectBoxes.innerHTML=""
    arr.forEach(element=>{
        const selectBoxes = document.querySelector(".boxes");
        const createDivBox = document.createElement("div");
        createDivBox.className="box"
        const createP= document.createElement("p");
        createP.textContent=element
        const createButtons= document.createElement("div");
        createButtons.className="buttons"
        const createbutton1= document.createElement("button");
        const createbutton2= document.createElement("button");
        createbutton1.textContent="Delete"
        createbutton1.className="delete"
        createbutton1.style.backgroundColor="red"
        createbutton2.style.backgroundColor="orange"
        createbutton2.textContent="Edit"
        createbutton2.className="Edit"
        selectBoxes.appendChild(createDivBox);
        createDivBox.append(createP,createButtons);
        createButtons.append(createbutton1,createbutton2)

        createbutton1.onclick=function (){
            createDivBox.remove();
            let index = arr.indexOf(element);
            arr.splice(index,1)

        }

        createbutton2.onclick=function (){
            const editPrompt=prompt("Edit value:", element );
            if(editPrompt!==null){
                createP.textContent=editPrompt
            }else{
                alert('enter valu')
            }

            

        }
    })


}



