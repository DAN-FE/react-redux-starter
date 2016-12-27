import LoadingMask from './LoadingMask'
import loadingMaskTheme from './LoadingMask.scss'
import { themr } from 'react-css-themr'

const ThemedLoadingMask = themr('RTAPPLoadingMask', loadingMaskTheme)(LoadingMask)

export default ThemedLoadingMask
