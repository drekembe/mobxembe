import { flow, observable, computed, decorate, action } from 'mobx'

const tm = t =>
  new Promise((res, rec) => {
    setTimeout(res, t)
  })

class W {
  /**
   * Observables 👁
   */
  loading = true
  count = 0
  todos = []
  viewing = 10
  filter = ''

  /**
   * Actions 🚀
   */
  init = flow(function*() {
    const [res, ,] = yield Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos'),
      tm(1000),
    ])
    console.log(res)
    const json = yield res.json()
    this.todos.replace(json)
    this.loading = false
  })

  setViewing = n => {
    this.viewing = n
  }
  setFilter = w => {
    this.filter = w
  }
  increaseCount = () => {
    this.count = this.count + 1
  }

  /**
   * Computed 💻
   */
  get first() {
    return this.todos.filter(({ title }) => title.includes(this.filter)).slice(0, this.viewing)
  }
  get howMuch() {
    return this.count * 2
  }
}

decorate(W, {
  loading: observable,
  count: observable,
  todos: observable,
  viewing: observable,
  filter: observable,
  increaseCount: action,
  setViewing: action,
  setFilter: action,
  init: action,
  howMuch: computed,
  first: computed,
})

const w = new W()
w.init()

export default w
