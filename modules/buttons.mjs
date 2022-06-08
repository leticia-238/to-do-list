import { saveData } from "./saveTodoList.mjs";

const completeTask = (e) => {
  const task = e.currentTarget.parentElement;
  task.classList.toggle("completed");
  saveData();
};
const moveUp = (e) => {
  const task = e.currentTarget.parentElement;
  const previousTask = task.previousElementSibling;
  task.parentElement.insertBefore(task, previousTask);
  saveData();
};
const moveDown = (e) => {
  const task = e.currentTarget.parentElement;
  let nextTask = task.nextElementSibling;
  if (nextTask) {
    task.insertAdjacentElement("beforebegin", nextTask);
  } else {
    nextTask = task.parentElement.firstElementChild;
    nextTask.insertAdjacentElement("beforebegin", task);
  }
  saveData();
};

const editTask = (e) => {
  const task = e.currentTarget.parentElement;
  const input = task.querySelector(".text-task");
  task.classList.toggle("edited");
  input.readOnly = !input.readOnly;
  saveData();
};

const deleteTask = (e) => {
  const task = e.currentTarget.parentElement;
  task.remove();
  saveData();
};

const buttons = [
  {
    buttonClassName: "complete btn",
    iconClassName: "icon fas fa-check",
    action: completeTask,
  },
  {
    buttonClassName: "move-up btn",
    iconClassName: "icon fas fa-angle-up",
    action: moveUp,
  },
  {
    buttonClassName: "move-down btn",
    iconClassName: "icon fas fa-angle-down",
    action: moveDown,
  },
  {
    buttonClassName: "edit btn",
    iconClassName: "icon fas fa-marker",
    action: editTask,
  },
  {
    buttonClassName: "delete btn",
    iconClassName: "icon fas fa-trash-alt",
    action: deleteTask,
  },
];

export { buttons };
