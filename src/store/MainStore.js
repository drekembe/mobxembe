import { flow, observable, computed, decorate, action, reaction } from 'mobx'
import debounce from 'lodash/debounce'
import orderBy from 'lodash/orderBy'
import uuid from 'uuid/v4'

class MainStore {
  /**
   * Observables 👁
   */
  loading = true
  people = []
  viewing = 30
  orderBy = 'id'
  orderDirection = 'asc'
  filter = ''
  todo = {
    id: 1,
    object: {},
    error: false,
    loading: false,
  }

  /**
   * Actions 🚀
   */
  init = () => {
    this.fetchTodo()
    this.fetchPeople()
  }

  fetchPeople = flow(function*() {
    this.loading = true
    const res = yield fetch(
      'https://uinames.com/api/?region=bosnia%20and%20herzegovina&amount=150&ext'
    )
    const json = yield res.json()
    this.people.replace(json.map(x => ({ ...x, id: uuid() })))
    this.loading = false
  })

  fetchTodo = flow(function*() {
    try {
      this.todo.loading = true
      const res = yield fetch(`https://jsonplaceholder.typicode.com/todos/${this.todo.id}`)
      if (res.status !== 200) {
        throw res
      }
      this.todo.object = yield res.json()
      this.todo.error = false
    } catch (err) {
      this.todo.error = true
    } finally {
      this.todo.loading = false
    }
  })

  fetchTodoDebounced = debounce(this.fetchTodo, 1000)

  setViewing = n => {
    this.viewing = n
  }
  setFilter = w => {
    this.filter = w
  }
  setTodoId = w => {
    this.todo.id = w
  }
  setOrderBy = order => {
    this.orderBy = order
  }
  toggleDirection = () => {
    this.orderDirection = this.orderDirection === 'asc' ? 'desc' : 'asc'
  }

  /**
   * Computed 💻
   */

  get filtered() {
    return this.people.filter(({ name, surname }) =>
      `${name} ${surname}`.toLowerCase().includes(this.filter.toLowerCase())
    )
  }

  get ordered() {
    return orderBy(this.filtered, [this.orderBy], [this.orderDirection])
  }

  get sliced() {
    return this.ordered.slice(0, this.viewing)
  }

  /** Reactions */
  r = reaction(() => this.todo.id, id => this.fetchTodoDebounced(), {
    // delay: 1000, <-- using lodash debounce cause this actually throttles
    name: 'fetch todo reaction',
  })
}

decorate(MainStore, {
  loading: observable,
  people: observable.shallow,
  viewing: observable,
  filter: observable,
  todo: observable,
  orderBy: observable,
  orderDirection: observable,

  setViewing: action,
  setFilter: action,
  init: action,
  fetchPeople: action.bound,
  fetchTodo: action.bound,
  setTodoId: action,
  setOrderBy: action,
  toggleDirection: action,

  ordered: computed,
  filtered: computed,
  sliced: computed,
})

export default MainStore
