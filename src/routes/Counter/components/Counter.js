import React from 'react'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
    <button className='btn btn-default' onClick={
        (e) => {
            props.dispatchGlobalError('test')
        }
    }>
      Global Error
    </button> 
    <button className='btn btn-default' onClick={
        (e) => {
            props.dispatchGlobalLoading(true)
        }
    }>
      loading
    </button> 
  </div>
)

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired,
  dispatchGlobalError  : React.PropTypes.func.isRequired,
  dispatchGlobalLoading  : React.PropTypes.func.isRequired
}

export default Counter
