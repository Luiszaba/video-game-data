import React from 'react';
import './App.css';
import Login from './components/Login'
import Secrets from './components/Secrets'


class App extends React.Component {

  constructor() {
    super()
  this.state = {
    currentUser: null,
    loginForm: {
      email: "",
      password: ""
    },
      secrets: []
  }
}

componentDidMount() {
  const token = localStorage.getItem("token")
  if (token) {
  fetch("http://localhost:3001/get_current_user", {
    headers: {
      "Authorization": token
    }
  })
  .then(r => r.json())
  .then(resp => {
    if (resp.error) {
      alert(resp.error)
    } else {
      this.setState({
        currentUser: resp.user
      })
    }
  })
  
  }
}



  handleLoginFormChange = event => {
    const { name, value } = event.target
    this.setState({
      loginForm: {
      ...this.state.loginForm,
      [name]: value
      }
    })
  }

  handleLoginFormSubmit = event => {
    event.preventDefault()
    const userInfo = this.state.loginForm
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
      user: userInfo
      })
    }

    fetch("http://localhost:3001/login", headers)
    .then(r => r.json())
    .then(userJSON => {
      if (userJSON.error) {
        // failure
        alert("Invalid Credentials")
      } else {
        //success
        this.setState({
          currentUser: userJSON
        })
      }
    })
    .catch(console.log)

  }

  getSecrets = () => {
    const token = localStorage.getItem("token")
    fetch('http://localhost:3001/secrets', {
      headers: {
        "Authorization": token
      }
    })
    .then(r => r.json())
    .then(secrets => {
      if (secrets.error) {
        alert("Not authorized for secrets.")
      } else {
        this.setState({
          secrets
        })
      }
    })
    .catch(console.log)
  }

  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
        <h2>{currentUser ? `Logged in as ${currentUser.firstname} ${currentUser.lastname}` : "Not logged in."}</h2>

      <Login
          handleLoginFormChange={this.handleLoginFormChange}
          email={this.state.loginForm.email}
          password={this.state.loginForm.password}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
           />
         <button onClick={this.getSecrets}>Show User's Secrets</button>
         <Secrets secrets={this.state.secrets} />
      </div>
    );
  }
}

export default App;
