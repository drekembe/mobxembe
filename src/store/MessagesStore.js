import { flow, observable, computed, decorate, action, reaction } from 'mobx'
import uuid from 'uuid/v4'

const wait = delay =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })

class MessagesStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  init = () => {
    reaction(
      () => this.rootStore.mainStore.todo.object,
      todo => this.pushMessage(`Fetched todo with ID: ${todo.id}`)
    )
    reaction(
      () => this.rootStore.mainStore.people.map(({ id }) => id),
      people => this.pushMessage(`Got new ${people.length} people`)
    )
  }

  messageMap = new Map()

  pushMessage = flow(function*(message, duration = 5000) {
    const id = uuid()
    this.messageMap.set(id, message)
    yield wait(duration)
    this.messageMap.delete(id)
  })

  deleteMessage = id => {
    this.messageMap.delete(id)
  }

  clearMessages = () => {
    this.messageMap.clear()
  }

  get messages() {
    return Array.from(this.messageMap)
      .map(([id, text]) => ({ id, text }))
      .reverse()
  }
}

decorate(MessagesStore, {
  messageMap: observable,
  pushMessage: action.bound,
  clearMessages: action.bound,
  deleteMessage: action.bound,
  init: action,
  messages: computed,
})

export default MessagesStore
