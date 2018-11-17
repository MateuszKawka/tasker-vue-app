export default {
    numberOfTasks: state => state.tasks.filter((item) => item.completed === false).length,
    numberOfCompletedTasks: state => state.tasks.filter((item) => item.completed === true).length,
    getTaskIndexById: (state) => (id) => state.tasks.findIndex(x => x.id == id),
    getTaskByIndex: (state) => (index) => state.tasks[index]
}