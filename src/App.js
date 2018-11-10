import React, { Component } from 'react'
import './App.scss'
import main from './store/main'
import { observer, inject, Provider } from 'mobx-react'
import { configure } from 'mobx'
configure({ enforceActions: 'observed' })

class Main extends Component {
  setViewing = ({ target }) => this.props.mainStore.setViewing(target.value)
  setFilter = ({ target }) => {
    this.props.mainStore.setFilter(target.value)
  }
  render() {
    const { mainStore } = this.props
    return (
      <Provider mainStore={main}>
        <div className="App">
          <div className="container">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <input type="number" value={mainStore.viewing} onChange={this.setViewing} />
            <input type="text" value={mainStore.filter} onChange={this.setFilter} />
            <p>
              Count is {mainStore.count}. Click the butan{' '}
              <button onClick={mainStore.increaseCount}>click</button>. Double, it's{' '}
              {mainStore.howMuch}.
            </p>
            {mainStore.loading ? (
              <div>Loading</div>
            ) : (
              mainStore.first.map(obj => <div key={obj.id}>{obj.title}</div>)
            )}
          </div>
        </div>
      </Provider>
    )
  }
}

const RealMain = inject('mainStore')(observer(Main))

class App extends Component {
  render() {
    return (
      <Provider mainStore={main}>
        <RealMain />
      </Provider>
    )
  }
}

export default App
