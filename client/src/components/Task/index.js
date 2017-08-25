import React, {Component} from 'react'
import { Container } from 'semantic-ui-react'


const Task = ({created_at, seen, problem_description}) =>
  <Container>
    <h1>Hello!!</h1>
    <span>{created_at} {seen} {problem_description}</span>
  </Container>

export default Task