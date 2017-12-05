import React from 'react'

// import classes from './index.scss'
const classes = {}

const Radio = ({
  label,
  className,
  style,
  containerStyle,
  labelStyle,
  checkedClassName,
  options,
  input,
  meta: { touched, error } }) => {
  const showError = touched && error

  return (
    <div style={{
      width: '100%'
    }}>
      <label
        style={labelStyle || undefined}
      >
        {label}
      </label>
      <div className={classes.radioContainer} style={containerStyle}>
        {options.map((option) => {
          const radioId = `Radio_${input.name}_${option.value}`
          const isChecked = input.value === option.value
          let labelClass = className

          if (!className && !checkedClassName) {
            labelClass = isChecked ? classes.labelChecked : classes.label
          }

          return (
            <label
              key={radioId}
              htmlFor={radioId}
              className={labelClass}
              onClick={input.onClick}
              style={style}
            >
              <input
                {...input}
                id={radioId}
                type="radio"
                value={option.value}
                name={input.name}
                checked={input.value}
                className={isChecked ? classes.checkboxChecked : classes.checkbox}
              />
              {option.icon &&
                <div>
                  <img
                    style={{filter: isChecked ? 'invert()' : 'none'}}
                    src={option.icon}
                  />
                </div>
              }
              <span
                className={classes.text}
                style={(option.icon && !style) ? {flexGrow: 1, textAlign: 'center' } : undefined}
              >
                {option.label}
              </span>
            </label>
          )
        })}
      </div>
      {showError &&
        <span className={classes.error}>{error}</span>
      }
    </div>
  )
}

// Radio.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.element,
//     PropTypes.string,
//   ]),
//   input: PropTypes.object,
//   meta: PropTypes.object,
//   className: PropTypes.string,
//   options: PropTypes.array,
//   containerStyle: PropTypes.object,
//   labelStyle: PropTypes.object
// }

export default Radio
