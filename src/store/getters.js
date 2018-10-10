export default {
    numberOfTasks: state => state.tasks.filter((item) => item.completed === false).length + 1,
    listOfTask: state => state.tasks.filter((item) => item.completed === false),
    listOfCompletedTasks: state => state.tasks.filter((item) => item.completed === true),
    numberOfCompletedTasks: state => state.tasks.filter((item) => item.completed === true).length,
    getTaskIndexById: (state) => (id) => state.tasks.findIndex(x => x.id == id),
    getTaskByIndex: (state) => (index) => state.tasks[index]
}