const saveData = () => {
  const allTasks = document.querySelectorAll(".text-task");
  const list = [];
  allTasks.forEach((task) => {
    list.push(task.value);
  });
  localStorage.setItem("tasks", JSON.stringify(list));
};

const getData = (createTask) => {
  const textTasks = localStorage.getItem("tasks");
  if (textTasks) {
    const allTasks = JSON.parse(textTasks);
    allTasks.forEach((textTask) => {
      createTask(textTask);
    });
  }
};

export { saveData, getData };
