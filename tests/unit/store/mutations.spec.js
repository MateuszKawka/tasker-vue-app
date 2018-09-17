import mutations from '@/store/mutations.js'

test('test state showModal trigger', () => {
  const state = {
    showModal: false
  }
  mutations.modalTrigger(state)
  expect(state.showModal).toBe(true)
})