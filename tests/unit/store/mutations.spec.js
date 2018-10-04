import mutations from '@/store/mutations.js'

var state = {
  showModal: false,
  showUncompleted: false,
  name: String,
  errorMsg: String,
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
    }
  ]
}

test('modal toggle', () => {
  mutations.modalTrigger(state)
  expect(state.showModal).toBe(true)
})

test('remove task', () => {
  mutations.removeTask(state, 1)
  expect(state.tasks.length).toBe(1)
})

test('done task', () => {
  const state = {
    tasks: [
      {
        title: 'task',
        id: 1,
        completed: true
      }
    ]

  }
  mutations.doneTask(state, 1)
  expect(state.tasks[0].completed).toBe(false)
})


test('error message', () => {
  let msg = 'error message'
  mutations.errorMsg(state, msg)
  expect(state.errorMsg).toBe(msg)
})

test('modify task', () => {
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
  expect(state.tasks[1].id).toBe(3)
})


test('set name', () => {
  let name = 'John'
  mutations.setName(state, name)
  expect(state.name).toBe(name)
})


test('add new task', () => {
  // new tasks object
  let task = {
    title: 'task 3',
    id: 3,
    desc: 'new task',
    completed: false
  }
  mutations.addNewTask(state, task)
  expect(state.tasks[2].id).toBe(3)
})


test('update tasks array', () => {
  // new tasks array
  let tasks = [{
    title: 'task 3',
    id: 3,
    desc: 'new task',
    completed: false
  }
]
  mutations.updateTasks(state, tasks)
  expect(state.tasks.length).toBe(1)
})

test('view', () => {
  mutations.viewTrigger(state, true)
  expect(state.showUncompleted).toBe(true)
})
