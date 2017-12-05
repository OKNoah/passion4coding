import React from 'react'

const styles = {}

export default ({ children, input, meta: { touched, error } }) => {
  const showError = touched && error;

  return (
    <div>
      <label
        style={input.value ? styles.labelChecked : styles.label}
        htmlFor={`Checkbox_${input.name}`}
      >
        <input
          {...input}
          id={`Checkbox_${input.name}`}
          style={input.value ? styles.checkboxChecked : styles.checkbox}
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
