import getters from '@/store/getters.js';

var state = {
    tasks: [{
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

describe('store getters tests', () => {
    test('getters--numberOfTasks', () => {
        expect(getters.numberOfTasks(state)).toEqual(2)
    })

    test('getters--getTaskIndexById', () => {
        expect(getters.getTaskIndexById(state)(3)).toEqual(2)
    })

    test('getters--getTaskByIndex', () => {
        expect(getters.getTaskByIndex(state)(0).id).toEqual(1)
    })
});