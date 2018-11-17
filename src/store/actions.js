export default {
    infoClose(store) {
        window.setTimeout(() => {
            store.commit('infoTrigger');
        }, 4000);
    },
    saveTasksToLocalStorage(store) {
        let tasks = store.state.tasks;
        let tasksJSON = JSON.stringify(tasks)
        localStorage.setItem('tasks', tasksJSON);
    },
    getTasksFromLocalStorage(store) {
        if (localStorage.getItem('tasks') !== null) {
            let tasksJSON = localStorage.getItem('tasks');
            let tasks = JSON.parse(tasksJSON);
            store.commit('loadTasksFromLocalStorage', tasks)
        }
    },
    saveNameToLocalStorage(store) {
        let name = store.state.name;
        let nameJSON = JSON.stringify(name)
        console.log(nameJSON)
        localStorage.setItem('name', nameJSON);
    },
    getNameFromLocalStorage(store) {
        if (localStorage.getItem('name') !== null) {
            let nameJSON = localStorage.getItem('name');
            let name = JSON.parse(nameJSON);
            store.commit('setName', name)
        }
    }
}