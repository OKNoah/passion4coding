// @flow

import React, { Component } from 'react'
import { Form, Field, FormSpy } from 'react-final-form'
import { isEmpty, capitalize } from 'lodash'
import withRedux from 'next-redux-wrapper'
import { autobind } from 'core-decorators'
import { bindActionCreators } from 'redux'

import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
import { getVerticals } from '../redux/modules/verticals'
import { getCategories } from '../redux/modules/categories'
import { getCourses } from '../redux/modules/courses'
import initStore from '../redux'

type Props = {
  getVerticals: Function,
  getCategories: Function,
  getCourses: Function,
  verticals: Array<mixed>,
  categories: Array<mixed>,
  courses: Array<mixed>,
  isLoaded: Boolean
};

@withRedux(
  initStore,
  (state) => ({
    verticals: state.verticals.data,
    categories: state.categories.data,
    courses: state.courses.data
  }),
  (dispatch) => bindActionCreators({
    getVerticals,
    getCategories,
    getCourses
  }, dispatch)
)
export default class Index extends Component<Props> {
  static defaultProps = {
    verticals: [],
    categories: [],
    courses: []
  }

  static getInitialProps ({ store, isServer }) {
    store.dispatch(getVerticals())

    return { isServer }
  }

  @autobind
  submitHandler (values: ?Object) {
    const selectedCourses = values.courses && values.courses.map((course, index) => {
      if (course) {
        return this.props.courses[index]
      }
    }).filter(c => c)

    alert(`Selected:
    ${JSON.stringify(selectedCourses, null, 2)}`)
  }

  dispatchHandler (store: string, values: array) {
    const functionName = `get${capitalize(store)}`

    this.props[functionName](values || [])
  }

  render () {
    const { verticals, categories, courses } = this.props

    return (
      <Form
        onSubmit={this.submitHandler}
      >
        {({handleSubmit, values, reset}) => {
          const isPopulated = (prop) => !isEmpty(values[prop] && values[prop].filter(v => v))
          const show = {
            categories: isPopulated('verticals'),
            courses: isPopulated('categories') && isPopulated('verticals')
          }
          show.submit = show.courses && isPopulated('courses')

          const verts = verticals.map((vert, index) => (
            <Field
              key={vert.Id}
              component={Checkbox}
              name={`verticals[${index}]`}
            >
              {vert.Name}
            </Field>
          ))

          const categoriesList = !isEmpty(categories) && categories.map((cat, index) => (
            <Field
              key={cat.Id}
              component={Checkbox}
              name={`categories[${index}]`}
            >
              {cat.Name}
            </Field>
          ))

          const coursesList = show.courses && courses.map((course, index) => (
            <Field
              key={course.Id}
              component={Checkbox}
              name={`courses[${index}]`}
            >
              {course.Name}
            </Field>
          ))

          return (
            <form onSubmit={handleSubmit}>
              <h1>Pick some verticals</h1>
              {verts}
              {show.categories &&
                <div>
                  <h1>Pick some specifics</h1>
                  {categoriesList}
                </div>
              }
              {show.courses &&
                <div>
                  <h1>Now just pick your courses!</h1>
                  {coursesList}
                </div>
              }
              <FormSpy
                subscription={{
                  values: true,
                  initialValues: false,
                  pristine: true
                }}
                onChange={({ values: vals, pristine }) => {
                    if (!pristine) {
                      if (vals.verticals) {
                        this.dispatchHandler(
                          'categories',
                          vals.verticals.map((item, index) => item ? verticals[index] : null).filter(item => item)
                        )
                      }
                      if (vals.categories) {
                        this.dispatchHandler(
                          'courses',
                          vals.categories.map((item, index) => item ? categories[index] : null).filter(item => item)
                        )
                      }
                    }
                }}
              />
              {show.submit &&
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
