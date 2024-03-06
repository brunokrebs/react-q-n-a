import React from 'react'
import { ListTasks } from './ListTasks'

describe('<ListTasks />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListTasks />)
  })
})