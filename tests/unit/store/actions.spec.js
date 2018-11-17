import actions from '@/store/actions.js';

jest.useFakeTimers();

// simulation local storage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock;

var store = {
  state: {
    showInfo: true,
    name: 'name',
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
}

describe('store actions tests', () => {
  test('actions--infoClose', () => {
    actions.infoClose()
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 4000);
  })
  
  test('actions--saveTasksToLocalStorage', () => {
    actions.saveTasksToLocalStorage(store)
    expect(localStorage.tasks).toEqual(JSON.stringify(store.state.tasks))
  })
  
  test('actions--saveNameToLocalStorage', () => {
    actions.saveNameToLocalStorage(store)
    expect(localStorage.name).toEqual(JSON.stringify(store.state.name))
  })
});