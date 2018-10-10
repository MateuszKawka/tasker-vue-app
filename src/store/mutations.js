export default {
    // triggers
    infoTrigger: state => state.showInfo = !state.showInfo,
    modalTrigger: state => state.showModal = !state.showModal, 
    editModalTrigger: state => state.showEditModal = !state.showEditModal,
    welcomeTrigger: state => state.welcome = !state.welcome,
    settingsTrigger: state => state.showSettings = !state.showSettings,
    viewTrigger: (state, val) => state.showUncompleted = val,

    // tasks mutations
    addNewTask: (state, task) => state.tasks = state.tasks.concat([task]),
    removeTask: (state, id) => { 
        let numberId = id * 1;
        let taskIndex = state.tasks.findIndex(x => x.id == numberId);
        state.tasks.splice(taskIndex, 1);
    },
    doneTask(state, id) { 
        let numberId = id * 1;
        let taskIndex = state.tasks.findIndex(x => x.id == numberId);
        console.log(taskIndex)  
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed
    },

    errorMsg: (state, msg) => state.errorMsg = msg,
    loadTasksFromLocalStorage: (state, tasks) => state.tasks = tasks,
    setEditedTaskIndex: (state, index) => state.editedTaskIndex = index,
    modifedTask: (state,modifyConfig) => { state.tasks.splice(modifyConfig.index, 1, modifyConfig.modifedTask) },
    updateTasks: (state, updatedTasks) => state.tasks = updatedTasks,
    setName: (state, val) => state.name = val,
}