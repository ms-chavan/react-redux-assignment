import React from "react";
import axios from "axios";
import { connect, DispatchProp } from "react-redux";
import { IStore } from "../../store/models/IStore";
import { RegistrationAction } from "../../store/actions/registration/RegistrationAction";
import Paper from "@material-ui/core/Paper";
import { Alert } from "@material-ui/lab";
import "./Registration.css";
import {
  IUser,
  IUsersRegister,
} from "../../store/models/registration/IUsersRegister";

interface IProps {}

interface IStateToProps {
  isAuthenticated: boolean;
  usersRegister: IUsersRegister;
  isSubmitted: boolean;
}

interface IState {}

const mapStateToProps = (state: IStore, ownProps: IProps): IStateToProps => ({
  isAuthenticated: state.login.isAuthenticated,
  usersRegister: state.registration,
  isSubmitted: state.registration.isSubmitted
});

class Registration extends React.Component<
  IProps & DispatchProp & IStateToProps,
  IState
> {
  constructor(props: IProps & DispatchProp & IStateToProps) {
    super(props);
    this.state = { isSubmitted: false };
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

  private _updateRegister = (restAPI: string, data: IUser) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const newUsersArr: IUser[] = [];
    // eslint-disable-next-line array-callback-return
    this.props.usersRegister?.users.map((user: IUser, index: number) => {
      newUsersArr.push(user);
    });
    newUsersArr.push(data);
    axios
      .post(restAPI, newUsersArr, {
        headers: headers,
      })
      .then((response: any) => {
        this.props.dispatch(RegistrationAction.setRegister(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  private _handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.dispatch(RegistrationAction.setSubmitted(true));
    const user: IUser = {
      id: this.props.usersRegister.users.length + 1,
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      address: event.target.address.value,
      dateOfRegistration: new Date(),
    };
    this._updateRegister("http://localhost:3030/users", user);
  };

  render() {
    return (
      <>
        {!this.props.isSubmitted && !this.props.isAuthenticated && (
          <table>
            <Paper elevation={3} className="paper">
              <form onSubmit={this._handleSubmit}>
                <label className="center">
                  <strong>Sign up</strong>
                </label>
                  <hr />
                <tr>
                  <td>Name</td>
                  <td>
                    <input type="text" name="name" required />
                  </td>
                </tr>

                <tr>
                  <td>Email ID</td>
                  <td>
                    <input type="email" name="email" required />
                  </td>
                </tr>

                <tr>
                  <td>Password</td>
                  <td>
                    <input type="password" name="password" required />
                  </td>
                </tr>

                <tr>
                  <td>Address</td>
                  <td>
                    <input type="text" name="address" />
                  </td>
                </tr>
                <button className="button" type="submit"> Register </button>
              </form>
            </Paper>
          </table>
        )}
        <div className="center">
          {this.props.isSubmitted && !this.props.isAuthenticated &&(
            <Alert severity="success">
              Registration successful — <strong>please login!</strong>
            </Alert>
          )}
          {this.props.isAuthenticated && (
            <div> Please log out to register another user. </div>
          )}
        </div>
      </>
    );
  }
}
export { Registration as Unconnected };
export default connect(mapStateToProps)(Registration);
