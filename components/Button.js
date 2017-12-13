import React from 'react'
import Link from 'next/link'
import Icon from 'react-icons-kit'
import { power } from 'react-icons-kit/ionicons/power'

// type propTypes = {
//   children: ?String,
//   noSubmit: ?Boolean,
//   small: ?Boolean,
//   onClick: ?Object,
//   to: ?String,
//   icon: ?String,
//   style: ?Object,
//   primary: ?Boolean,
//   disabled: ?Boolean
// }

const Button = (props) => {
  const {
    children, noSubmit, small, onClick, to, icon, style, primary, disabled
  } = props

  const containerStyle = {
    display: 'flex',
    border: 'none',
    borderRadius: 7,
    padding: 10,
    ...primary ? {
      backgroundColor: '#5286FB',
      color: '#fff'
    } : {},
    ...disabled ? {
      opacity: 0.5
    } : {},
    ...style
  }

  const textStyle = {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }

  if (to) {
    return (
      <Link
        to={to}
        style={containerStyle}
      >
        {(icon || primary) &&
          <div>
            <img src={icon || primary} />
          </div>
        }
        {children}
      </Link>
    )
  }

  if (noSubmit) {
    return (
      <input
        className={containerStyle}
        type="button"
        value={children}
        onClick={onClick}
        style={containerStyle}
        disabled={disabled}
      />
    )
  }

  return (
    <button
      style={containerStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {(icon || primary) &&
        <Icon icon={power} />
      }
      <span style={textStyle}>
        {children}
      </span>
    </button>
  )
}

// Button.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.element,
//     PropTypes.string
//   ]),
//   noSubmit: PropTypes.func,
//   onClick: PropTypes.func,
//   small: PropTypes.bool,
//   to: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.object
//   ]),
//   icon: PropTypes.string,
//   style: PropTypes.object,
//   primary: PropTypes.bool,
//   disabled: PropTypes.bool
// }

export default Button
