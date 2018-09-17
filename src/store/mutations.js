export default {
    addNewTask: (state, task) => state.tasks = state.tasks.concat([task]),
    modalTrigger: (state) => state.showModal = !state.showModal,
    viewTrigger: (state, val) => state.showUncompleted = val,
    removeTask: (state, id) => {
        let numberId = id * 1;
        let taskIndex = state.tasks.findIndex(x => x.id == numberId);
        console.log(taskIndex)
        state.tasks.splice(taskIndex, 1);
    },
    doneTask(state, id) {
        let numberId = id * 1;
        let taskIndex = state.tasks.findIndex(x => x.id == numberId);
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed
    },
    infoTrigger: (state) => state.showInfo = !state.showInfo,
    errorMsg: (state, msg) => state.errorMsg = msg,
    loadTasksFromLocalStorage: (state, tasks) => state.tasks = tasks,
    editModalTrigger: (state) => state.showEditModal = !state.showEditModal,
    setEditedTaskIndex: (state, index) => state.editedTaskIndex = index,
    modifedTask: (state,modifyConfig) => { state.tasks.splice(modifyConfig.index, 1, modifyConfig.modifedTask) },
    updateTasks: (state, updatedTasks) => state.tasks = updatedTasks,
    welcomeTrigger: (state) => state.welcome = !state.welcome,
    setName: (state, val) => state.name = val
}