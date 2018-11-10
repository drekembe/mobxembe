import React from 'react'
import { ReactComponent as Loader } from './bars.svg'
import s from './style.module.scss'
import PropTypes from 'prop-types'
import classnames from 'classnames'

/**
 * A component that displays a loading indicator.
 */
export default class Loading extends React.PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }
  static defaultProps = {
    size: 'medium',
  }
  render() {
    return (
      <div className={classnames(s.container, this.props.className)}>
        <Loader className={classnames(s.icon, s[this.props.size])} />
      </div>
    )
  }
}
