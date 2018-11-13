import React, { Component } from 'react'
import {
  Router,
  Route,
  //Link
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.scss'
import RootStore from 'store/RootStore'
import { observer, inject, Provider } from 'mobx-react'
import { configure } from 'mobx'
import Loading from 'Loading'
import DevTools from 'mobx-react-devtools'
import posed, { PoseGroup } from 'react-pose'
import PersonList from 'components/PersonList'
import Messages from 'components/Messages'

import Columns from 'react-bulma-components/lib/components/columns'
import { Field, Label, Control, Input, Select } from 'react-bulma-components/lib/components/form'
import Button from 'react-bulma-components/lib/components/button'

configure({ enforceActions: 'observed' })

const Boo = posed.div({
  enter: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
})

class Main extends Component {
  setViewing = ({ target }) => this.props.mainStore.setViewing(target.value)
  setFilter = ({ target }) => {
    this.props.mainStore.setFilter(target.value)
  }
  setTodoId = ({ target }) => this.props.mainStore.setTodoId(target.value)
  setOrderBy = ({ target }) => {
    this.props.mainStore.setOrderBy(target.value)
  }
  render() {
    const { mainStore } = this.props
    return (
      <React.Fragment>
        <Messages />
        <Columns multiline={false} className="mainWrapper is-marginless">
          <Columns.Column className="is-one-quarter is-paddingless">
            <div className="sidebar">
              <Field>
                <Label>Filter</Label>
                <Control>
                  <Input type="text" value={mainStore.filter} onChange={this.setFilter} />
                </Control>
              </Field>
              <Label>Order by</Label>
              <Field className="is-grouped">
                <Control className="is-expanded">
                  <Select
                    value={mainStore.orderBy}
                    onChange={this.setOrderBy}
                    className="is-fullwidth">
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="surname">Surname</option>
                  </Select>
                </Control>
                <Control>
                  <Button onClick={mainStore.toggleDirection}>
                    {mainStore.orderDirection === 'asc' ? '👆' : '👇'}
                  </Button>
                </Control>
              </Field>
              <Field>
                <Label>Length</Label>
                <Control>
                  <Input
                    type="number"
                    value={mainStore.viewing.toString()}
                    min={0}
                    onChange={this.setViewing}
                  />
                </Control>
              </Field>
            </div>
          </Columns.Column>
          <Columns.Column className="main">
            <PoseGroup animateOnMount={true}>
              {mainStore.loading ? (
                <Boo key="loading">
                  <Loading size="large" />
                </Boo>
              ) : (
                <Boo key="aha">
                  <PersonList people={mainStore.sliced} />
                  <Button color="primary" onClick={mainStore.fetchPeople}>
                    Fetch new
                  </Button>
                  <div>
                    {' '}
                    enter todo id to fetch:
                    <input
                      type="number"
                      value={mainStore.todo.id}
                      min={0}
                      onChange={this.setTodoId}
                    />
                  </div>
                  <div>
                    {mainStore.todo.error ? (
                      'error'
                    ) : (
                      <PoseGroup>
                        {mainStore.todo.loading ? (
                          <Boo key="l">
                            <Loading />
                          </Boo>
                        ) : (
                          <Boo key="m">{mainStore.todo.object.title}</Boo>
                        )}
                      </PoseGroup>
                    )}
                  </div>
                </Boo>
              )}
            </PoseGroup>
          </Columns.Column>
        </Columns>
        <DevTools />
      </React.Fragment>
    )
  }
}

const RealMain = inject(({ rootStore }) => ({
  mainStore: rootStore.mainStore,
  routerStore: rootStore.routerStore,
  messagesStore: rootStore.messagesStore,
}))(observer(Main))

const history = createBrowserHistory()

const withRouterStore = store => WrappedComponent => {
  return class extends React.Component {
    componentWillMount() {
      store.setRoute(this.props.location, this.props.match, this.props.history)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const rootStore = new RootStore()
const routerStore = rootStore.routerStore
const App = () => (
  <Provider rootStore={rootStore}>
    <Router history={history}>
      <React.Fragment>
        <Route exact path="/" component={withRouterStore(routerStore)(RealMain)} />
        <Route exact path="/:id" component={withRouterStore(routerStore)(RealMain)} />
      </React.Fragment>
    </Router>
  </Provider>
)

export default observer(App)
