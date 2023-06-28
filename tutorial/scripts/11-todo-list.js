const todoList = [
  { name : 'make dinner',
    date : '2020-03-18'}, 
  { name : 'wash dishes',
    date : '2020-03-19'}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for (let i=0;i<todoList.length;i++){
    const todoName = todoList[i].name;
    const todoDate = todoList[i].date;
    const html = `
      
      <div>
        ${todoName}
      </div>
      <div>
        ${todoDate}
      </div>
      <button class="delete-button" onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        ">Delete</button>
    `;
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}



function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const inputDate = document.querySelector('.js-date-input');
  const date = inputDate.value;
  const name = inputElement.value;
  console.log(date);

  todoList.push(
    {
      name : name,
      date : date
    });
  console.log(todoList);

  inputElement.value = '';
  renderTodoList();
}