import React from 'react'

const blue = '#48C6FC'

const label = {
  padding: 10,
  border: '1px solid',
  borderColor: blue,
  borderRadius: 7,
  color: blue
}

const styles = {
  label,
  labelChecked: {
    ...label,
    background: blue,
    color: 'white'
  },
  checkbox: {
    display: 'none'
  },
  container: {
    height: 40,
    padding: 5,
    display: 'inline-flex'
  }
}

export default ({ children, input, meta: { touched, error } }) => {
  const showError = touched && error;

  return (
    <div style={styles.container}>
      <label
        style={input.value ? styles.labelChecked : styles.label}
        htmlFor={`Checkbox_${input.name}`}
      >
        <input
          {...input}
          id={`Checkbox_${input.name}`}
          style={styles.checkbox}
          type="checkbox"
        />
        <span style={styles.text}>{children}</span>
      </label>
      {showError &&
        <span style={styles.error}>{error}</span>
      }
    </div>
  )
}
