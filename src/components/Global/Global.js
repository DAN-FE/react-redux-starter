import React from 'react'
import Snackbar from 'react-toolbox/lib/snackbar'

import { connect } from 'react-redux'
import { globalErrorAction } from '../../store/global'
import LoadigMask from '../LoadingMask'

let Global = (props) => {
    const err = props.error
    const handleClick = () => {
        props.dispatchGlobalError(null)
    }
    let loading = null
    if (props.loading) {
        loading = <LoadigMask />
    }
    
    const component = (
        <div>
            {loading}
            {props.children}
            <Snackbar
                action='关闭'
                active={err != null}
                label={err}
                timeout={5000}
                onClick={handleClick}
                onTimeout={handleClick}
                type='cancel'
            />
        </div>
    )

    return component
}

const mapDispatchToProps = {
    dispatchGlobalError: globalErrorAction
}

const mapStateToProps = (state) => ({
  error: state.global.error,
  loading: state.global.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Global)

