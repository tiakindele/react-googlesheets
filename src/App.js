import React, { Component } from 'react'
import axios from 'axios';
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      location: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/4dcb546c-efb2-4925-88b7-c543af060fa1', this.state)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    const { name, email, password, location } = this.state;
    return (
      <Container fluid className="container">
        <Form className="form" onSubmit={this.submitHandler}>
          <Header as='h1'>Leftovers Sign Up</Header>
          <Form.Field>
            <label>Company Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Company Email</label>
            <input placeholder='Enter your email' type="email" name = "email" value = {email} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Enter your password' type="password" name = "password" value = {password} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input placeholder='Enter your location' type="text" name = "location" value = {location} onChange={this.changeHandler}/>
          </Form.Field>
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}