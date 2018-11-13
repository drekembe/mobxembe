import MainStore from './MainStore'
import RouterStore from './RouterStore'
import MessagesStore from './MessagesStore'

export default class RootStore {
  constructor() {
    this.mainStore = new MainStore(this)
    this.routerStore = new RouterStore(this)
    this.messagesStore = new MessagesStore(this)
    this.mainStore.init()
    this.routerStore.init()
    this.messagesStore.init()
  }
}
