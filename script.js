const inputELement = document.getElementById('input-element');
const listContainer = document.getElementById('list-container');

function addtodo()
{
    if(inputELement.value === '')
    {
        alert("You have to write something before clicking on 'Add'");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputELement.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputELement.value = '';
    savedata();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata()
{
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();