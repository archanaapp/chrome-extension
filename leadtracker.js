let myLeads = [];


const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("Delete-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

console.log(ulEl) 

// save a key-value pair in ;ocalstorage
// refresh the page. get the value and log it to the console
// clear loacalstorage

// Hints:
// localStorage.setItem(key,value)
// localStorage.getItem(key)
// localStorage.clear()
// PS:both key and value need to be strings

if (leadsFromLocalStorage) {
        myLeads = leadsFromLocalStorage
        render(myLeads)
    }
    
    


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
    
})


function render(leads){
        let listItems = ""
        for(let i = 0; i<leads.length; i++){
               // listItems += "<li> <a href = '#'>" + myLeads[i] + "<a/></li>"
                listItems += 
                // "<li> <a target = '_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "<a/></li>"
                `
                
                        <li> 
                        <a target = '_blank' href = '${leads[i]}' > 
                        ${leads[i]} <a/>
                        </li>
                `
        }
        ulEl.innerHTML = listItems;
}      

// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)

deleteBtn.addEventListener("dblclick", function(){
        localStorage.clear()
        myLeads = []
        render(myLeads)
})

inputButton.addEventListener("click", function(){
        myLeads.push(inputEl.value)
        // console.log(myLeads)
        inputEl.value = "";
        (localStorage.setItem("myLeads", JSON.stringify(myLeads )))
        //you can view in localstorage

        render(myLeads)

        console.log(localStorage.getItem("myLeads"))
})


       
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> ";
        // console.log(myLeads[i]) 

        // create element 
        // set text content
        // append ul
        
    
