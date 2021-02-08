/* eslint-disable array-callback-return */
import React from "react";
import axios from "axios";
import { connect, DispatchProp } from "react-redux";
import { IStore } from "../../store/models/IStore";
import { RegistrationAction } from "../../store/actions/registration/RegistrationAction";
import Paper from "@material-ui/core/Paper";
import "./Login.css";
import { IUser } from "../../store/models/registration/IUsersRegister";
import { Redirect } from "react-router-dom";
import { ICreds } from "../../store/models/login/ICreds";
import { LoginAction } from "../../store/actions/login/LoginAction";

interface IProps {}

interface IStateToProps {
  users: IUser[];
  isAuthenticated: boolean;
}

interface IState {
  isAuthenticated: boolean;
}

const mapStateToProps = (state: IStore, ownProps: IProps): IStateToProps => ({
  users: state.registration.users,
  isAuthenticated: state.login.isAuthenticated,
});

class Login extends React.Component<
  IProps & DispatchProp & IStateToProps,
  IState
> {
  constructor(props: IProps & DispatchProp & IStateToProps) {
    super(props);
    this.state = { isAuthenticated: false };
  }

  componentDidMount() {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get("http://localhost:3030/users", { headers: headers })
      .then((response: any) => {
        this.props.dispatch(RegistrationAction.setRegister(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  private _handleSubmit = (event: any) => {
    event.preventDefault();
    const creds: ICreds = {
      username: event.target.username.value,
      passwrod: event.target.password.value,
    };
    this.props.users.map((user: IUser, index: number) => {
      if (
        user.email?.toLocaleLowerCase() ===
          creds.username.toLocaleLowerCase() &&
        user.password?.toLocaleLowerCase() ===
          creds.passwrod.toLocaleLowerCase()
      ) {
        this.props.dispatch(
          LoginAction.setAuthDetails({
            userName: user.name,
            isAuthenticated: true,
          })
        );
      }
    });
  };

  render() {
    return (
      <>
        {!this.props.isAuthenticated && (
          <table>
            <Paper elevation={3} className="paper">
              <form onSubmit={this._handleSubmit}>
                <label className="center">
                  <strong>Log in</strong>
                </label>

                <tr>
                  <td>Username</td>
                  <td>
                    <input type="email" name="username" required />
                  </td>
                </tr>

                <tr>
                  <td>Password</td>
                  <td>
                    <input type="password" name="password" required />
                  </td>
                </tr>

                <button type="submit"> Log in </button>
              </form>
            </Paper>
          </table>
        )}
        <div>{this.props.isAuthenticated && <Redirect to="/dashboard" />}</div>
      </>
    );
  }
}
export { Login as Unconnected };
export default connect(mapStateToProps)(Login);
