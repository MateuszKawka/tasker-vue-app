import mutations from '@/store/mutations.js'

var state = {
  showModal: false,
  showUncompleted: false,
  name: String,
  errorMsg: String,
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
    }
  ]
}


describe('store mutations tests', () => {
  beforeEach(() => {
    state.tasks = [{
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
      }
    ]
  });


  test('mutations--modalTrigger', () => {
    mutations.modalTrigger(state)
    expect(state.showModal).toBeTruthy()
  })

  test('mutations--removeTask', () => {
    mutations.removeTask(state, 1)
    expect(state.tasks).toHaveLength(1)
  })

  test('mutations--doneTask', () => {
    mutations.doneTask(state, 1)
    console.log(state.tasks[0].completed)
    expect(state.tasks[0].completed).toBeTruthy()
  })

  test('mutations--errorMsg', () => {
    let msg = 'error message'
    mutations.errorMsg(state, msg)
    expect(state.errorMsg).toBe(msg)
  })

  test('mutations--modifedTask', () => {
    // edited tasks object
    let task = {
      title: 'task 3',
      id: 3,
      desc: 'edited task',
      completed: false
    }
    let modifyConfig = {
      index: 1,
      modifedTask: task
    };
    mutations.modifedTask(state, modifyConfig)
    expect(state.tasks[1].id).toEqual(3)
  })


  test('mutations--setName', () => {
    let name = 'John'
    mutations.setName(state, name)
    expect(state.name).toBe(name)
  })


  test('mutations--addNewTask', () => {
    // new tasks object
    let task = {
      title: 'task 3',
      id: 3,
      desc: 'new task',
      completed: false
    }
    mutations.addNewTask(state, task)
    expect(state.tasks[2].id).toEqual(3)
  })

  test('mutations--updateTasks', () => {
    // new tasks array
    let tasks = [{
      title: 'task 3',
      id: 3,
      desc: 'new task',
      completed: false
    }]
    mutations.updateTasks(state, tasks)
    expect(state.tasks).toHaveLength(1)
  })

  test('mutations--viewTrigger', () => {
    mutations.viewTrigger(state, true)
    expect(state.showUncompleted).toBeTruthy()
  })
});