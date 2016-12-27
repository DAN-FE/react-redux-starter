import React, { Component, PropTypes } from 'react'
import { hashHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import Global from '../components/Global'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
        <Provider store={store}>
            <Global>
                <Router history={hashHistory} children={routes} />
            </Global>
        </Provider>
    )
  }
}

export default AppContainer
