import { flow, observable, computed, decorate, action, reaction } from 'mobx'
import mainStore from 'store/main'
import uuid from 'uuid/v4'

const wait = delay =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })

class MessageStore {
  messageMap = new Map()

  pushMessage = flow(function*(message, duration = 5000) {
    const id = uuid()
    this.messageMap.set(id, message)
    yield wait(duration)
    this.messageMap.delete(id)
  })

  clearMessages = () => {
    this.messageMap.clear()
  }

  get messages() {
    return Array.from(this.messageMap.values())
  }

  todoReaction = reaction(
    () => mainStore.todo.object,
    todo => this.pushMessage(`fetched todo with id ${todo.id}`)
  )
}

decorate(MessageStore, {
  messageMap: observable,
  pushMessage: action.bound,
  clearMessages: action,
  messages: computed,
})

export default new MessageStore()
