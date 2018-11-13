import { observable, action, decorate } from 'mobx'

class RouterStore {
  location = {}
  match = {}
  history = {}

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  init = () => {}

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
  init: action,
})

export default RouterStore
