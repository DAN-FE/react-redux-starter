import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/counter'
import { globalErrorAction, globalLoadingAction } from '../../../store/global'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Counter from '../components/Counter'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync,
  dispatchGlobalError: globalErrorAction,
  dispatchGlobalLoading: globalLoadingAction
}

const mapStateToProps = (state) => ({
  counter : state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
