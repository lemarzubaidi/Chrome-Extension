let myLeads = []
const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render (myLeads)
}
tabBtn.addEventListener("click", function(){
    chorme.tabs.query({active: true, currentWindow: true}, function(tabs){
myLeads.push(tabs[0].url)
localStorage.setItem("myLeads",JSON.stringify(myLeads))
})
})
function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
        listItem +=`
        <li>
        <a target='_blanck' herf='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})