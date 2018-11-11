import {
  flow,
  observable,
  computed,
  decorate,
  //action, reaction
} from 'mobx'

import main from 'store/main'

class OtherStore {
  boo = 'yoohoo'
  advice = ''
  init = flow(function*(boo) {
    const res = yield fetch('https://api.adviceslip.com/advice')
    const json = yield res.json()
    this.advice = json.slip.advice
    this.boo = boo
    return this
  })
  get mainFilter() {
    return main.filter + '!'
  }
}

decorate(OtherStore, {
  boo: observable,
  advice: observable,
  mainFilter: computed,
})

export default new OtherStore().init('hoho')
