import React, { Component } from 'react'
import './App.scss'
import main from './store/main'
import other from './store/other'
import { observer, inject, Provider } from 'mobx-react'
import { configure } from 'mobx'
import Loading from 'Loading'
import DevTools from 'mobx-react-devtools'
import posed, { PoseGroup } from 'react-pose'

configure({ enforceActions: 'always' })

let Box = posed.div({
  visible: { scaleX: 1 },
  hidden: { scaleX: 0 },
})

const Boo = posed.div({
  enter: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
})

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
    <PoseGroup>
      {people.length > 0 ? (
        people.map(obj => (
          <Boo key={obj.id}>
            <Person {...obj} />
          </Boo>
        ))
      ) : (
        <Boo key="nope">No people matching criteria</Boo>
      )}
    </PoseGroup>
  </React.Fragment>
)
PersonList = observer(PersonList)

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
              <button onClick={mainStore.fetchPeople}>new ppl</button>
            </div>
            <PoseGroup>
              {mainStore.loading ? (
                <Boo key="l">
                  <Loading size="large" />
                </Boo>
              ) : (
                <Boo key="w" className="personContainer">
                  <PersonList people={mainStore.first} />
                </Boo>
              )}
            </PoseGroup>
            <div>{otherStore.advice}</div>
            <div>
              {' '}
              enter quote id to fetch:
              <input
                type="number"
                value={mainStore.zoomon.id}
                min={0}
                onChange={e => mainStore.setZoomonId(e.target.value)}
              />
            </div>
            <div>
              <PoseGroup>
                {mainStore.zoomon.error ||
                  (mainStore.zoomon.loading ? (
                    <Boo key="l">
                      <Loading />
                    </Boo>
                  ) : (
                    <Boo key="m">{mainStore.zoomon.object.title}</Boo>
                  ))}
              </PoseGroup>
            </div>
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
