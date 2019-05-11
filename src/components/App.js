import React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'
import {
  handleInitialData
} from '../actions/shared'

class App extends React.Component {
  componentDidMount () {
    const { store } = this.props

    store.dispatch(handleInitialData())
    store.subscribe(() => this.forceUpdate())
  }
  render() {
    const { store } = this.props
    const { todos, goals, loading } = store.getState()
    if (loading === true) {
      return <h3>Loading</h3>
    }
    return (
      <div>
        <ConnectedTodos todos={todos} store={this.props.store} />
        <ConnectedGoals goals={goals} store={this.props.store} />
      </div>
    )
  }
}
export default connect((
  state) => ({
    loading: state.loading
  }))(App)