import React from "react";
import { IStore } from "../../store/models/IStore";
import { connect, DispatchProp } from "react-redux";
import { AccountDetails } from "./AccountDetails/AccountDetails";
import { LoginAction } from "../../store/actions/login/LoginAction";
import { DashboardAction } from "../../store/actions/dashboard/DashboardAction";
import "./Dashboard.css";

interface IProps {}
interface IState {}
interface IStateToProps {
  isAuthenticated: boolean;
  userName: string;
  totalSeconds: number;
  sessionTime: string;
}

const mapStateToProps = (state: IStore, ownProps: IProps): IStateToProps => ({
  isAuthenticated: state.login.isAuthenticated,
  userName: state.login.userName,
  totalSeconds: state.dashboard.totalSeconds,
  sessionTime: state.dashboard.formattedTime,
});

class Dashboard extends React.Component<
  IProps & IStateToProps & DispatchProp,
  IState
> {
  private timer: any;
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.timer = setInterval(() => {
        this.props.dispatch(DashboardAction.setTime(this.props?.totalSeconds));
      }, 1000);
    }
  }

  render() {
    return (
      <>
        {this.props.isAuthenticated && (
          <div className="center">
            Hello {this.props.userName}, you successfully logged in!
            <div>Time since log in &gt;&gt; {this.props.sessionTime} </div>
            <hr />
            <button className="button-margin" onClick={this._logout}>
              Log out
            </button>
            <AccountDetails resetSession={this._resetSession} />
          </div>
        )}
        {!this.props.isAuthenticated && (
          <div className="center">Please log in to access this page.</div>
        )}
      </>
    );
  }

  _logout = () => {
    this.props.dispatch(
      LoginAction.setAuthDetails({ isAuthenticated: false, userName: "" })
    );
    window.clearInterval(this.timer);
  };

  _resetSession = () => {
    this.props.dispatch(DashboardAction.setTime(0));
  };
}

export { Dashboard as Unconnected };
export default connect(mapStateToProps)(Dashboard);
