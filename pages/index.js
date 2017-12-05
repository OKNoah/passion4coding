// @flow

import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { isEmpty } from 'lodash'

import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
import categories from '../json/categories.json'
import verticals from '../json/verticals.json'
import courses from '../json/courses.json'

type Props = {};

export default class Index extends Component<Props> {
  componentDidMount () {
    if (document) {
      document.body.style.fontFamily = '-apple-system'
    }
  }

  submitHandler (values: ?Object) {
    const selectedCourses = values.courses && values.courses.map((course, index) => {
      if (course) {
        return courses[index]
      }
    }).filter(c => c)

    alert(`Selected:
    ${JSON.stringify(selectedCourses, null, 2)}`)
  }

  render () {
    const verts = verticals.map((vert, index) => (
      <Field
        key={vert.Id}
        component={Checkbox}
        name={`verticals[${index}]`}
        value={vert.Id}
      >
        {vert.Name}
      </Field>
    ))

    return (
      <Form
        onSubmit={this.submitHandler}
      >
        {({handleSubmit, values, reset}) => {
          const selectedVerticals = values.verticals && values.verticals.map((vert, index) => {
            if (vert) {
              return verticals[index].Id
            }

            return null
          })

          const selectedCategories = values.categories && values.categories.map((cat, index) => {
            if (cat) {
              return categories[index].Id
            }

            return null
          })

          const showCatgeories = !isEmpty(values.verticals && values.verticals.filter(v => v !== null))
          const showCourses = !isEmpty(values.categories && values.categories.filter(v => v !== null))

          const cats = categories.map((cat, index) => {
            if (values.verticals && selectedVerticals.includes(+cat.Verticals)) {
              return (
                <Field
                  key={cat.Id}
                  component={Checkbox}
                  name={`categories[${index}]`}
                >
                  {cat.Name}
                </Field>
              )
            }

            return null
          })

          const courseList = courses.map((course, index) => {
            if (values.categories && selectedCategories.includes(+course.Categories)) {
              return (
                <Field
                  key={course.Id}
                  component={Checkbox}
                  name={`courses[${index}]`}
                >
                  {course.Name}
                </Field>
              )
            }

            return null
          })

          return (
            <form onSubmit={handleSubmit}>
              <h1>Pick some verticals</h1>
              {verts}
              {showCatgeories &&
                <div>
                  <h1>Pick some categories</h1>
                  {cats}
                </div>
              }
              {showCourses && showCatgeories &&
                <div>
                  <h1>Now choose some courses</h1>
                  {courseList}
                </div>
              }
              {!isEmpty(values.categories) &&
                <div style={{ display: 'inline-flex' }}>
                  <Button primary>Get started</Button>
                  <Button
                    onClick={reset}
                    noSubmit
                  >
                    Reset
                  </Button>
                </div>
              }
            </form>
          )
        }}
      </Form>
    )
  }
}
