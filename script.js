let todoListArray = [];
let areaTarea = document.getElementById('areaTarea');
let areaDescripcion = document.getElementById('areaDescripcion');
let miListaTodo = document.getElementById('miListaTodo');

function guardarTarea(){
    let todoObjeto = {
        todoId: todoListArray.length + 1,
        todoNombre: areaTarea.value + " Descrepción: " + areaDescripcion.value
    };
    todoListArray.push(todoObjeto);
    console.log(todoListArray);
    crearTodoList();
};

function crearTodoList(){
    document.getElementById("miListaTodo").innerHTML = "";
    for(let i = 0; i < todoListArray.length; i++){
        let liDinamico = document.createElement("li");
        liDinamico.classList.add("tarea");
        let labelDinamico = document.createElement("label");
        let pDimanico = document.createElement("p");
        pDimanico.textContent = todoListArray[i].todoNombre;
        labelDinamico.appendChild(pDimanico);
        liDinamico.appendChild(labelDinamico);
        miListaTodo.appendChild(liDinamico);

        let miDiv = document.createElement("div");
        miDiv.classList.add("settings");
        let iconoEditar = document.createElement("i");
        iconoEditar.classList.add("bi");
        iconoEditar.classList.add("bi-pencil-square");
        iconoEditar.addEventListener("click", editarTarea);
        iconoEditar.todoId = todoListArray[i].todoId;
        let iconoBorrar = document.createElement("i");
        iconoBorrar.classList.add("bi");
        iconoBorrar.classList.add("bi-trash");
        iconoBorrar.addEventListener("click", borrarTarea);
        iconoBorrar.todoId = todoListArray[i].todoId;
        miDiv.appendChild(iconoEditar);
        miDiv.appendChild(iconoBorrar);
        liDinamico.appendChild(miDiv);


    }

}

function borrarTarea(even){
    let index = todoListArray.findIndex(m=>m.todoId == even.target.todoId);
    todoListArray.splice(index,1);
    crearTodoList();
};

function editarTarea(){
    
};