import getters from '@/store/getters.js';

var state = {
    tasks: [
        {
            title: 'task',
            id: 1,
            desc: 'task description',
            completed: false
        },
        {
            title: 'task 2',
            id: 2,
            desc: 'second task description',
            completed: true
        },
        {
            title: 'task 3',
            id: 3,
            desc: 'third task description',
            completed: false
        }
    ]
}

test('getters--numberOfTasks', () => {
    expect(getters.numberOfTasks(state)).toBe(3)
})

test('getters--listOfTask', () => {
    expect(getters.listOfTask(state).length).toBe(2)
})

test('getters--listOfCompletedTasks', () => {
    expect(getters.listOfCompletedTasks(state).length).toBe(1)
})

test('getters--getTaskIndexById', () => {
    expect(getters.getTaskIndexById(state)(3)).toBe(2)
})

test('getters--getTaskByIndex', () => {
    expect(getters.getTaskByIndex(state)(0).id).toBe(1)
})


