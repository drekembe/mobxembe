import { flow, observable, computed, decorate, action, reaction } from 'mobx'
import debounce from 'lodash/debounce'

import other from 'store/other'

const tm = t =>
  new Promise((res, rec) => {
    setTimeout(res, t)
  })

class W {
  /**
   * Observables 👁
   */
  loading = true
  people = []
  viewing = 20
  filter = ''
  zoomon = {
    id: 1,
    object: {},
    error: false,
    loading: false,
  }

  /**
   * Actions 🚀
   */
  init = flow(function*() {
    this.fetchZoom()
    const res = yield fetch('http://uinames.com/api/?region=united%20states&amount=200&ext')
    const json = yield res.json()
    this.people.replace(json.map((x, id) => ({ id, ...x })))
    this.loading = false
  })

  setViewing = n => {
    this.viewing = n
  }
  setFilter = w => {
    this.filter = w
  }
  setZoomonId = w => {
    this.zoomon.id = w
  }

  fetchZoom = flow(function*() {
    try {
      this.zoomon.loading = true
      const [res, ,] = yield Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/todos/${this.zoomon.id}`),
        tm(400),
      ])
      if (res.status !== 200) {
        throw res
      }
      this.zoomon.object = yield res.json()
      this.zoomon.error = false
    } catch (err) {
      this.zoomon.error = err
    } finally {
      this.zoomon.loading = false
    }
  })

  fetchZoomDebounced = debounce(this.fetchZoom, 1000)

  /**
   * Computed 💻
   */
  get first() {
    return this.people
      .filter(({ name, surname }) =>
        `${name} ${surname}`.toLowerCase().includes(this.filter.toLowerCase())
      )
      .slice(0, this.viewing)
  }

  get advice() {
    // we can easily use stuff from other stores, if we want
    return other.advice
  }

  /** Reactions */
  r = reaction(() => this.zoomon.id, id => this.fetchZoomDebounced(), {
    // delay: 1000, <-- using lodash debounce cause this actually throttles
    name: 'fetch zoom reaction',
  })
}

decorate(W, {
  loading: observable,
  people: observable.shallow,
  viewing: observable,
  filter: observable,
  zoomon: observable,

  setViewing: action,
  setFilter: action,
  init: action,
  fetchZoom: action,
  setZoomonId: action,

  advice: computed,
  first: computed,
})

const w = new W()
w.init()

export default w
