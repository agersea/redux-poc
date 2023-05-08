import store from '../store'

describe('listings state', () => {
  it('should init with a null active property', () => {
    const s = store.getState().listings
    expect(s.active).toBeNull()
  })
  it('should init with an empty array', () => {
    const s = store.getState().listings
    expect(s.list.length).toBe(0)
  })
})