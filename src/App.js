import React, { Component } from 'react'
import './App.scss'
import main from './store/main'
import other from './store/other'
import { observer, inject, Provider } from 'mobx-react'
import { configure } from 'mobx'
import Loading from 'Loading'
import DevTools from 'mobx-react-devtools'

configure({ enforceActions: 'always' })

let Person = ({ name, surname, photo }) => (
  <div className="person">
    <img src={photo} alt="person" />
    <div>
      {name} {surname}
    </div>
  </div>
)
Person = observer(Person) // don't actually need this because observable.shallow is used for the list

let PersonList = ({ people }) => (
  <React.Fragment>
    {people.length > 0 ? (
      people.map(obj => <Person key={obj.id} {...obj} />)
    ) : (
      <React.Fragment>No people matching criteria</React.Fragment>
    )}
  </React.Fragment>
)
PersonList = observer(PersonList) // don't actually need this because observable.shallow is used for the list

class Main extends Component {
  setViewing = ({ target }) => this.props.mainStore.setViewing(target.value)
  setFilter = ({ target }) => {
    this.props.mainStore.setFilter(target.value)
  }
  render() {
    const { mainStore, otherStore } = this.props
    return (
      <Provider mainStore={main}>
        <div className="App">
          <div className="container">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
              {' '}
              length:
              <input type="number" value={mainStore.viewing} min={0} onChange={this.setViewing} />
            </div>
            <div>
              {' '}
              filter:
              <input type="text" value={mainStore.filter} onChange={this.setFilter} />
            </div>
            <div>
              {' '}
              zoomonId:
              <input
                type="number"
                value={mainStore.zoomon.id}
                min={0}
                onChange={e => mainStore.setZoomonId(e.target.value)}
              />
            </div>
            <div>
              {mainStore.zoomon.error ||
                (mainStore.zoomon.loading ? <Loading /> : mainStore.zoomon.object.title)}
            </div>
            <p>{mainStore.advice}</p>
            <div className="personContainer">
              {mainStore.loading ? (
                <Loading size="large" />
              ) : (
                <PersonList people={mainStore.first} />
              )}
            </div>
            <div>{otherStore.advice}</div>
          </div>
          <DevTools />
        </div>
      </Provider>
    )
  }
}

const RealMain = inject('mainStore', 'otherStore')(observer(Main))

class App extends Component {
  render() {
    return (
      <Provider mainStore={main} otherStore={other}>
        <RealMain />
      </Provider>
    )
  }
}

export default App
