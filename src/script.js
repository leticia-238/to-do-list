import { buttons } from "./modules/buttons.mjs";
import { saveData, getData } from "./modules/saveTodoList.mjs";

const tasks = document.querySelector(".tasks");
const buttonAddNewTask = document.querySelector(".add");
const inputTextTask = document.querySelector("#new-task");

const enterKeyEvent = (element, action) => {
  element.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      action();
    }
  });
};

const taskElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
};

const createButton = ({ buttonClassName, iconClassName, action }) => {
  const button = taskElement("button", buttonClassName);
  const icon = taskElement("i", iconClassName);
  button.addEventListener("click", action);
  button.appendChild(icon);
  return button;
};

const createInput = (text) => {
  const input = taskElement("input", "text-task");
  input.value = text;
  input.readOnly = true;
  enterKeyEvent(input, () => {
    input.parentElement.classList.remove("edited");
    input.readOnly = true;
    saveData();
  });
  return input;
};

const createTask = (value) => {
  const task = taskElement("div", "task field");
  const [btn1, ...others] = buttons;
  task.appendChild(createButton(btn1));
  task.appendChild(createInput(value));
  others.forEach((button) => {
    task.appendChild(createButton(button));
  });
  tasks.appendChild(task);
};

const addNewTask = () => {
  if (inputTextTask.value.trim().length) {
    createTask(inputTextTask.value);
    saveData();
  }
};

buttonAddNewTask.addEventListener("click", addNewTask);
enterKeyEvent(inputTextTask, addNewTask);

window.onload = () => {
  getData(createTask);
};
