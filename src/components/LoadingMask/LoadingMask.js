import React from 'react'
import ProgressBar from 'react-toolbox/lib/progress_bar'

export const LoadingMask = (props) => {
  const { theme } = props

  return (
    <div className={props.theme.loadingMask}>
        <div style={{overflow:'hidden', width: '60px', height: '60px'}} className={props.theme.loader}>
            <ProgressBar type='circular' mode='indeterminate' multicolor />
        </div>
    </div>
  )
}

export default LoadingMask
