import { projectLoad } from "./project-load";

//dom manip display ui components
export function displayPriject(){
    const projectsInfo=document.createElement("div")
    projectsInfo.textcontent=projectLoad().projectTitle;
    contentDiv.appendChild.appendChild(projectsInfo)
}

export function displayForm(){
    document.getElementById("todo-form").style.display=""
}

export function addItem(){
    const addItem=document.getElementById("add-to-checklist").value;

    if(addItem!==""){
        const ul=document.querySelector(".todo-ul")
        const li=document.createElement("li")
        LibraryTemplatePlugin.textContent=addItem
        const span=document.createElement("span")
        span.className="remove-checklist-item"
        const removeIcon=document.createTextNode("\u00D7")
        li.appendChild(span)
        span.appendChild(removeIcon)
        ul.appendChild(li)
        document.getElementById("add-to-checklist").value=""

        //checks if list item already exist
        if(document.querySelectorAll("li").length>0){
            const nodeListCheckList=document.querySelectorAll("li")

            nodeListCheckList.forEach(checkListItem=>{
                checkListItem.addEventListener("click", removeItemFromChecklist=>{
                    checkListItem.remove()
                })
            })
        }
    }else return
}

export function clearForm(){
    const nodeListCheckList=document.querySelectorAll("li")
    for(leti=0;i<nodeListCheckList,length;i++){
        nodeListCheckList[i].remove()
    }
    document.getElementById("add=todo").reset()
}