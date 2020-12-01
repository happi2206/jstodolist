//var declarations
const todoinput = document.querySelector('.to-do-input');
const todobutton = document.querySelector('.to-do-button');
const todolist = document.querySelector('.todolist');

//event listeners

todobutton.addEventListener('click', addTodo);
todolist.addEventListener('click', deleteTodo);
filtertodo.addEventListener('click', filtertodofunction);

function addTodo(event){
    event.preventDefault();


    //created a div element with a class called todo.
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');

    //created a list element with a class called todo-item
    const newtodo = document.createElement('li');
    newtodo.innerText=todoinput.value;

    //make the list element to be inside the div created
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);

    //then create buttons

    //check mark button
    const checkbutton = document.createElement('button');
    checkbutton.classList.add('completebtn');
    checkbutton.innerHTML='<i class="fas fa-check"></i>';
    tododiv.appendChild(checkbutton);

    //trash button

    const trashbutton = document.createElement('button')
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
    trashbutton.classList.add('trashbtn');
    tododiv.appendChild(trashbutton);

    //now append the tododiv (the div created in the beginning of the function)
    //to the actual list div in the html which we initialized in the variable section

    todolist.appendChild(tododiv);
    todoinput.value = "";

}

function deleteTodo(event){
    const item = event.target;

    //delete 
    if(item.classList[0]==="trashbtn"){
        //console.log(item.classList);
        const todoparent = item.parentElement;
        todoparent.remove();
    }

    //complete

    if(item.classList[0]==="completebtn"){
        //console.log(item.classList[0]);
        const todoparent = item.parentElement;
        todoparent.classList.add('completed');
    }
}

