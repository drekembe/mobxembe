import { observable, action, decorate } from 'mobx'

class RouterStore {
  location = {}
  match = {}
  history = {}

  setRoute = (location, match, history) => {
    this.location = location
    this.match = match
    this.history = history
  }
}

decorate(RouterStore, {
  location: observable,
  match: observable,
  history: observable,
  setRoute: action,
})

export default new RouterStore()
