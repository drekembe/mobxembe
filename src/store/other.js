import {
  flow,
  observable,
  computed,
  decorate,
  //action, reaction
} from 'mobx'

import main from 'store/main'

class Other {
  boo = 'yoohoo'
  advice = ''
  init = flow(function*(boo) {
    const res = yield fetch('https://api.adviceslip.com/advice')
    const json = yield res.json()
    this.advice = json.slip.advice
    this.boo = boo
  })
  get mainFilter() {
    return main.filter + '!'
  }
}

decorate(Other, {
  boo: observable,
  advice: observable,
  mainFilter: computed,
})

const o = new Other()
o.init('hoho')
export default o
