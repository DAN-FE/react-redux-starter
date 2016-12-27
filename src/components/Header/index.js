import Header from './Header'
import headerTheme from './Header.scss'
import { themr } from 'react-css-themr'

const ThemedHeader = themr('RTAPPHeader', headerTheme)(Header);

export default ThemedHeader
