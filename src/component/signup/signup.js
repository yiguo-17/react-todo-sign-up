import React, { Component } from "react";
import validator from "validator";
export default class signup extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    message: "",
  };

  handleOnInputChangeEmail = (event) => {
    const { email } = this.state;

    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        if (!validator.isEmail(email)) {
          this.setState({
            error: true,
            message: "please enter correct format email",
          });
        } else {
          this.setState({
            error: false,
            message: "",
          });
        }
      }
    );
    // console.log(this.state.email)
  };

  handleOnInputChangePassword = (event) => {
    const { password } = this.state;

    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        let regex = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";
        if (
          !validator.matches(
            password,
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
          )
        ) {
          this.setState({
            error: true,
            message: "capital,small,special char, number, and total 8 char",
          });
        } else {
          this.setState({
            error: false,
            message: "",
          });
        }
      }
    );
  };

  handleButton = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (!email && !password) {
      this.setState({
        error: true,
        message: "enter email and password",
      });
      return;
    } else if (!email) {
      this.setState({
        error: true,
        message: "enter the email",
      });
      return;
    } else if (!password) {
      this.setState({
        error: true,
        message: "enter the password",
      });
      return;
    } else {
      this.setState({
        error: false,
        message: "",
      });
    }
  };

  render() {
    const { email, password, error, message } = this.state;
    return (
      <div style={{ marginTop: "15%", textAlign: "center" }}>
        {error ? message : ""}
        <form action="">
          <input
            type="text"
            placeholder="enter email"
            name="email"
            value={email}
            onChange={this.handleOnInputChangeEmail}
          />
          <br />
          <input
            type="text"
            placeholder="enter password"
            name="password"
            value={password}
            onChange={this.handleOnInputChangePassword}
          />
          <br />

          <button onClick={(event) => this.handleButton(event)}>submit</button>
        </form>
      </div>
    );
  }
}
